import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    font-family: "helvetica";
    color: gray;
    width: 90vw;
    max-width: 600px;
    height: 240px;
    align-items: center;

  h1 {
      font-size: 1.2rem;
      color: black;
  }

  input {
    border-radius: 5px;
    outline: none;
    border: 1px solid lightgray;
    height: 48px;
    padding: 16px;
    font-size: 1.6rem;
    width: 90%;
      max-width: 360px;

  }

  button {
      background-color: #EA1D2C;
      color: white;
      height: 48px;
      width: 90%;
      max-width: 360px;
      border-radius: 5px;
      font-size: 1.6rem;
  }
`;
