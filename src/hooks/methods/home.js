import { useQuery } from "@tanstack/react-query";
import { gqlAPI } from "../../graphQl/clientGraphQl";

import { getHomepage } from "../queries/home";
import { configQuery } from "./blog";

export const useHome = () => {
  const fetchData = async () => await gqlAPI(getHomepage);

  return useQuery(["Homepage"], fetchData, configQuery);
};
