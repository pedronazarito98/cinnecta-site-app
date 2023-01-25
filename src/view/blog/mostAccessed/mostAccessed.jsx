import React from "react";
import { ListMostAccessed } from "./styledMostAccessed";

export const MostAccessed = ({ data }) => {
  const ascendingOrder = data?.sort((a, b) => a.mostAccessed - b.mostAccessed);
  const filterData = ascendingOrder?.filter((item) =>
    item?.mostAccessed ? item : null
  );

  return (
    <>
      {filterData?.map(({ title, slug, category, linkReports }, index) => (
        <>
          {category[0] === "reports e estudos" ? (
            <>
              <ListMostAccessed key={title}>
                <p>{index + 1}</p>
                <a href={linkReports} rel="noreferrer" target="_blank">
                  {title}
                </a>
              </ListMostAccessed>
              <hr />
            </>
          ) : (
            <>
              <ListMostAccessed key={title}>
                <p>{index + 1}</p>
                <a href={`/conteudos/${slug}`}>{title}</a>
              </ListMostAccessed>
              <hr />
            </>
          )}
        </>
      ))}
    </>
  );
};
