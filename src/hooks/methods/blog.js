import { useQuery } from "@tanstack/react-query";
import { gqlAPI } from "../../graphQl/clientGraphQl";
import { getListPosts, getPost, getTotalPosts } from "../queries/blog";

export const configQuery = {
  staleTime: 2000 * 60 * 60,
};

export const useBlog = (slug) => {
  const variables = {
    slug,
  };
  const fetchData = async () => await gqlAPI(getPost, variables);

  return useQuery(["BlogPage", slug], fetchData, configQuery);
};

export const useListPost = (orderBy, first, skip) => {
  const variables = {
    orderBy,
    first,
    skip,
  };
  const fetchData = async () => await gqlAPI(getListPosts, variables);

  return useQuery(["ListPosts", orderBy, first, skip], fetchData, configQuery);
};

export const useTotalPosts = () => {
  const fetchData = async () => await gqlAPI(getTotalPosts);

  return useQuery(["TotalPosts"], fetchData, configQuery);
};
