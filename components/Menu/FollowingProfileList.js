import React from 'react';
import createReactClass from 'create-react-class';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const FollowingProfileList = createReactClass({
  render() {
    const profiles = this.props.me.following.map(profile => {
      return (
        <li key={`${profile.id}${profile.name}`}><Link to={`/${profile.id}`}>{profile.name}</Link></li>
      );
    });

    return (
      <ul id="following-profiles-list">
        {profiles}
      </ul>
    );
  }
});

const mapStateToProps = function (state) {
  return {
    me: state.me
  };
};

export default connect(mapStateToProps)(FollowingProfileList);
