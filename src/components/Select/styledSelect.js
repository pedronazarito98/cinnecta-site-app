import styled from "styled-components";


export const StyledSelect = styled.select`
  border-radius: 3px;
  background: #f5f5f5 !important;
  color: rgb(70, 70, 70);
  font-family: "Cabin", sans-serif;
  font-size: 15px;
  letter-spacing: normal;
  line-height: 1.3;
  border: 0px;
  margin: 0px;
  width: 95%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    background: #fff !important;
    border: 1px solid #0055ff;
  }

  &::placeholder {
    text-align: left;
    font-weight: 500;
    color: var(--placeholder);
  }
`;