import createReactClass from 'create-react-class';

import {ProfileAdminTransferBox} from './boxes';
import {withRouterProps} from '../utils';

const ProfileAdminTransfer = createReactClass({
  render() {
    return <ProfileAdminTransferBox id={this.props.match.params.id}/>;
  }
});

export default withRouterProps(ProfileAdminTransfer);
