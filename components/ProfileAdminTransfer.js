import React from 'react';
import createReactClass from 'create-react-class';

import {ProfileAdminTransferBox} from './boxes';

const ProfileAdminTransfer = createReactClass({
  render() {
    return <ProfileAdminTransferBox id={this.props.match.params.id}/>;
  }
});

export default ProfileAdminTransfer;
