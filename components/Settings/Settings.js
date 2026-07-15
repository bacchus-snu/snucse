import React from 'react';
import createReactClass from 'create-react-class';

import ProfileImageSettingBox from './ProfileImageSettingBox';
import ChangePasswordBox from './ChangePasswordBox';

import '../../stylesheets/settings.styl';

const Settings = createReactClass({
  render() {
    return (
      <div id="settings">
        <h5 id="settings-title">정보 변경</h5>
        <ProfileImageSettingBox/>
        <br/>
        <ChangePasswordBox/>
      </div>
    );
  }
});

export default Settings;
