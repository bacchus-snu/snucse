import React from 'react';
import {connect} from 'react-redux';
import {replace} from 'react-router-redux';
import queryString from 'query-string';

import {DataCon, Url, OidcLogin} from '../utils';
import {alertModal} from '../actions/dispatchers';
import PrivacyConsent from './PrivacyConsent';

const failureMessages = {
  403: 'id.snucse.org 계정이 스누씨 이용 그룹에 속해 있지 않습니다. id.snucse.org에서 그룹 가입을 신청해 주세요.',
  409: 'id.snucse.org 아이디와 같은 프로필 아이디가 이미 있어 스누씨 계정을 만들 수 없습니다.',
  419: '회원가입 대기중입니다.'
};

const LoginCallback = React.createClass({
  getInitialState() {
    return {
      consentRequired: false
    };
  },

  componentDidMount() {
    const {code, state} = queryString.parse(this.props.location.search);
    const codeVerifier = sessionStorage.getItem('codeverifier');
    const privacyConsent = sessionStorage.getItem('privacyconsent') === 'true';
    const expectedState = sessionStorage.getItem('oidcstate');
    sessionStorage.removeItem('oidcstate');
    sessionStorage.removeItem('codeverifier');
    sessionStorage.removeItem('privacyconsent');
    if (!code || !expectedState || state !== expectedState) {
      this.props.fail('로그인에 실패했습니다. 다시 시도해 주세요.');
      return;
    }
    DataCon.postDataToServer(Url.getUrl('/users/oidc_sign_in'), 'POST', {
      code, codeVerifier, privacyConsent
    }).then(data => {
      this.props.signIn(data.accessToken);
    }).catch(err => {
      if (err.status === 404) {
        this.setState({consentRequired: true});
      } else {
        this.props.fail(failureMessages[err.status] || '로그인에 실패했습니다. 다시 시도해 주세요.');
      }
    });
  },

  handleAgree() {
    sessionStorage.setItem('privacyconsent', 'true');
    OidcLogin.redirectToId();
  },

  handleDisagree() {
    this.props.fail('개인정보 수집, 이용 및 처리에 동의하지 않아 스누씨 계정을 만들지 않았습니다.');
  },

  render() {
    if (this.state.consentRequired) {
      return <PrivacyConsent onAgree={this.handleAgree} onDisagree={this.handleDisagree}/>;
    }
    return null;
  }
});

const mapDispatchToProps = function (dispatch) {
  return {
    signIn: accessToken => {
      localStorage.setItem('snucsesession', accessToken);
      const next = sessionStorage.getItem('entrypath') || '/';
      sessionStorage.removeItem('entrypath');
      dispatch(replace(next));
    },
    fail: message => {
      alertModal(dispatch, '알림', message);
      dispatch(replace('/login'));
    }
  };
};

export default connect(null, mapDispatchToProps)(LoginCallback);
