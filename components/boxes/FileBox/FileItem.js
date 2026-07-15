import React from 'react';
import createReactClass from 'create-react-class';

const FileItem = createReactClass({
  render() {
    return (
      <a href={this.props.path}>{this.props.name}</a>
    );
  }
});

export default FileItem;
