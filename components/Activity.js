import createReactClass from 'create-react-class';
import queryString from 'query-string';
import ActivityList from './ActivityList';
import {withRouterProps} from '../utils';

const Activity = createReactClass({

  render() {
    const query = queryString.parse(this.props.location.search);
    return (
      <div>
        <ActivityList query={query}/>
      </div>
    );
    // query {profileId, filterType, filterAction, page, limit}
  }
});

export default withRouterProps(Activity);
