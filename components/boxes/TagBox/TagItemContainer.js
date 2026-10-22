import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

import TagItem from './TagItem';

const TagItemContainer = createReactClass({

  propTypes: {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    tag: PropTypes.object.isRequired,
    accessible: PropTypes.bool,
    deletable: PropTypes.bool,
    deleteTag: PropTypes.func
  },

  handleDelete(tagName) {
    this.props.deleteTag(this.props.id, tagName);
  },

  render() {
    return (
      <TagItem
        tag={this.props.tag}
        accessible={this.props.accessible}
        deletable={this.props.deletable}
        onDelete={this.handleDelete}
        />
    );
  }
});

export default TagItemContainer;
