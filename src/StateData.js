import React from 'react';
import PropTypes from 'prop-types';

function StateData({ data = {} }) {
  return (
    <div>
      <p>State: {data.state}</p>
      <p>Updated: {data.dateModified}</p>
      <p>Hospitalized: {data.hospitalized || 'N/A'}</p>
      <p>Confirmed Deaths: {data.deathConfirmed || 'N/A'}</p>
    </div>
  );
}

StateData.propTypes = {
  data: PropTypes.shape({
    state: PropTypes.string.isRequired,
    dateModified: PropTypes.string.isRequired,
    hospitalized: PropTypes.string,
    deathConfirmed: PropTypes.string,
  }),
};

StateData.defaultProps = {
  data: {
    state: '00',
    dateModified: 'January',
    hospitalized: '0',
    deathConfirmed: '0',
  },
};
export default StateData;
