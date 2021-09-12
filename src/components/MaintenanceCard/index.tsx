import React from "react";

import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MaintenanceCard: React.FC = () => {
  return (
    <>
      <div className="card border-dark mb-3 center">
        <div className="card-header">
          <h3>
            <b>
              <FontAwesomeIcon icon={faCogs} />
              &nbsp;MANUTENÇÕES PROGRAMADAS
            </b>
          </h3>
        </div>
        <div className="card-body">
          <p className="card-text-content">
            <b></b>
          </p>
        </div>
      </div>
    </>
  );
};

export default MaintenanceCard;
