import styled from "styled-components";

const Button = styled.button`
  padding: ${(props) => props.theme.buttonSizes[props.size || "md"].padding};
  font-size : ${(props) => props.theme.buttonSizes[props.size || "md"].fontSize};


  border-radius: 10px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};
`;
export default Button;
