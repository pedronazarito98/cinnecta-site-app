import React, { useEffect, useState } from "react";
import { Button } from "../../../../../components/Button/Button";
import { Input } from "../../../../../components/Input/Input";
import { Select } from "../../../../../components/Select/Select";
import { CapsuleField, CardForm } from "./styledFormContact";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FooterForm } from "../../../../Home/formHome/styledFormHome";
import InputMask from "react-input-mask";
import axios from "axios";
import { Loading } from "../../../../../components/Loading/Loading";
import { sendRequest } from "../../../../../services/sendRequest";

export const optionsTamanhoEmpresa = [
  {
    optionLabel: "selecione uma opção",
    optionValue: "",
  },
  {
    optionLabel: "1 a 99",
    optionValue: "1 a 99",
  },
  {
    optionLabel: "100 a 499",
    optionValue: "100 a 499",
  },
  {
    optionLabel: "500 ou mais",
    optionValue: "500 ou mais",
  },
];

const optionsSelect = {
  segmento_da_empresa: [
    {
      optionLabel: "selecione uma opção",
      optionValue: "",
    },
    {
      optionLabel: "Agronegócio",
      optionValue: "Agronegócio",
    },
    {
      optionLabel: "Educação e treinamento",
      optionValue: "Educação e treinamento",
    },
    {
      optionLabel: "Fármaco",
      optionValue: "Fármaco",
    },
    {
      optionLabel: "Financeiro",
      optionValue: "Financeiro",
    },
    {
      optionLabel: "Linhas aéreas",
      optionValue: "Linhas aéreas",
    },
    {
      optionLabel: "Mercado imobiliário e incorporadora",
      optionValue: "Mercado imobiliário e incorporadora",
    },
    {
      optionLabel: "Mobilidade urbana",
      optionValue: "Mobilidade urbana",
    },
    {
      optionLabel: "Saúde",
      optionValue: "Saúde",
    },
    {
      optionLabel: "Seguradora e corretoras",
      optionValue: "Seguradora e corretoras",
    },
    {
      optionLabel: "Tecnologia e inovação",
      optionValue: "Tecnologia e inovação",
    },
    {
      optionLabel: "Telecomunicações",
      optionValue: "Telecomunicações",
    },
    {
      optionLabel: "Varejo",
      optionValue: "Varejo",
    },
    {
      optionLabel: "Outros",
      optionValue: "Outros",
    },
  ],
  motivo_do_contato: [
    {
      optionLabel: "selecione uma opção",
      optionValue: "",
    },
    {
      optionLabel: "Solicitar uma demonstração",
      optionValue: "Solicitar uma demonstração",
    },
    {
      optionLabel: "Mais informações sobre as soluções",
      optionValue: "Mais informações sobre as soluções",
    },
  ],
};

export const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [result, setResult] = useState([]);

  const portalId = "8759286";
  const formId = "c07b00c4-7e74-46d8-87e5-7309d35fc680";

  const submitHubspotForm = async (
    firstname,
    email,
    phone,
    company,
    segmento_da_empresa,
    motivo_do_contato
  ) => {
    const fields = [
      {
        name: "firstname",
        value: firstname,
      },
      {
        name: "email",
        value: email,
      },
      {
        name: "phone",
        value: phone,
      },
      {
        name: "company",
        value: company,
      },
      {
        name: "segmento_da_empresa",
        value: segmento_da_empresa,
      },
      {
        name: "motivo_do_contato",
        value: motivo_do_contato,
      },
    ];

    try {
      const response = await sendRequest.sendEmail(portalId, formId, {
        fields,
      });

      const { status } = response;

      if (status === 200) {
        toast.success("Obrigado por enviar o formulário.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      if (error) {
        toast.error("Erro ao enviar o formulário, tente novamente.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      return error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://qsqd2pawhwgim2on6dsn2gfgv40fxkqj.lambda-url.us-east-1.on.aws`
        );
        if (result.status === 200) {
          setResult(result.data);
          return result;
        }
      } catch (error) {
        console.error(error);
        return error;
      }
    };
    return fetchData();
  }, []);

  const identifierForm = result?.findIndex(({ guid }) => {
    return guid === formId;
  });

  const labelFields = result[identifierForm]?.formFieldGroups?.map(
    ({ fields }) => fields
  );
  const verifyLabel = labelFields === undefined ? [] : labelFields;

  const concatLabels = [].concat(
    verifyLabel[0],
    verifyLabel[1],
    verifyLabel[2],
    verifyLabel[3]
  );

  const labelsData = concatLabels[0] === undefined ? [] : concatLabels;

  const getInputs = () => {
    return labelsData?.map(({ name, label, placeholder, type }) => {
      if (type !== "enumeration" && name !== "phone") {
        return (
          <CapsuleField key={name}>
            <label htmlFor={name}>{label} *</label>
            <Input
              {...register(name, { required: true })}
              name={name}
              type="text"
              placeholder={placeholder}
            />
            {errors[name]?.type === "required" && (
              <p>Preencha esse campo obrigatório</p>
            )}
          </CapsuleField>
        );
      }

      if (name === "phone") {
        return (
          <CapsuleField key={name}>
            <label htmlFor={name}>{label} *</label>
            <InputMask
              mask="(99)99999-9999"
              {...register(name, { required: true })}
              type="text"
              name={name}
              placeholder={placeholder}
            />
            {errors[name]?.type === "required" && (
              <p>Preencha esse campo obrigatório</p>
            )}
          </CapsuleField>
        );
      }

      if (type === "enumeration") {
        return (
          <CapsuleField key={name}>
            <label htmlFor={name}>{label}*</label>
            <Select
              {...register(name, {
                required: true,
              })}
            >
              {optionsSelect[name].map(({ optionLabel, optionValue }) => {
                console.log(optionValue);
                return (
                  <option key={optionLabel} value={optionValue}>
                    {optionLabel}{" "}
                  </option>
                );
              })}
            </Select>
            {errors[name]?.type === "required" && (
              <p>Preencha esse campo obrigatório</p>
            )}
          </CapsuleField>
        );
      }
      return [];
    });
  };

  const onSubmit = handleSubmit((data) => {
    const {
      firstname,
      email,
      phone,
      company,
      segmento_da_empresa,
      motivo_do_contato,
    } = data;

    const hubspot_response = submitHubspotForm(
      firstname,
      email,
      phone,
      company,
      segmento_da_empresa,
      motivo_do_contato
    );

    return hubspot_response;
  });

  return (
    <CardForm onSubmit={onSubmit}>
      <Loading loading={concatLabels[0] === undefined} />
      {getInputs()}

      <FooterForm>
        <input
          type="checkbox"
          {...register("acceptTerms", { required: true })}
          id="acceptTerms"
        />
        <label htmlFor="veirfy">
          {" "}
          Eu concordo em receber outras comunicações da Cinnecta. *
        </label>
        {errors?.acceptTerms?.type === "required" && (
          <p>Aceite os termos de privacidade.</p>
        )}
        <span>
          Ao informar meus dados, concordo com a{" "}
          <a
            href="https://cinnecta.com/privacy-policy/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Política de Privacidade.
          </a>{" "}
          Você pode alterar suas permissões de comunicação a qualquer tempo.
        </span>
      </FooterForm>
      <Button variant="primary" label="enviar" />
    </CardForm>
  );
};
