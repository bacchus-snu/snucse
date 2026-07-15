import React from 'react';
import createReactClass from 'create-react-class';

import TagBox from './TagBox';

const SearchResultTagBox = createReactClass({
  propTypes: {
    searchResultTags: React.PropTypes.array.isRequired
  },

  render() {
    return (
      <TagBox
        tags={this.props.searchResultTags}
        accessible
        />
    );
  }
});

export default SearchResultTagBox;
