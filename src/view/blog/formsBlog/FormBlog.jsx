import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { Loading } from "../../../components/Loading/Loading";
import { sendRequest } from "../../../services/sendRequest";
import { BsEnvelopeOpen } from "react-icons/bs";

import {
  CapsuleField,
  FormularioWrapper,
  HeaderForm,
  WrapperInput,
} from "./styledFormBlog";

export const FormBlog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const portalId = "8759286";
  const formId = "74a4d120-036f-4c1b-bf4c-ab4d0ce88562";

  const submitHubspotForm = async (email, firstname) => {
    try {
      const response = await sendRequest.sendEmail(portalId, formId, {
        fields: [
          {
            name: "email",
            value: email,
          },
          {
            name: "firstname",
            value: firstname,
          },
        ],
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
      if (error?.response?.data?.errors[0]?.errorType === "BLOCKED_EMAIL") {
        toast.error("Utilize o seu e-mail corporativo.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

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
    const { email, firstname } = data;

    const hubspot_response = submitHubspotForm(email, firstname);

    return hubspot_response;
  });

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

  const identifierForm = result?.findIndex(({ guid }) => {
    return guid === formId;
  });

  const labelFields = result[identifierForm]?.formFieldGroups?.map(
    ({ fields }) => fields
  );

  const verifyLabel = labelFields === undefined ? [] : labelFields;

  const concatLabels = [].concat(verifyLabel[0], verifyLabel[1]);

  const labelsData = concatLabels[0] === undefined ? [] : concatLabels;

  const getInputs = (labelFields) => {
    return labelFields?.map(({ name, label, type }) => {
      if (type !== "enumeration") {
        return (
          <CapsuleField key={label}>
            <label htmlFor={name}>{label}*</label>
            <Input
              {...register(name, { required: true })}
              name={name}
              type="text"
              style={{ border: "1px solid #0055ff" }}
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
  return (
    <Fragment>
      <FormularioWrapper onSubmit={onSubmit}>
        <HeaderForm>
          <BsEnvelopeOpen color="var(--white)" />
          <p>Quer receber mais insights?</p>
          <span>identifique oportunidades na sua base de clientes</span>
        </HeaderForm>

        <WrapperInput justify="flex-start" maxWidth={375}>
          <Loading loading={concatLabels[0] === undefined} />
          {getInputs(labelsData)}
          <Button type="submit" label="enviar" />
        </WrapperInput>
      </FormularioWrapper>
    </Fragment>
  );
};
