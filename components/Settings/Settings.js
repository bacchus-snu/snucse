import React from 'react';

import ProfileImageSettingBox from './ProfileImageSettingBox';

import '../../stylesheets/settings.styl';

const Settings = React.createClass({
  render() {
    return (
      <div id="settings">
        <h5 id="settings-title">정보 변경</h5>
        <ProfileImageSettingBox/>
        <div className="form-group">
          <span className="form-label">비밀번호</span>
          <a id="settings-password-link" href="https://id.snucse.org/password" target="_blank" rel="noopener noreferrer">id.snucse.org에서 변경</a>
        </div>
      </div>
    );
  }
});

export default Settings;
