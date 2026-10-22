import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

import '../../../stylesheets/comment-box.styl';
import CommentList from './CommentList';
import CommentFormContainer from './CommentFormContainer';

const CommentBox = createReactClass({

  propTypes: {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    lastComment: PropTypes.object,
    commentCount: PropTypes.number,
    isAddable: PropTypes.bool,

    loadComments: PropTypes.func,
    loadReplies: PropTypes.func,
    setLastComment: PropTypes.func,
    writeComment: PropTypes.func,
    modifyFoldComments: PropTypes.func,
    editComment: PropTypes.func,
    deleteComment: PropTypes.func,

    commentsInfo: PropTypes.object,
    repliesInfo: PropTypes.object,

    renderRecommendBox: PropTypes.func
  },

  componentDidMount() {
    this.props.setLastComment(this.props.id, this.props.lastComment, this.props.commentCount);
  },

  componentWillReceiveProps(props) {
    if (this.props.id !== props.id) {
      props.setLastComment(props.id, props.lastComment, props.commentCount);
    }
  },

  render() {
    const commentForm = this.props.isAddable ?
      <CommentFormContainer id={this.props.id} writeComment={this.props.writeComment}/> :
      null;
    return (
      <div className="comment-container">
        <div className="comment-prefix"/>
        <div className="comment-main-container">
          <CommentList
            id={this.props.id}
            loadComments={this.props.loadComments}
            loadReplies={this.props.loadReplies}
            setLastComment={this.props.setLastComment}
            modifyFoldComments={this.props.modifyFoldComments}
            writeComment={this.props.writeComment}
            deleteComment={this.props.deleteComment}
            editComment={this.props.editComment}
            commentsInfo={this.props.commentsInfo}
            repliesInfo={this.props.repliesInfo}
            renderRecommendBox={this.props.renderRecommendBox}
            />
          {commentForm}
        </div>
      </div>
    );
  }
});

export default CommentBox;
