import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CommentList from './CommentList';
import CommentFormContainer from './CommentFormContainer';
import CommentItem from './CommentItem';

const CommentItemContainer = createReactClass({

  propTypes: {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    comment: PropTypes.object.isRequired,
    writer: PropTypes.number.isRequired,
    setLastComment: PropTypes.func,
    modifyFoldComments: PropTypes.func,
    deleteComment: PropTypes.func,
    editComment: PropTypes.func,
    recommendBox: PropTypes.element,
    isChild: PropTypes.bool,
    loadReplies: PropTypes.func,
    repliesInfo: PropTypes.object,
    writeComment: PropTypes.func,
    renderRecommendBox: PropTypes.func
  },

  componentDidMount() {
    if (!this.props.isChild) {
      this.props.setLastComment(this.props.comment.id, this.props.comment.lastReply, this.props.comment.replyCount, true);
    }
  },

  handleDelete() {
    this.props.deleteComment(this.props.comment.id, this.props.id, this.props.isChild);
  },

  handleEdit(newContent) {
    this.props.editComment(this.props.comment.id, this.props.id, newContent, this.props.isChild);
  },

  render() {
    const mine = (this.props.userId === this.props.writer);
    let replyList = null;
    let replyForm = null;
    if (!this.props.isChild) {
      replyList = (
        <CommentList
          id={this.props.comment.id}
          loadComments={this.props.loadReplies}
          modifyFoldComments={this.props.modifyFoldComments}
          writeComment={this.props.writeComment}
          deleteComment={this.props.deleteComment}
          editComment={this.props.editComment}
          commentsInfo={this.props.repliesInfo}
          renderRecommendBox={this.props.renderRecommendBox}
          isChild
          />
      );
      replyForm = (
        <CommentFormContainer
          id={this.props.id}
          parentCommentId={this.props.comment.id}
          writeComment={this.props.writeComment}
          isChild
          />
      );
    }
    return (
      <CommentItem
        comment={this.props.comment}
        isDeletable={mine}
        onDelete={this.handleDelete}
        isEditable={mine}
        onEdit={this.handleEdit}
        recommendBox={this.props.recommendBox}
        isChild={this.props.isChild}
        replyList={replyList}
        replyForm={replyForm}
        />
    );
  }
});

const mapStateToProps = function (state) {
  return {
    userId: state.userInfo.userId
  };
};

export default connect(mapStateToProps)(CommentItemContainer);
