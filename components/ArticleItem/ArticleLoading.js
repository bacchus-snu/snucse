import React from 'react';
import createReactClass from 'create-react-class';

const ArticleLoading = createReactClass({
  render() {
    return (
      <div className="article-loading">
        <span>로딩 중</span>
      </div>
    );
  }
});

export default ArticleLoading;
