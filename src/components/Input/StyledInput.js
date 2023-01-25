import styled from "styled-components";

export const StyledInput = styled.input`
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

export const FileInput = styled.input.attrs({ type: "file" })`
  border-radius: 3px;
  background: #fff !important;
  font-family: "Cabin", sans-serif;
  font-size: 15px;
  letter-spacing: normal;
  line-height: 1.3;
  border: 1px dashed #aaaaaa !important;
  margin: 0px;
  width: 95%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    background: #fff !important;
    border: 1px dashed #0055ff;
  }

  &::placeholder {
    text-align: left;
    font-weight: 500;
    color: var(--placeholder);
  }

  &::file-selector-button {
    margin-right: 20px;
    border: 1px solid var(--blue-50);
    border-radius: 3px;
    padding: 10px;
    color: var(--blue-50);
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    &:hover {
      background: rgba(0, 87, 205, 0.1);
    }
  }
`;
