import React from "react";
import { Card, ContentCard, MetaPost } from "./styledCardPost";

export const CardPost = ({ post, noExcerpt, categorySelect }) => {
  const { slug, title, coverImage, category, excerpt, linkReports } = post
    ? post
    : [];

  const findIndex = category?.findIndex((props) => {
    return props === categorySelect;
  });

  const categoryRender = category[findIndex]
    ? category[findIndex]
    : category[0];

  const reports = category[0] === "reports e estudos";

  return (
    <>
      {noExcerpt ? (
        <Card key={slug} noExcerpt>
          <a href={`/conteudos/${slug}`}>
            <img src={coverImage?.url} alt="alt" />
          </a>

          <ContentCard>
            <a href={`/conteudos/${slug}`} title={title}>
              {title}
            </a>
          </ContentCard>
        </Card>
      ) : (
        <Card key={slug}>
          {reports ? (
            <a href={linkReports}>
              <img src={coverImage?.url} alt="alt" />
            </a>
          ) : (
            <a href={`/conteudos/${slug}`}>
              <img src={coverImage?.url} alt="alt" />
            </a>
          )}

          <MetaPost>
            <span>{categoryRender}</span>
          </MetaPost>
          <ContentCard>
            {reports ? (
              <a href={linkReports} title={title}>
                {title}
              </a>
            ) : (
              <a href={`/conteudos/${slug}`} title={title}>
                {title}
              </a>
            )}

            {excerpt && <p title={excerpt}>{excerpt}</p>}
          </ContentCard>
        </Card>
      )}
    </>
  );
};
