import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

import TagBox from './TagBox';

const SearchResultTagBox = createReactClass({
  propTypes: {
    searchResultTags: PropTypes.array.isRequired
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
