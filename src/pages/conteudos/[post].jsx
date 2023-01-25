import moment from "moment";
import React, { useState } from "react";
import { Seo } from "../../components/Seo";
import { useBlog, useListPost } from "../../hooks/methods/blog";
import Layout from "../../templates/MainTemplate";

import "moment/locale/pt-br";
import { RiCalendarCheckLine, RiAccountCircleLine } from "react-icons/ri";
import { BsShare, BsWhatsapp, BsLinkedin, BsFacebook } from "react-icons/bs";

import {
  ContainerPost,
  ContentPost,
  FooterMostContent,
  LineSeparator,
  ListMoreContent,
  MetaPost,
} from "../../view/blog/styledPost";
import { CardPost } from "../../components/CardPost/cardPost";
import { Dropdown } from "../../components/Dropdown/dropdown";
import { ReadingBar } from "../../components/Readingbar/readingBar";

export default function Post({ params }) {
  const [open, setOpen] = useState(false);

  const slug = params?.post;
  const { data } = useBlog(slug);
  const { data: listPosts, isSuccess } = useListPost("date_DESC", 3, 0);

  const url =
    "http://cinnecta-site-qa.s3-website-us-east-1.amazonaws.com/blog/";
  const socialShareMap = {
    whatsapp: {
      shareUrl: `https://api.whatsapp.com/send?text=http%3A%2F%2Fcinnecta-site-qa.s3-website-us-east-1.amazonaws.com%2Fblog%2F${slug}`,
      display: <BsWhatsapp color="var(--blue-50)" size="20" />,
    },
    linkedin: {
      shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url=",
      display: <BsLinkedin color="var(--blue-50)" size="20" />,
    },
    facebook: {
      shareUrl: "https://www.facebook.com/sharer/sharer.php?u=",
      display: <BsFacebook color="var(--blue-50)" size="20" />,
    },
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const socialRedirect = () => {
    return Object.entries(socialShareMap).map(([key, value]) => {
      if (key === "whatsapp") {
        return (
          <a
            target="_blank"
            rel="noreferrer"
            key={key}
            href={`${value.shareUrl}`}
          >
            {value.display}
          </a>
        );
      } else {
        return (
          <a
            target="_blank"
            rel="noreferrer"
            key={key}
            href={`${value.shareUrl}${url}${slug}`}
          >
            {value.display}
          </a>
        );
      }
    });
  };
  const nameAuthor = data?.post?.author?.name
    ? data?.post?.author?.name
    : "Cinnecta";

  const titleSeo = data?.post?.seo?.title ? data?.post?.seo?.title : "Cinnecta";
  return (
    <Layout>
      <Seo
        title={titleSeo}
        description={data?.post?.seo?.description}
        clickBait={data?.post?.seo?.title}
      />

      {data?.post ? (
        <>
          <ReadingBar title={data?.post?.title} slug={slug} />
          <ContainerPost>
            <h1>{data?.post?.title}</h1>
            <MetaPost>
              <span>
                <RiCalendarCheckLine color="var(--text)" />
                {moment(data?.post?.date)
                  .locale("pt-br")
                  .format("LL")}
              </span>
              <span>
                <RiAccountCircleLine color="var(--text)" />
                {nameAuthor}
              </span>
              <Dropdown
                open={open}
                trigger={
                  <BsShare
                    onClick={handleOpen}
                    color="var(--blue-50)"
                    size="20"
                  />
                }
                menu={socialRedirect()}
              />
            </MetaPost>
            <LineSeparator />
            <ContentPost
              dangerouslySetInnerHTML={{ __html: data?.post?.content?.html }}
            />
          </ContainerPost>
          <FooterMostContent>
            <p>Confira mais conteúdos</p>
            <ListMoreContent>
              {isSuccess &&
                listPosts?.posts?.map(
                  ({ slug, title, coverImage, category, form }) => {
                    return (
                      <CardPost
                        key={slug}
                        noExcerpt
                        post={{ slug, title, coverImage, category, form }}
                      />
                    );
                  }
                )}
            </ListMoreContent>
          </FooterMostContent>
        </>
      ) : null}
    </Layout>
  );
}
