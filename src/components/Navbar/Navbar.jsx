import React, { useState } from "react";
import {
  Logo,
  NavbarLink,
  LeftContainer,
  RightContainer,
  NavbarContainer,
  OpenLinksButton,
  NavbarLinkExtended,
  NavbarLinkContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  LinksBlog,
  RedirectBlog,
} from "./styledNavbar";
import { Link } from "gatsby";
import { Button } from "../Button/Button";
import LogoImg from "../../assets/images/Logo-cinnecta.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [openList, setOpenList] = useState(false);

  const routes = [
    {
      path: "/solucoes",
      label: "soluções",
    },
    {
      path: "/cinnecta",
      label: "  a cinnecta",
    },
    {
      path: "/contato",
      label: "contato",
    },
    {
      path: "/conteudos",
      label: "conteúdos",
      options: [
        {
          label: "estratégias de crescimento",
          path: "/conteudos/#estrategias_de_crescimento",
        },
        {
          label: "blog",
          path: "/conteudos/#blog",
        },
        {
          label: "reports e estudos",
          path: "/conteudos/#reports_e_estudos",
        },
        // {
        //   label: "cases",
        //   path: "/conteudos/#cases",
        // },
      ],
    },
    {
      path: "/carreiras",
      label: "carreiras",
    },
    {
      path: "/contato",
      label: "fale com um especialista",
    },
  ];

  const links = (extend) => {
    if (extend === true) {
      return routes?.map(({ path, label }) => {
        if (label !== "conteúdos" && label !== "fale com um especialista")
          return (
            <NavbarLinkExtended
              key={label}
              to={path}
              activeStyle={{
                borderBottom: `2px solid #002163`,
                fontWeight: "bold",
              }}
            >
              {label}
            </NavbarLinkExtended>
          );
        if (label === "fale com um especialista")
          return (
            <NavbarLinkExtended key={label} to={path}>
              <Button variant="primary" label={label} />
            </NavbarLinkExtended>
          );
        return [];
      });
    }

    return routes?.map(({ path, label, options }) => {
      if (label !== "conteúdos" && label !== "fale com um especialista")
        return (
          <NavbarLink
            key={label}
            to={path}
            activeStyle={{
              borderBottom: `2px solid #002163`,
              fontWeight: "bold",
            }}
          >
            {label}
          </NavbarLink>
        );
      if (label === "conteúdos") {
        return (
          <>
            <RedirectBlog
              key={label}
              activeStyle={{
                borderBottom: `2px solid #002163`,
                fontWeight: "bold",
              }}
              to={path}
              onMouseEnter={() => setOpenList(true)}
              onMouseLeave={() => setOpenList(false)}
            >
              conteúdos
              {openList && (
                <LinksBlog>
                  {options?.map(({ label, path }) => (
                    <li key={label}>
                      <Link to={path} title={label}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </LinksBlog>
              )}
            </RedirectBlog>
          </>
        );
      }
      if (label === "fale com um especialista")
        return (
          <NavbarLink key={label} to={path}>
            <Button variant="primary" label={label} />
          </NavbarLink>
        );
      return [];
    });
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Link to="/">
            <Logo src={LogoImg}></Logo>
          </Link>
        </LeftContainer>

        <RightContainer>
          <NavbarLinkContainer>
            {links(extendNavbar)}
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <AiOutlineClose /> : <AiOutlineMenu />}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>{links(extendNavbar)}</NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};
