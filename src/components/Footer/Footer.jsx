import React from "react";
import {
  AuxiliaryLink,
  ColumnCompanies,
  ColumnNetwork,
  ContainerIcons,
  ContainerLink,
  StyledFooter,
  StyledIcon,
  TitleLink,
  WrapperAuxiliaryLink,
  WrapperColumn,
} from "./styledFooter";
import logoCinnecta from "../../assets/images/Logo-cinnecta-white.svg";
import imageBdmg from "../../assets/images/bdmg.svg";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
const sendEmail =
  "mailto:cinnecta@cinnecta.com?subject=Conheça%20Cinnecta&body=Por%20favor%20informe%20os%20dados%20abaixo.%0DNome%20Completo:%0DCPF:%0DTelefone:";

const iconsFooter = [
  {
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/company/cinnecta/mycompany/",
  },
  {
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/channel/UCEtN62PVpx146_bcn_dGsEQ",
  },
  {
    icon: <BsFacebook />,
    link: "https://www.facebook.com/cinnecta",
  },
  {
    icon: <BsWhatsapp />,
    link:
      "https://api.whatsapp.com/send?phone=5531999702919&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Cinnecta.",
  },
];
const links = [
  {
    title: "soluções",
    links: [
      {
        redirect: "/solucoes/#cinnecta_ciass",
        name: "ciaaS",
      },
      {
        redirect: "/solucoes/#cinnecta_ltv",
        name: "cinnecta revenue",
      },
    ],
  },
  {
    title: "conteúdos",
    links: [
      {
        redirect: "/conteudos/#blog",
        name: "blog",
      },
      {
        redirect: "/conteudos/#cases",
        name: "cases",
      },
      {
        redirect: "/conteudos/#reports",
        name: "reports e estudos",
      },
      {
        redirect: "/conteudos/#estrategias_de_crescimento",
        name: "estratégias de crescimento",
      },
    ],
  },
  {
    title: "a cinnecta",
    links: [
      {
        redirect: "/cinnecta/#sobre_nos",
        name: "sobre nós",
      },
      {
        redirect: "/privacidade",
        name: "privacidade",
      },
      {
        redirect: "/cinnecta/#stamps",
        name: "nossos selos",
      },
      {
        redirect: "/cinnecta/#about",
        name: "cinnecta na mídia",
      },
      {
        redirect:
          "http://reinfo.app.cinnecta.com:88/?_ga=2.169468897.1929639730.1660139971-49652496.1660139971",
        name: "relação com investidores",
      },
    ],
  },
  {
    title: "contato",
    links: [
      {
        redirect: "/contato/#fale_com_especialista",
        name: "fale com um especialista",
      },
    ],
  },
  {
    title: "carreiras",
    links: [
      {
        redirect: "/carreiras/#culture",
        name: "nossa cultura",
      },
      {
        redirect: "/carreiras/#vacancies",
        name: "vagas abertas",
      },
    ],
  },
];
export function Footer() {
  return (
    <StyledFooter>
      <ContainerLink>
        {links.map(({ title, links }) => (
          <WrapperAuxiliaryLink key={title}>
            <TitleLink>{title}</TitleLink>
            {links.map(({ redirect, name }) => (
              <AuxiliaryLink key={name} to={redirect}>
                {name}
              </AuxiliaryLink>
            ))}
          </WrapperAuxiliaryLink>
        ))}
      </ContainerLink>

      <WrapperColumn>
        <ColumnNetwork>
          <ContainerIcons>
            {iconsFooter.map(({ icon, link }) => (
              <StyledIcon
                key={link}
                href={link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {icon}
              </StyledIcon>
            ))}
          </ContainerIcons>

          <img src={logoCinnecta} alt="logo cinnecta" loading="eager" />

          <a href={sendEmail}> cinnecta@cinnecta.com</a>
        </ColumnNetwork>

        <ColumnCompanies>
          <img src={imageBdmg} alt="BDMG" loading="eager" />
          <h3>empresa apoiada pelo Pró-Inovação</h3>
          <span>
            Cinnecta &copy; {new Date().getFullYear()} • Todos os direitos
            reservados
          </span>
        </ColumnCompanies>
      </WrapperColumn>
    </StyledFooter>
  );
}
