import React, { useState } from "react";
import { useEffect } from "react";
import { ListPosts } from "../ListPosts/listPosts";
import { InputSearch } from "../ListPosts/styledListPosts";
import {
  ButtonMenu,
  ContainerCard,
  ContainerPost,
  Submenu,
} from "./styledSection";
import { AiOutlineClose } from "react-icons/ai";
import { useListPost } from "../../../hooks/methods/blog";

export const SectionPost = ({ details, hashPage }) => {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const [selectData, setSelectData] = useState([]);
  const [active, setActive] = useState("");

  const { data } = useListPost("date_DESC", 200, 0);

  const filteredPersons = data?.posts?.filter(({ title }) => {
    return title?.toLowerCase()?.includes(searchField?.toLowerCase());
  });

  useEffect(() => {
    setSelectData(details);
  }, [details]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  const remove_hash_from_url = () => {
    const uri = window.location.toString();
    if (uri.indexOf("#") > 0) {
      const clean_uri = uri.substring(0, uri.indexOf("#"));
      window.history.replaceState({}, document.title, clean_uri);
    }
  };

  const redirect = (label) => {
    if (data?.posts) {
      const result = data?.posts?.filter((item) => {
        if (item.category[0] === label) {
          setActive(item.category[0]);
          remove_hash_from_url();
          return item;
        }
        if (label === "reports_e_estudos") {
          setActive("reports_e_estudos");
          remove_hash_from_url();
          return item;
        }
        if (label === "limpar") {
          setActive(null);
          remove_hash_from_url();
          return item;
        }

        return result;
      });
      setSelectData(result);
    }
  };

  const replaceHash = {
    estrategias_de_crescimento: {
      label: "estratégias de crescimento",
      value: "estrategias_de_crescimento",
    },
    reports_e_estudos: {
      label: "reports e estudos",
      value: "reports_e_estudos",
    },
    retencao: {
      label: "retenção",
      value: "retencao",
    },
    blog: {
      label: "blog",
      value: "blog",
    },
  };

  useEffect(() => {
    if (hashPage) {
      const newHash = hashPage.replace(/#/g, "");

      const resultForHash = data?.posts?.filter((item) => {
        if (newHash === replaceHash[newHash]?.value) {
          setActive(replaceHash[newHash]?.label);
          return item?.category[0] === replaceHash[newHash]?.label;
        } else {
          return item;
        }
      });
      setSelectData(resultForHash);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hashPage, data?.posts]);

  // fidelização
  // estratégias de crescimento
  // retenção
  // LTV Potencial
  // rentabilização

  const ob = [
    {
      value: "reports e estudos",
      label: "reports_e_estudos",
    },
    {
      value: "blog",
      label: "blog",
    },
    {
      value: "fidelização",
      label: "fidelização",
    },
    {
      value: "estratégias de crescimento",
      label: "estratégias de crescimento",
    },
    {
      value: "rentabilização",
      label: "rentabilização",
    },
    {
      value: "retenção",
      label: "retenção",
    },
  ];

  const itemMenu = details?.map(({ category }) => ({
    value: category[0],
    label: category[0],
  }));
  console.log(itemMenu);
  const uniqueArray = ob?.filter((item, index) => {
    return (
      ob?.findIndex(
        (obj) =>
          obj?.label?.trim() === item?.label?.trim() &&
          obj?.value?.trim() === item?.value?.trim()
      ) === index
    );
  });

  // uniqueArray?.unshift(
  //   {
  //     value: "reports e estudos",
  //     label: "reports_e_estudos",
  //   },
  //   {
  //     value: "blog",
  //     label: "blog",
  //   }
  // );

  uniqueArray?.push({
    value: "limpar",
    label: "limpar",
  });

  const searchList = () => {
    if (!searchShow) {
      return <ListPosts initialData={selectData} category={active} />;
    } else if (searchShow) {
      return <ListPosts filteredPersons={filteredPersons} category={active} />;
    }
  };

  return (
    <ContainerPost>
      <InputSearch
        type="search"
        placeholder="pesquise um conteúdo."
        onChange={handleChange}
      />
      <Submenu>
        {uniqueArray?.map(({ label, value }) => {
          return (
            <>
              {label === "limpar" ? (
                <AiOutlineClose
                  size="1rem"
                  color="#0055ff"
                  onClick={() => redirect(value)}
                />
              ) : (
                <ButtonMenu
                  key={value}
                  select={value === active}
                  onClick={() => redirect(value)}
                >
                  {label === "reports_e_estudos" ? value : label}
                </ButtonMenu>
              )}
            </>
          );
        })}
      </Submenu>
      <ContainerCard>{searchList()}</ContainerCard>
    </ContainerPost>
  );
};
