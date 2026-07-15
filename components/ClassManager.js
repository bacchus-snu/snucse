import React from 'react';
import createReactClass from 'create-react-class';
import Profile from './Profile';
import Article from './Article';

const re = /^\d+$/;
const ClassManager = createReactClass({
  render() {
    const {id} = this.props.match.params;
    if (re.test(id)) {
      return <Article id={id}/>;
    }
    return <Profile id={id}/>;
  }
});

export default ClassManager;
