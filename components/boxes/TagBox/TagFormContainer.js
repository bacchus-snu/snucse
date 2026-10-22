import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

import TagForm from './TagForm';

const TagFormContainer = createReactClass({

  propTypes: {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    addTag: PropTypes.func,
    candidates: PropTypes.object,
    loadCandidateTags: PropTypes.func,
    initializeCandidateTags: PropTypes.func,
    getTagFormId: PropTypes.func
  },

  handleAdd(tagName) {
    this.props.addTag(this.props.id, tagName);
  },

  handleLoadCandidateTags(query) {
    this.props.loadCandidateTags(this.props.getTagFormId(), query);
  },

  handleInitialCandidateTags() {
    this.props.initializeCandidateTags(this.props.getTagFormId());
  },

  render() {
    const candidates = this.props.candidates[this.props.getTagFormId()];
    return (
      <TagForm
        onAdd={this.handleAdd}
        onLoadCandidateTags={this.handleLoadCandidateTags}
        onInitialCandidateTags={this.handleInitialCandidateTags}
        candidateTags={candidates}
        />
    );
  }
});

export default TagFormContainer;
