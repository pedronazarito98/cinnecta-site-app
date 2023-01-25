import styled from "styled-components";
import ChatBot from "react-simple-chatbot";

export const StyledWppButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 3.75rem;
  height: 3.75rem;
  bottom: 3.125rem;
  right: 2.5rem;
  background-color: #25d366;
  color: #fff;
  border-radius: 3.125rem;
  text-align: center;
  font-size: 1.875rem;
  box-shadow: 0.125rem 0.125rem 0.1875rem #999;
  z-index: 100;

  cursor: pointer;
`;

export const ChatBotStyled = styled(ChatBot)`
  /* transform: translate(-8.8125rem, -18.25rem); */
`;

export const UserBubbleChat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9.5px 8px;
  gap: 8px;

  width: 233px;
  height: 40px;

  background: #0057cd;
  border-radius: 3px;

  flex: none;
  order: 0;
  flex-grow: 0;

  span {
    width: 217px;
    height: 19px;

    /* Button/sm */

    font-family: "Cabin";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 130% */

    display: flex;
    align-items: center;

    color: #ffffff;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;
