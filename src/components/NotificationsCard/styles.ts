import styled from 'styled-components';

export const Container = styled.div`
  .notifications {
    overflow: hidden;
    height: 100%;
    margin-bottom: -10px;
  }
  .box-notification {
    height: 50%;
    width: 99.5%;
    text-align: center;
    font-size: 40px;
    color: red;
  }
  .box-notification-rplCGNA {
    height: 50%;
    width: 99.5%;
    text-align: center;
    font-size: 40px;
    color: yellow;
  }
  .box-notification-height {
    height: 293px;
  }
  .box-bg-color-notification {
    background-color: #ffffff;
  }
  @keyframes fa-blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 4;
    }
  }
  .fa-blink {
    -webkit-animation: fa-blink 0.75s linear infinite;
    -moz-animation: fa-blink 0.75s linear infinite;
    -ms-animation: fa-blink 0.75s linear infinite;
    -o-animation: fa-blink 0.75s linear infinite;
    animation: fa-blink 0.75s linear infinite;
  }
`;
