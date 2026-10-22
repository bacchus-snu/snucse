import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import queryString from 'query-string';

const TagItem = createReactClass({

  propTypes: {
    accessible: PropTypes.bool,
    deletable: PropTypes.bool
  },

  handleClickDelete() {
    this.props.onDelete(this.props.tag.tag || this.props.tag.name);
  },

  render() {
    const {tag} = this.props;
    const tagValue = tag.tag || tag.name || '';
    const taggedBy = (tag.writer && tag.writer.name) || (tag.creator && tag.creator.name) || '';
    const tagName = this.props.accessible ? (
      <Link
        className="tag-item-name"
        to={{pathname: '/tags', search: '?' + queryString.stringify({tag: tagValue})}}
        >
        <span title={taggedBy ? `tagged by ${taggedBy}` : undefined}>{tagValue}</span>
      </Link>
    ) : (
      <span className="tag-item-name">{tagValue}</span>
    );
    const deleteButton = this.props.accessible && this.props.deletable ? (
      <button className="tag-item-delete-button" onClick={this.handleClickDelete}>×</button>
    ) : null;
    return (
      <li className="tag-item">
        {tagName}
        {deleteButton}
      </li>
    );
  }
});

export default TagItem;
