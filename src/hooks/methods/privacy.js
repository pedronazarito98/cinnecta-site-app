import { getPrivacy } from "../queries/privacy";
import { useQuery } from "@tanstack/react-query";
import { gqlAPI } from "../../graphQl/clientGraphQl";

export const usePrivacy = () => {
  const fetchData = async () => await gqlAPI(getPrivacy);

  return useQuery(["Privacy"], fetchData);
};
