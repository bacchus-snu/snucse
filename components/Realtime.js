import React from 'react';
import createReactClass from 'create-react-class';
import {connect} from 'react-redux';

/*
 * props
 * - from
 */

const Realtime = createReactClass({
  render() {
    const {timestamp, from} = this.props;
    return <div className="time">{from.from(timestamp)}</div>;
  }
});

const mapStateToProps = function (state) {
  return {
    timestamp: state.realtime.timestamp
  };
};

export default connect(mapStateToProps)(Realtime);
