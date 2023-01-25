import styled from "styled-components";
import { Link } from "gatsby";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0.375rem 1.125rem rgba(0, 33, 99, 0.09);
  @media (min-width: 48.625rem) {
    height: 5rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    color: var(--blue-40);
    font-size: 1rem;
    font-family: "Cabin", sans-serif;
    text-decoration: none;
    margin: 0.5rem;
    padding: 0.625rem 0.5rem 0 0.5rem;
    cursor: pointer;

    &:hover {
      border-bottom: 2px solid var(--blue-40);
      font-weight: "bold";
    }

    @media (max-width: 48rem) {
      display: none;
    }
  }
`;

export const NavbarLink = styled(Link)`
  color: var(--blue-40);
  font-size: 1rem;
  font-family: "Cabin", sans-serif;
  text-decoration: none;
  margin: 0.5rem;
  padding: 0.625rem 0.5rem 0 0.5rem;

  &:hover {
    border-bottom: 0.125rem solid var(--blue-40);
    font-weight: "bold";
    &:nth-child(6) {
      border-bottom: 0px;
    }
  }

  @media (max-width: 48rem) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: var(--blue-50);
  font-size: 1.2rem;
  font-family: "Cabin", sans-serif;
  text-decoration: none;
  margin: 0.625rem;
`;

export const Logo = styled.img`
  margin: 0.625rem;
  max-width: 11.25rem;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 4.375rem;
  height: 3.125rem;
  background: none;
  border: none;
  color: var(--blue-50);
  font-size: 2.8125rem;
  cursor: pointer;
  @media (min-width: 48.625rem) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 48.625rem) {
    display: none;
  }
`;

export const RedirectBlog = styled(Link)`
  position: relative;
  color: var(--blue-40);
  font-size: 1rem;
  font-family: "Cabin", sans-serif;
  text-decoration: none;
  margin: 0.5rem;
  padding: 0.625rem 0.5rem 0 0.5rem;
  cursor: pointer;

  &:hover {
    border-bottom: 0.125rem solid var(--blue-40);
    font-weight: "bold";
  }

  @media (max-width: 48rem) {
    display: none;
  }
`;

export const LinksBlog = styled.ul`
  position: absolute;

  list-style-type: none;
  padding: 0.375rem;

  width: 210px;
  border-radius: 0.1875rem;

  background: #fcfcfc;
  box-shadow: 0.125rem 0px 0.125rem rgba(0, 0, 0, 0.1);

  li {
    text-align: left;
    color: var(--blue-40);
    margin: 0.5rem;
  }
  a {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; //? Define quantas linhas
    -webkit-box-orient: vertical;
    svg {
      font-size: 1.25rem !important;
    }
  }
`;
