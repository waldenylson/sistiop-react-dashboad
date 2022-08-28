import React from 'react';

import {
  faClock,
  faCodeBranch,
  faPlane,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from './styles';

import cindacta from './cindacta.png';
import react from './react.png';

const GenericDevInfo: React.FC = () => {
  const [date, setDate] = React.useState(new Date());

  function tick() {
    setDate(new Date());
  }

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, [date]);

  return (
    <Container>
      <span className="leftSpace">
        {/* <FontAwesomeIcon icon={faPlane} /> */}
        <img src={cindacta} alt="" width={25} height={30} />
        &nbsp; TIOp
      </span>
      <span className="relogio">
        <FontAwesomeIcon icon={faClock} />
        {` ${date.toLocaleDateString('pt-BR')} ${date.toLocaleTimeString(
          'en-US',
          {
            hour12: false,
          },
        )}`}{' '}
        (BRT)
      </span>
      <span className="rightSpace">
        <FontAwesomeIcon icon={faCodeBranch} />
        &nbsp;SISTIOp_2022 (<img src={react} alt="" width={15} height={15} />)
      </span>
    </Container>
  );
};

export default GenericDevInfo;
