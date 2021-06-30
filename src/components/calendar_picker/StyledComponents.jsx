import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 65vmax;
  padding: 2vmax 5vmax;
  border-radius: 10px;
  transition-duration: 0.7s;
  text-align: center;
  max-width: 1200px;

  &:hover {
    background-color: rgba(200, 200, 200, 0.2);
    background-image: url("https://webstockreview.net/images/dot-clipart-dot-pattern-4.png");
  }

  @media (max-width: 900px) {
    min-width: 20vmax;
    min-height: 60vmax;
    padding: 1vmax;
    border-radius: 10px;
    transition-duration: 0.7s;
    text-align: center;
  }
`;

export const StyledApp = styled.div`
  background-image: linear-gradient(
    to right top,
    rgba(150, 150, 150, 0),
    rgba(150, 150, 150, 0.5),
    rgba(150, 150, 150, 0.99),
    rgba(150, 150, 150, 0.8),
    rgba(150, 150, 150, 0.05)
  );
  min-height: 90vh;
  min-width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  @media (max-width: 900px) {
    font-size: 1.5vmax;
    min-height: 50vh;
    min-width: 40vw;
    padding: 2px;
    padding-bottom: 10px;
  }
`;

export const StyledDateChooser = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 500px;

  @media (max-width: 900px) {
    width: 230px;
  }
`;

export const StyledDateChooserButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap");

  font-family: "Balsamiq Sans", cursive !important;
  color: #0b204c;
  text-transform: uppercase;
  flex: 1;
  padding: 15px;
  background: none;
  cursor: pointer;
  border: none;
  border-bottom: 3px solid rgba(11, 32, 76, 0.1);
  outline: none;
  border-color: ${(props) => (props.isChoosing ? "#0b204c" : "none")};
  background-color: ${(props) => (props.isChoosing ? "#d6e3f81a" : "none")};

  span {
    display: block;
    min-height: 60px;
    font-size: 50px;

    @media (max-width: 900px) {
      font-size: 30px;
      min-height: 40px;
      margin-top: 10px;
    }
  }
`;

export const StyledCalendar = styled.div`
  font-family: arial;
  max-width: 430px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background: #0b204c;
  color: #fff;
  padding: 20px;

  @media (max-width: 900px) {
    max-width: 400px;
    border-radius: 10px;
    padding: 0px;
  }
`;

export const StyledCalendarDay = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap");

  font-family: "Balsamiq Sans", cursive !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: 0.3s ease background;
  border: none;
  outline: none;
  cursor: pointer;
  color: #8096c1;
  background: none;

  ${(props) => {
    return (
      props.isInBetween &&
      css`
        background-color: #d6e3f81f !important;
        color: #eee;
      `
    );
  }}

  ${(props) => {
    return (
      props.isSelected &&
      css`
        background-color: #000 !important;
        color: #eee;
      `
    );
  }}

&:hover {
    color: #eee;
    background-color: #d6e3f81f;
  }

  @media (max-width: 900px) {
    padding: 8px;
  }
`;

// className={`${css.calendar_day} ${
// isSelected ? `${css.is_selected}` : `$()`
// }`}
