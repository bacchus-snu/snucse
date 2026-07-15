import React from 'react';
import createReactClass from 'create-react-class';
import {connect} from 'react-redux';

import {loadTagCloud} from '../../actions/dispatchers';
import TagCloud from './TagCloud';

const TagCloudContainer = createReactClass({
  render() {
    return <TagCloud tags={this.props.tags}/>;
  }
});

const mapStateToProps = function (state) {
  const {tags} = state.tag.cloud;
  return {
    tags
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    loadTagCloud: () => loadTagCloud(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagCloudContainer);
