import { useQuery } from "@tanstack/react-query";
import { gqlAPI } from "../../graphQl/clientGraphQl";
import { getSolutions } from "../queries/solutions";
import { configQuery } from "./blog";

export const useSolutions = () => {
  const fetchData = async () => await gqlAPI(getSolutions);

  return useQuery(["solutions"], fetchData, configQuery);
};
