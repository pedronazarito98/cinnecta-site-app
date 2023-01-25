import React, { useState } from "react";
import { Seo } from "../../components/Seo";
import { SectionPost } from "../../view/blog/sectionPost";
import Layout from "../../templates/MainTemplate";
import { MainHome } from "../../view/blog/styledPost";
import { useListPost, useTotalPosts } from "../../hooks/methods/blog";
import { Pagination } from "../../components/Pagination/pagination";
import { FormBlog } from "../../view/blog/formsBlog/FormBlog";
import { useEffect } from "react";

export default function Blog({ location }) {
  const [pageUpsell, setPageUpsell] = useState(1);
  const [skipPage, setSkipPage] = useState(0);

  useEffect(() => {
    setSkipPage(pageUpsell * 16 - 16);
  }, [pageUpsell]);

  let initalValue = 17;
  const { data: value } = useTotalPosts();
  const { data } = useListPost("date_DESC", initalValue, skipPage);

  const pageSize = value ? value?.postsConnection?.aggregate?.count : 0;
  const hashPage = location ? location?.hash : null;

  return (
    <Layout>
      <Seo title="Blog" />

      <MainHome>
        <h1>personalizar. rentabilizar. fidelizar.</h1>
        <h2>
          Identifique oportunidades de gerar valor na sua base de clientes
        </h2>
        <SectionPost
          details={data?.posts}
          hashPage={hashPage}
          location={location}
        />
        <FormBlog />
        <Pagination
          className="pagination-bar"
          currentPage={pageUpsell}
          totalCount={pageSize}
          pageSize={16}
          onPageChange={(page) => setPageUpsell(page)}
        />
      </MainHome>
    </Layout>
  );
}
