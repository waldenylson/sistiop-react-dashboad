import React from 'react';

// import { Container } from './styles';
import { Container } from './styles';

const MaintenanceCard: React.FC = () => {
  return (
    <>
      <Container className="teste" style={{ margin: 2, width: '49%' }}>
        <div className="card border-dark mb-3" style={{ maxWidth: '99%' }}>
          <div className="card-header">Header</div>
          <div className="card-body">
            <h4 className="card-title">Secondary card title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MaintenanceCard;
