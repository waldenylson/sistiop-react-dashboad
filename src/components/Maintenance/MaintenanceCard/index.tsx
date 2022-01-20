import React from "react";

// import { Container } from './styles';
import { Container } from "./styles";

const MaintenanceCard: React.FC = () => {
  return (
    <>
      <Container>
        <div className="float-right">
          <div className="project_sort">
            <div id="panel">
              <ul className="project_list">
                <li>
                  <span className="project_badge"></span>
                  <a className="project_title alinha-esquerda">
                    <b>SVL</b>
                  </a>
                  <br />
                  <span className="fa fa-calendar data">
                    <a>
                      <b>&nbsp;00/00/0000</b>
                    </a>
                  </span>
                  <span className="data">
                    <a>
                      &nbsp;&nbsp;
                      <b className="fa fa-clock-o">&nbsp;00:00Z</b>
                    </a>
                  </span>
                  <br />
                  <span className="fa fa-calendar data">
                    <a>
                      <b>&nbsp;00/00/0000</b>
                    </a>
                  </span>
                  <span className="data">
                    <a>
                      &nbsp;&nbsp;
                      <b className="fa fa-clock-o">&nbsp;00:00Z</b>
                    </a>
                  </span>
                  <br />
                  <span className="motivo">Lorem ipsum dolor sit</span>
                  <br />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MaintenanceCard;
