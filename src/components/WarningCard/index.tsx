import React from "react";
import api from "../../services/api.service";

import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISobreaviso {
  nome_guerra: string;
  especialidade: string;
  posto_gradu: string;
  agenda: string;
}

const WarningCard: React.FC = () => {
  const [sobreaviso, setSobreaviso] = React.useState<ISobreaviso>();

  React.useEffect(() => {
    api.get("/api/getSobreaviso").then((response) => {
      console.log(response.data[0]);
      setSobreaviso(response.data[0]);
    });
  }, []);

  return (
    <>
      <div className="card border-dark mb-3 center">
        <div className="card-header">
          <h3>
            <b>
              <FontAwesomeIcon icon={faBell} />
              &nbsp;SOBREAVISO TÉCNICO
            </b>
          </h3>
        </div>
        <div className="card-body">
          <p className="card-text-content">
            <b>
              {sobreaviso?.posto_gradu +
                " " +
                sobreaviso?.especialidade +
                " " +
                sobreaviso?.nome_guerra +
                " - " +
                sobreaviso?.agenda}
            </b>
          </p>
        </div>
      </div>
    </>
  );
};

export default WarningCard;
