import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

import TagItemContainer from './TagItemContainer';

const TagList = createReactClass({

  propTypes: {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    accessible: PropTypes.bool,
    deletable: PropTypes.bool,
    deleteTag: PropTypes.func,
    tags: PropTypes.array
  },

  render() {
    const {id, accessible, deletable, deleteTag} = this.props;
    const tags = this.props.tags || [];
    const tagItems = tags.map(tag => {
      return (
        <TagItemContainer
          id={id}
          tag={tag}
          accessible={accessible}
          deletable={deletable}
          deleteTag={deleteTag}
          key={tag.tag}
          />
      );
    });
    return (
      <ul className="tag-list">
        {tagItems}
      </ul>
    );
  }
});

export default TagList;
