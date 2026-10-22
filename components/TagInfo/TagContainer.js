import createReactClass from 'create-react-class';
import {connect} from 'react-redux';

import {loadTagInformation} from '../../actions/dispatchers';
import {UserLevel, withRouterProps} from '../../utils';
import TagViewWrapper from './TagViewWrapper';

const TagContainer = createReactClass({
  componentDidMount() {
    if (this.props.userLevel === UserLevel.REGULAR) {
      this.props.loadTagInformation(this.props.tagName);
    }
  },

  componentWillReceiveProps(props) {
    if ((props.userLevel !== this.props.userLevel ||
        props.tagName !== this.props.tagName) &&
        props.userLevel === UserLevel.REGULAR) {
      this.props.loadTagInformation(props.tagName);
    }
  },

  render() {
    switch (this.props.userLevel) {
      case UserLevel.REGULAR:
        return <TagViewWrapper tagName={this.props.tagName} loading={this.props.loading} tag={this.props.tag}/>;

      default:
        return <p>준회원은 태그 조회가 불가능합니다.</p>;
    }
  }
});

const mapStateToProps = function (state) {
  const {userLevel} = state.userInfo;
  const {loading, targetTag} = state.tag.view;
  return {
    userLevel,
    loading,
    tag: targetTag
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    loadTagInformation: tagName => loadTagInformation(dispatch, tagName, () => ownProps.navigate(-1))
  };
};

export default withRouterProps(connect(mapStateToProps, mapDispatchToProps)(TagContainer));
