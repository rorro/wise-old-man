import React from 'react';
import PropTypes from 'prop-types';
import { Countdown } from 'components';
import { TopParticipant, TotalGained } from '../components';

function Widgets({ competition, metric }) {
  const { status, startsAt, endsAt } = competition;

  const targetDate = status === 'upcoming' ? startsAt : endsAt;
  const countdownLabel = status === 'upcoming' ? 'Starting in' : 'Time Remaining';

  return (
    <>
      <div className="col-md-4">
        <span className="widget-label">{countdownLabel}</span>
        <Countdown targetDate={targetDate} />
      </div>
      <div className="col-md-4 col-sm-6">
        <span className="widget-label">Top Player</span>
        <TopParticipant metric={metric} participants={competition.participants} />
      </div>
      <div className="col-md-4 col-sm-6">
        <span className="widget-label">Total Gained</span>
        <TotalGained metric={metric} totalGained={competition.totalGained} />
      </div>
    </>
  );
}

Widgets.defaultProps = {
  competition: undefined
};

Widgets.propTypes = {
  metric: PropTypes.string.isRequired,
  competition: PropTypes.shape({
    metric: PropTypes.string,
    status: PropTypes.string,
    totalGained: PropTypes.number,
    startsAt: PropTypes.instanceOf(Date),
    endsAt: PropTypes.instanceOf(Date),
    participants: PropTypes.arrayOf(PropTypes.shape())
  })
};

export default Widgets;
