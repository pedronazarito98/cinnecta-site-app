import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { Loading } from "../../../components/Loading/Loading";
import { sendRequest } from "../../../services/sendRequest";

import {
  CapsuleField,
  FooterForm,
  FormularioWrapper,
  WrapperInput,
} from "./styledFormCinnecta";

export const FormCinnecta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const portalId = "8759286";
  const formId = "cac9002a-9fda-42ee-bb43-195f9c1e3e3e";

  const submitHubspotForm = async (email) => {
    try {
      const response = await sendRequest.sendEmail(portalId, formId, {
        fields: [
          {
            name: "email",
            value: email,
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
        setTimeout(() => {
          window.open(
            "https://api.whatsapp.com/send?phone=5511995745301&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Cinnecta.",
            "_blank"
          );
        }, 1500);
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
    const { email } = data;

    const hubspot_response = submitHubspotForm(email);

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

  const concatLabels = [].concat(
    // verifyLabel[0]
    verifyLabel[1]
    // verifyLabel[3]
  );

  const labelsData = concatLabels[0] === undefined ? [] : concatLabels;

  const getInputs = (labelFields) => {
    return labelFields?.map(({ name, label, placeholder, type }) => {
      if (type !== "enumeration") {
        return (
          <CapsuleField>
            <Input
              {...register(name, { required: true })}
              name={name}
              type="text"
              placeholder={label}
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
        <Loading loading={concatLabels[0] === undefined} />
        <WrapperInput justify="flex-start" maxWidth={820}>
          {getInputs(labelsData)}
          <Button type="submit" label="quero saber mais" />
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
      </FormularioWrapper>
    </Fragment>
  );
};
