import React from 'react';
import createReactClass from 'create-react-class';
import queryString from 'query-string';

import TagContainer from './TagContainer';

const TagInfo = createReactClass({
  render() {
    return <TagContainer tagName={queryString.parse(this.props.location.search).tag}/>;
  }
});

export default TagInfo;
