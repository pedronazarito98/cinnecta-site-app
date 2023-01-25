import React from "react";
import { CardPost } from "../../../components/CardPost/cardPost";
import { useListPost } from "../../../hooks/methods/blog";
import { MostAccessed } from "../mostAccessed/mostAccessed";
import { CardMostAccessed } from "../sectionPost/styledSection";

export const ListPosts = ({ filteredPersons, initialData, category }) => {
  const { data } = useListPost("date_DESC", 200, 0);

  const filtered = (filteredPersons, initialData) => {
    if (initialData) {
      const limitPosts = initialData?.slice(0, 17);
      return limitPosts?.map((person, index) =>
        index === 2 ? (
          <>
            <CardMostAccessed key={person}>
              <p>Mais acessados</p>
              <MostAccessed data={data?.posts} />
            </CardMostAccessed>

            <CardPost
              key={person.slug}
              post={person}
              categorySelect={category}
            />
          </>
        ) : (
          <CardPost key={person.slug} post={person} categorySelect={category} />
        )
      );
    } else if (filteredPersons) {
      return filteredPersons?.map((person) => {
        return (
          <CardPost key={person.slug} post={person} categorySelect={category} />
        );
      });
    }
  };

  return <>{filtered(filteredPersons, initialData)}</>;
};
