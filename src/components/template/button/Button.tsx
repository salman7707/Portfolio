import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  width: 100%;
  padding:13px;
  border-radius: 25px;
  /* box-shadow:0px 0px 6px white; */
  box-shadow:#ffffff1f inset 0px -8px 10px;
  &:hover{
    box-shadow:#ffffff3f inset 0px -6px 10px;
  }
`;

export default Button;
