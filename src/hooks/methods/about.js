import { getAbout } from "../queries/about";
import { useQuery } from "@tanstack/react-query";
import { gqlAPI } from "../../graphQl/clientGraphQl";
import { configQuery } from "./blog";

export const useAbout = () => {
  const fetchData = async () => await gqlAPI(getAbout);

  return useQuery(["AboutPage"], fetchData, configQuery);
};
