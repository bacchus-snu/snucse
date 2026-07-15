import React from 'react';
import createReactClass from 'create-react-class';

const EmptyResultView = createReactClass({
  render() {
    return (
      <p className="search-result-empty">
        검색 결과가 없습니다.
      </p>
    );
  }
});

export default EmptyResultView;
