import React from "react";
import api from "../../services/api.service";

import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IDadosEscalaResources {
  escalado: string;
  ramal: string;
}

interface ISobreaviso {
  nome: string;
  chatId: string;
  om: string;
  dadosEscalaResources: Array<IDadosEscalaResources>;
}

const WarningCard: React.FC = () => {
  const [sobreaviso, setSobreaviso] = React.useState<ISobreaviso[]>();
  const [loading, setLoading] = React.useState(true);

  const escalas = [
    "SOBREAVISO DA TIAD",
    "SOBREAVISO DA TIOP",
    "SOBREAVISO DA TISI",
    "SOBREAVISO DE REDES (TTIR)",
    "SOBREAVISO TÉCNICO AO RADAR",
    "TÉCNICO DE DIA À KM",
    "TÉCNICO DE DIA À SALA TÉCNICA DIURNO",
    "TÉCNICO DE DIA À SALA TÉCNICA NOTURNO",
  ];

  React.useEffect(() => {
    const timer = setTimeout(() => {
      api.get("/api/getSobreaviso").then((response) => {
        // console.log(response.data);
        // console.log(response.data[3].dadosEscalaResources);
        setSobreaviso(response.data);
      });

      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("This will run every second!");
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const escalaExibidas = sobreaviso?.filter((item) =>
    escalas.includes(item.nome)
  );

  escalaExibidas?.map((item) =>
    item.dadosEscalaResources[1].escalado.replace(" - CINDACTA III", "")
  );

  escalaExibidas?.splice(-3);

  console.log(escalaExibidas);

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
          {escalaExibidas?.map((item) => (
            <p className="card-text-content">
              {item.dadosEscalaResources[1].escalado.replace(
                " - CINDACTA III",
                "" + (item.dadosEscalaResources[1].ramal === null)
                  ? ""
                  : item.dadosEscalaResources[1].ramal
              )}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default WarningCard;
