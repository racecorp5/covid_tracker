import React from 'react';

function StateData({ data }) {
  return (
    <div>
      <p>State: {data.state}</p>
      <p>Updated: {data.dateModified}</p>
      <p>Hospitalized: {data.hospitalized || 'N/A'}</p>
      <p>Confirmed Deaths: {data.deathConfirmed || 'N/A'}</p>
    </div>
  );
}

export default StateData;
