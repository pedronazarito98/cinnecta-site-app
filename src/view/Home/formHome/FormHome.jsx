import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { Select } from "../../../components/Select/Select";
import InputMask from "react-input-mask";

import {
  CapsuleField,
  FooterForm,
  FormularioWrapper,
  WrapperButton,
  WrapperInput,
} from "./styledFormHome";
import axios from "axios";
import { Loading } from "../../../components/Loading/Loading";
import { sendRequest } from "../../../services/sendRequest";

export function Formhome({ myRef }) {
  const [onFields, setOnFields] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formId = "70e495cf-c8c0-4e05-9d65-04a8295be290";
  const portalId = "8759286";

  const [result, setResult] = useState([]);

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

  const repeatIndex = result.findIndex(({ guid }) => {
    return guid === formId;
  });

  const labelFields = result[repeatIndex]?.formFieldGroups?.map(
    ({ fields }) => fields
  );

  const verifyLabel = labelFields === undefined ? [] : labelFields;

  const submitHubspotForm = async (
    firstname,
    email,
    phone,
    company,
    segmento_da_empresa
  ) => {
    const fieldsHome = [
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
    ];

    const initalFields = [
      {
        name: "firstname",
        value: firstname,
      },
      {
        name: "email",
        value: email,
      },
    ];

    const intelligenceForm = onFields ? fieldsHome : initalFields;

    const data = {
      fields: intelligenceForm,
    };

    try {
      const response = await sendRequest.sendEmail(portalId, formId, data);

      const { status } = response;

      if (status === 200) {
        if (!onFields) {
          setOnFields(true);
          toast.success(
            "Preencha os campos abaixo para concluir a solicitação",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        } else {
          toast.success(
            "Solicitação registrada com sucesso! Em breve você receberá o contato de nossos especialistas.",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
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

  const onSubmit = handleSubmit((data) => {
    const { firstname, email, phone, company, segmento_da_empresa } = data;

    if (onFields) {
      const hubspot_response = submitHubspotForm(
        firstname,
        email,
        phone,
        company,
        segmento_da_empresa
      );
      return hubspot_response;
    } else {
      const hubspot_response = submitHubspotForm(firstname, email);
      return hubspot_response;
    }
  });

  const firstObject = verifyLabel[1]?.map(
    ({ label, name, placeholder, type }) => ({
      label,
      name,
      placeholder,
      type,
    })
  );

  const secondObject = verifyLabel[2]?.map(
    ({ label, name, placeholder, type }) => ({
      label,
      name,
      placeholder,
      type,
    })
  );

  const optionsSegmentoEmpresa = [
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
  ];

  const phoneField = (type) => {
    return type?.map(({ name, label, placeholder }) => {
      if (name === "phone") {
        return (
          <CapsuleField>
            <label htmlFor={name}>{label}</label>
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

      if (name === "company") {
        return (
          <CapsuleField>
            <label htmlFor={name}>{label}</label>
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
      return [];
    });
  };

  const selectField = (type) => {
    return type?.map(({ name, label }) => {
      return (
        <CapsuleField>
          <label htmlFor={name}>{label}</label>
          <Select {...register(name, { required: true })}>
            {optionsSegmentoEmpresa.map(({ optionLabel, optionValue }) => (
              <option key={optionLabel} value={optionValue}>
                {optionLabel}{" "}
              </option>
            ))}
          </Select>
          {errors[name]?.type === "required" && (
            <p>Preencha esse campo obrigatório</p>
          )}
        </CapsuleField>
      );
    });
  };

  return (
    <FormularioWrapper onSubmit={onSubmit} ref={myRef}>
      <WrapperInput justify="flex-start" maxWidth={806}>
        <Loading loading={labelFields === undefined} />
        {verifyLabel[0]?.map(({ label, name, placeholder }) => {
          return (
            <>
              <CapsuleField>
                <label htmlFor={name}>{label}</label>
                <Input
                  {...register(name, { required: true })}
                  name={name}
                  placeholder={placeholder}
                />
                {errors[name]?.type === "required" && (
                  <p>Preencha esse campo obrigatório</p>
                )}
              </CapsuleField>
            </>
          );
        })}
        {onFields && (
          <Fragment>
            {phoneField(firstObject)}

            {selectField(secondObject)}
          </Fragment>
        )}
      </WrapperInput>

      <FooterForm>
        <input
          type="checkbox"
          {...register("acceptTerms", { required: true })}
          id="acceptTerms"
        />
        <label htmlFor="veirfy">
          {" "}
          Eu concordo em receber outras comunicações da Cinnecta.
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
      <WrapperButton>
        <Button type="submit" label="solicite uma demo" />
      </WrapperButton>
    </FormularioWrapper>
  );
}
