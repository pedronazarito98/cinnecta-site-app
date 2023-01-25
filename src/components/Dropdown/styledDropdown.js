import styled from "styled-components";

export const WrapperDropdown = styled.div`
  position: relative;

  padding: 5px;
  background: ${({ open }) =>
    open ? "rgba(0, 62, 187, 0.15)" : "transparent"};
  border-radius: 3px;
  margin-left: auto;
  svg {
    cursor: pointer;
  }
  transition: 0.2s background-color linear;

  &:hover {
    background-color: #003ebb26;
  }
`;

export const MenuList = styled.ul`
  position: absolute;

  list-style-type: none;
  margin: -28px -55px;
  padding: 6px;

  width: 50px;
  border-radius: 3px;

  background: #fcfcfc;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.1);

  li {
    padding: 6px;
    margin: 0;
    text-align: center;
  }
  a {
    svg {
      font-size: 20px !important;
    }
  }
`;
