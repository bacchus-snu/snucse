import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

import TagList from './TagList';
import TagFormContainer from './TagFormContainer';

const TagBox = createReactClass({
  propTypes: {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    addable: PropTypes.bool,
    addTag: PropTypes.func,
    candidates: PropTypes.object,
    loadCandidateTags: PropTypes.func,
    initializeCandidateTags: PropTypes.func,
    getTagFormId: PropTypes.func,
    deletable: PropTypes.bool,
    deleteTag: PropTypes.func,
    tags: PropTypes.array,
    accessible: PropTypes.bool
  },

  render() {
    return (
      <div className="tag-container">
        <TagList
          id={this.props.id}
          accessible={this.props.accessible}
          deletable={this.props.deletable}
          deleteTag={this.props.deleteTag}
          tags={this.props.tags}
          />
        {this.props.addable ? <TagFormContainer
          id={this.props.id}
          addTag={this.props.addTag}
          candidates={this.props.candidates}
          loadCandidateTags={this.props.loadCandidateTags}
          initializeCandidateTags={this.props.initializeCandidateTags}
          getTagFormId={this.props.getTagFormId}
          /> : null}
      </div>
    );
  }
});

export default TagBox;
