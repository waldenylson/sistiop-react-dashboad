import styled from 'styled-components';

export const Container = styled.div`
  .parent {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 5px;
    font-weight: bold;
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div3 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .div4 {
    grid-area: 4 / 1 / 5 / 2;
  }
  .div5 {
    grid-area: 5 / 1 / 6 / 2;
  }
`;
