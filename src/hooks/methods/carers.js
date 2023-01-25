import { getCarers } from "../queries/carers";
import { useQuery } from "@tanstack/react-query";
import { gqlAPI } from "../../graphQl/clientGraphQl";
import { configQuery } from "./blog";

export const useCarers = () => {
  const fetchData = async () => await gqlAPI(getCarers);

  return useQuery(["CarersPage"], fetchData, configQuery);
};
