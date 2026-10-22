import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

import CommentForm from './CommentForm';

const CommentFormContainer = createReactClass({

  propTypes: {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    parentCommentId: PropTypes.number,
    writeComment: PropTypes.func.isRequired,
    isChild: PropTypes.bool
  },

  handleWrite(content) {
    this.props.writeComment(this.props.id, content, this.props.parentCommentId);
  },

  render() {
    return <CommentForm onWrite={this.handleWrite} isChild={this.props.isChild}/>;
  }
});

export default CommentFormContainer;
