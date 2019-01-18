import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background-color: ${props => props.color};
  border-radius: 5px;
  display: flex;
  height: 18px;
  justify-content: center;
  width: ${(props) => {
    switch (props.weight) {
      case 45: return 225;
      case 25: return 160;
      case 10: return 100;
      case 5: return 70;
      case 2.5: return 50;
      default: return 0;
    }
  }}px;
`;
