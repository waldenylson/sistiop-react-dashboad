import React from 'react';

import { IMNTdata } from '../index';

const MaintenanceCard: React.FC<IMNTdata> = (mntData: IMNTdata) => {
  return (
    <div
      style={{
        margin: 2,
      }}
    >
      <div className="card border-dark mb-3" style={{ height: 215 }}>
        <div className="card-header" style={{ height: 60, fontSize: 30 }}>
          RADAR TESTE STAR 2000
        </div>
        <div className="card-body">
          <h4 className="card-title">Secondary card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceCard;
