import React from "react";

import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MaintenanceCard from "./MaintenanceCard";

const Maintenance: React.FC = () => {
  return (
    <>
      <div className="card border-dark mb-3 center">
        <div className="card-header">
          <h3>
            <b>
              <FontAwesomeIcon icon={faCogs} />
              &nbsp; MANUTENÇÕES PROGRAMADAS
            </b>
          </h3>
        </div>
        <div className="card-body">
          <MaintenanceCard />
          <MaintenanceCard />
          <p className="card-text-content"></p>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
