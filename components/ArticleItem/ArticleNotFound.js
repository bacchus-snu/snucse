import React from 'react';
import createReactClass from 'create-react-class';

const ArticleNotFound = createReactClass({
  render() {
    return (
      <div className="article-404">
        <span>글이 없습니다</span>
      </div>
    );
  }
});

export default ArticleNotFound;
