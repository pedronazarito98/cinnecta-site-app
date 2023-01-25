import React from "react";
import { ChatBotStyled } from "./StyledWppButton";
import { ThemeProvider } from "styled-components";
import imgBot from "../../assets/images/icon-cinnecta.svg";

const theme = {
  background: "#FFFFFF",
  fontFamily: "Cabin",

  headerBgColor: "#FFFFFF",
  headerFontColor: "#0055ff",
  headerFontSize: "1rem",

  botBubbleColor: "#EBF1FF",
  botFontColor: "#0055FF",

  userBubbleColor: "#0057CD",
  userFontColor: "#FFFFFF",
};

export const WhatsAppButton = () => {
  const GoToComercial = () => {
    setTimeout(() => {
      window.open(
        "https://api.whatsapp.com/send?phone=5511995745301&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Cinnecta.",
        "_blank"
      );
    }, 1500);
    return <span>Redirecionando para o time comercial</span>;
  };

  const GoToVagas = () => {
    setTimeout(() => {
      window.open("http://localhost:8000/carreiras#vacancies", "_blank");
    }, 1500);
    return <span>Ver vagas</span>;
  };

  const steps = [
    {
      id: "1",
      message: "What number I am thinking?",
      trigger: "2",
      placeholder: "Cinnecta",
    },
    {
      id: "2",
      options: [
        {
          value: 3,
          label: "quero conhecer as soluções cinnecta",
          trigger: "3",
        },
        { value: 4, label: "confira nossas vagas", trigger: "4" },
        { value: 5, label: "Solicitar um orçamento", trigger: "5" },
      ],
    },
    {
      id: "3",
      component: <GoToComercial />,
      asMessage: true,
      trigger: "2",
    },
    {
      id: "4",
      message: `Ficamos felizes por seu interesse em trabalhar conosco. Para envio de currículo nosso e-mail é 
      rh@cinnecta.com
      . Consulte também nossa página de carreiras e saiba mais sobre as vagas disponíveis.`,
      trigger: "option_vagas",
    },

    {
      id: "option_vagas",
      options: [
        {
          value: 3,
          label: "Ver vagas",
          trigger: "redirect_vagas",
        },
      ],
    },
    {
      id: "redirect_vagas",
      waitAction: true,
      component: <GoToVagas />,
      asMessage: true,
      end: true,
    },
    {
      id: "5",
      message:
        "Ficamos felizes por seu interesse em ser nosso fornecedor. Para se cadastrar na base de fornecedores envie e-mail para adm@cinnecta.com.",
      end: true,
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <ChatBotStyled
        opened={false}
        floating={true}
        headerTitle="Cinnecta"
        steps={steps}
        botAvatar={imgBot}
        hideUserAvatar
      />
    </ThemeProvider>
  );
};
