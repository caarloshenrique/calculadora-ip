import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    padding: 0 30%;

    @media only screen and (max-width: 600px) {
        padding: 0 5%;
    }

    @media only screen and (max-width: 900px) {
        padding: 0 8%;
    }

    @media only screen and (max-width: 1000px) {
        padding: 0 10%;
    }
`
export const Form = styled.form`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 5%;

      @media only screen and (min-width: 900px) {
        padding: 0 10%;
      }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 9px 7px 40px -6px rgba(0,0,0,0.25);
  background-color: #F3F3F3;
  overflow: hidden;
  width: 100%;
	padding: 0;
  height: 400px;
	min-height: 300px;
	border-radius: 8px;
	position: relative;
`

export const Title = styled.h5`
    color: #8557FF;
    font-size: 20px;
    margin-bottom: 50px;

    @media only screen and (min-width: 900px) {
      font-size: 25px;
      letter-spacing: 1.5px;
    }
`;

export const Description = styled.span`
    color: #53596b;
    font-size: 15px;
    margin-bottom: 30px;

    @media only screen and (min-width: 900px) {
      font-size: 20px;
    }
`

export const Input = styled.input`
    text-align: center;
    padding: 12px 0;
    border: 1px solid #ccc;
    border-radius: 9px;
    width: 20%;
    box-sizing: border-box;
    color: #53596b;
    font-size: 15px;
    outline: none;

    @media only screen and (min-width: 900px) {
      font-size: 20px;
    }
`;

export const Button = styled.button`
    width: 50%;
	  border: 0 none;
	  border-radius: 9px;
	  cursor: pointer;
	  padding: 15px;
    margin-top: 40px;
    background: #8557FF;
	  color: white;
    font-size: 15px;
    outline: none;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    &:hover {
      background: #6847c1;
    }
    
    @media only screen and (min-width: 900px) {
      font-size: 20px;
    }
`;

export const Toggle = styled.button`
  background-color: #8557FF;
  width: 50%;
  border-radius: 9px;
  color: white;
  border: 0;
  padding: 15px;
  font-size: 15px;
  cursor: pointer;
  outline: none;
  transition: all 0.25s linear;

  @media only screen and (min-width: 900px) {
      font-size: 20px;
    }

  &:hover {
      background: #6847c1;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const CardModal = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px auto;
  font-size: 15px;
  color: #53596b;
  line-height: 40px;
  letter-spacing: 1px;

  @media only screen and (min-width: 900px) {
      font-size: 20px;
  }

  @media (min-width: 768px) {
    border-radius: 0;
  }

  button {
    margin-top: 50px;
  }
`;
