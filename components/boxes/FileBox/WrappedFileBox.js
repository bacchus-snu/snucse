import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

import FileBox from './FileBox';

const WrappedFileBox = createReactClass({

  propTypes: {
    files: PropTypes.array,
    editable: PropTypes.bool,
    alives: PropTypes.object,
    onAliveChange: PropTypes.func
  },

  getInitialState() {
    return {
      showFileBox: false
    };
  },

  handleClickToggleButton() {
    this.setState({
      showFileBox: !this.state.showFileBox
    });
  },

  render() {
    const fileBox = this.state.showFileBox ? (
      <FileBox
        files={this.props.files}
        editable={this.props.editable}
        alives={this.props.alives}
        onAliveChange={this.props.onAliveChange}
        />
    ) : null;
    return (this.props.files || []).length === 0 ? null : (
      <div className="file-box-wrapper">
        <span onClick={this.handleClickToggleButton}>첨부파일 ({this.props.files.length})</span>
        {fileBox}
      </div>
    );
  }
});

export default WrappedFileBox;
