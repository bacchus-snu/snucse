import React from 'react';
import createReactClass from 'create-react-class';

import RecommendBox from './RecommendBox';

const RecommendBoxContainer = createReactClass({
  handleRecommend() {
    this.props.recommend(this.props.id);
  },

  render() {
    return <RecommendBox onRecommend={this.handleRecommend} count={this.props.count}/>;
  }
});

export default RecommendBoxContainer;
