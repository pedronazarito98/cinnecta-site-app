import React, { useEffect, useState } from "react";
import { CapsuleField, CardForm } from "./styledFormCareers";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { FooterForm } from "../../Home/formHome/styledFormHome";
import { Select } from "../../../components/Select/Select";
import { Title } from "../../../components/Title/Title";
import InputMask from "react-input-mask";
import axios from "axios";
import { Loading } from "../../../components/Loading/Loading";
import { sendRequest } from "../../../services/sendRequest";

export const FormCareers = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [result, setResult] = useState([]);

  const portalId = "8759286";
  const formId = "1edd65ce-9372-438a-80f9-842272dce9a7";

  const submitHubspotForm = async (
    firstname,
    email,
    phone,
    perfil_linkedin,
    carreira_de_atuacao
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
        name: "perfil_linkedin",
        value: perfil_linkedin,
      },
      {
        name: "carreira_de_atuacao",
        value: carreira_de_atuacao,
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
    const {
      firstname,
      email,
      phone,
      perfil_linkedin,
      carreira_de_atuacao,
    } = data;

    const hubspot_response = submitHubspotForm(
      firstname,
      email,
      phone,
      perfil_linkedin,
      carreira_de_atuacao
    );

    return hubspot_response;
  });

  const optionsCareers = [
    { optionLabel: "selecione uma opção", optionValue: "" },
    { optionValue: "Adm/Financeiro", optionLabel: "Adm/Financeiro" },
    { optionValue: "Ciência de Dados", optionLabel: "Ciência de Dados" },
    { optionValue: "Comercial", optionLabel: "Comercial" },
    { optionValue: "Customer Success", optionLabel: "Customer Success" },
    { optionValue: "Engenharia de Dados", optionLabel: "Engenharia de Dados" },
    { optionValue: "Marketing", optionLabel: "Marketing" },
    { optionValue: "Produto", optionLabel: "Produto" },
    { optionValue: "Pessoas & Cultura", optionLabel: "Pessoas & Cultura" },
  ];

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
    verifyLabel[3],
    verifyLabel[5],
    verifyLabel[4]
  );

  const labelsData = concatLabels[0] === undefined ? [] : concatLabels;

  const getInputs = () => {
    return labelsData?.map(({ name, label, placeholder, type }) => {
      if (type !== "enumeration" && name !== "phone" && name !== "curriculo") {
        return (
          <CapsuleField>
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

      if (name === "curriculo") {
        return (
          <CapsuleField>
            <label htmlFor={name}>{label} *</label>
            <Input
              {...register(name, { required: true })}
              name={name}
              type="file"
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
          <CapsuleField>
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
          <CapsuleField>
            <label htmlFor={name}>{label}*</label>
            <Select
              {...register(name, {
                required: true,
              })}
            >
              {optionsCareers.map(({ optionLabel, optionValue }) => (
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
      }
      return [];
    });
  };

  return (
    <CardForm onSubmit={onSubmit}>
      <Title label="Faça parte do nosso time!" />
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
      <Button variant="primary" label="enviar" />
    </CardForm>
  );
};
