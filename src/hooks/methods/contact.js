import { getContact } from "../queries/contact";
import { useQuery } from "@tanstack/react-query";
import { gqlAPI } from "../../graphQl/clientGraphQl";
import { configQuery } from "./blog";

export const useContact = () => {
  const fetchData = async () => await gqlAPI(getContact);

  return useQuery(["ContactPage"], fetchData, configQuery);
};
