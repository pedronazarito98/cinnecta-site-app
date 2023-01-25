import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { Loading } from "../../../components/Loading/Loading";
import { Select } from "../../../components/Select/Select";
import { sendRequest } from "../../../services/sendRequest";

import {
  CapsuleField,
  ContainerText,
  FooterForm,
  FormularioWrapper,
  WrapperInput,
} from "./styledFormSolutions";

export const FormSolutions = () => {
  const optionsSaibaMais = [
    {
      optionLabel: "selecione uma opção",
      optionValue: "",
    },
    {
      optionLabel: "ciaaS",
      optionValue: "ciaaS",
    },
    {
      optionLabel: "Cinnecta",
      optionValue: "Cinnecta",
    },
    {
      optionLabel: "cinnecta revenue",
      optionValue: "cinnecta revenue",
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [result, setResult] = useState([]);

  const portalId = "8759286";
  const formId = "90b1cf54-c147-4b9d-9876-891f79f8b969";

  const submitHubspotForm = async (
    firstname,
    email,
    gostaria_de_saber_mais_sobre_
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
        name: "gostaria_de_saber_mais_sobre_",
        value: gostaria_de_saber_mais_sobre_,
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

  const onSubmit = handleSubmit((data) => {
    const { firstname, email, gostaria_de_saber_mais_sobre_ } = data;

    const hubspot_response = submitHubspotForm(
      firstname,
      email,
      gostaria_de_saber_mais_sobre_
    );

    return hubspot_response;
  });

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
    verifyLabel[3]
  );

  const labelsData = concatLabels[0] === undefined ? [] : concatLabels;

  const getInputs = (labelFields) => {
    return labelFields?.map(({ name, label, placeholder, type }) => {
      if (type !== "enumeration") {
        return (
          <CapsuleField key={name}>
            <label htmlFor={name}>{label} *</label>
            <Input
              {...register(name, { required: true })}
              name={name}
              type="text"
              placeholder={placeholder}
            />
            {errors?.firstname?.type === "required" && <p>Campo obrigatório</p>}
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
              {optionsSaibaMais.map(({ optionLabel, optionValue }) => (
                <option key={optionLabel} value={optionValue}>
                  {optionLabel}{" "}
                </option>
              ))}
            </Select>
            {errors?.gostaria_de_saber_mais_sobre_?.type === "required" && (
              <p>Campo obrigatório</p>
            )}
          </CapsuleField>
        );
      }
      return [];
    });
  };
  return (
    <Fragment>
      <ContainerText>
        <h2>Ficou alguma dúvida?</h2>
        <p>Saiba como impulsionar o ticket dos seus melhores clientes</p>
      </ContainerText>
      <FormularioWrapper onSubmit={onSubmit}>
        <Loading loading={concatLabels[0] === undefined} />
        <WrapperInput justify="flex-start" maxWidth={818}>
          {getInputs(labelsData)}
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
        <div style={{ width: "100%", maxWidth: "776px" }}>
          <Button type="submit" label="quero saber mais" />
        </div>
      </FormularioWrapper>
    </Fragment>
  );
};
