import React from 'react';
import {connect} from 'react-redux';

import {OidcLogin} from '../utils';
import Modal from './Modal';
import '../stylesheets/modalbox.styl';

import '../stylesheets/login.styl';

const Login = React.createClass({
  handleLogin() {
    OidcLogin.redirectToId();
  },

  render() {
    const modal = this.props.modalEnabled ? <Modal/> : null;
    return (
      <div id="login-background">
        <div id="login-box-container">
          <div id="login-github">
            <a
              href="https://github.com/snucse/snucse"
              target="_blank"
              className="login-github-link"
              rel="noopener noreferrer"
              >
              GitHub
            </a>
          </div>
          <h2 id="login-box-title">SNUCSE Login</h2>
          <div id="login-box">
            <h3 id="login-box-header">Welcome! :D</h3>
            <div id="login-button-container">
              <button id="login-button" onClick={this.handleLogin}>id.snucse.org로 로그인</button>
            </div>
            <p>
              id.snucse.org 계정으로 로그인합니다. id.snucse.org에서 학부생, 대학원생, 졸업생 등
              스누씨 이용 그룹에 속한 계정만 로그인할 수 있습니다. 처음 로그인할 때
              개인정보 수집, 이용 및 처리에 동의하면 스누씨 계정이 만들어집니다.
            </p>
            <section id="login-box-footer">
              <a className="login-box-footer-link" href="https://id.snucse.org/signup" target="_blank" rel="noopener noreferrer">id.snucse.org 가입</a>
              <a className="login-box-footer-link" href="https://id.snucse.org/password" target="_blank" rel="noopener noreferrer">비밀번호 찾기</a>
              <a className="login-box-footer-link" href="https://www.snu.ac.kr/personal_information" target="_blank" rel="noopener noreferrer">개인정보 처리방침</a>
            </section>
          </div>
        </div>
        {modal}
      </div>
    );
  }
});

const mapStateToProps = function (state) {
  return {
    modalEnabled: state.modal.enabled
  };
};

export default connect(mapStateToProps)(Login);
