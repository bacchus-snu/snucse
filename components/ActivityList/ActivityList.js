import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

import ActivityListItem from './ActivityListItem';

const ActivityList = createReactClass({

  propTypes: {
    loadActivity: PropTypes.func,
    activities: PropTypes.array,
    loading: PropTypes.bool,
    isError: PropTypes.bool,
    query: PropTypes.object
  },

  componentDidMount() {
    this.props.loadActivity(this.props.query);
  },

  componentWillReceiveProps(props) {
    // fixme object 째 비교 좀
    if (this.props.query.profileId !== props.query.profileId ||
        this.props.query.filterType !== props.query.filterType ||
        this.props.query.filterAction !== props.query.filterAction ||
        this.props.query.page !== props.query.page ||
        this.props.query.limit !== props.query.limit) {
      this.props.loadActivity(props.query);
    }
  },

  render() {
    const listItemViews = this.props.activities.map(activity => {
      return (
        <ActivityListItem
          activity={activity}
          key={`activity-${activity.id}`}
          />
      );
      // to activity list item view
    });
    const view = this.props.isError ? (
      <span id="activity-list-error">에러</span>
    ) : this.props.loading ? (
      <span id="activity-list-loading">로딩 중</span>
    ) : (
      <ul id="activity-list-wrapper">
        {listItemViews}
      </ul>
    );
    return (
      <main id="activity-list">
        {view}
      </main>
    );
  }
});

export default ActivityList;
