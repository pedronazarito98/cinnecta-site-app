import React from "react";
import { Title } from "../../../components/Title/Title";
import {
  ContainerCulture,
  PillarsCard,
  WrapperContent,
  WrapperImage,
  WrapperList,
  VisibleDescription,
  ContainerDescription,
} from "./styledCulture";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useAbout } from "../../../hooks/methods/about";

export const CultureCinnecta = ({ data }) => {
  const { data: aboutData, isSuccess: aboutSuccess } = useAbout();

  const { cultureCinnecta } = aboutSuccess && aboutData.aboutPage;
  const active = aboutSuccess ? cultureCinnecta : [];
  const [activeGroups, setActiveGroups] = useState(active);

  const onSelectGroup = (group) => {
    const activeIndex = activeGroups.findIndex(({ titleCulture }) => {
      return titleCulture === group.titleCulture;
    });

    if (activeIndex > -1) {
      setActiveGroups(
        activeGroups.filter((item, index) => index !== activeIndex)
      );
    } else if (activeGroups.length < 5) {
      setActiveGroups([...activeGroups, group]);
    }
  };

  const isVisibleDescription = (group) => {
    return activeGroups?.find(({ titleCulture }) => {
      return titleCulture === group.titleCulture;
    });
  };

  return (
    <ContainerCulture id="culture">
      <Title label="Nosso jeito de ser" />
      <WrapperContent>
        <WrapperImage>
          <img src={data?.url} alt="Nosso jeito de ser" />
        </WrapperImage>

        <WrapperList>
          {cultureCinnecta?.map((group) => (
            <PillarsCard
              key={group.titleCulture}
              onClick={() => onSelectGroup(group)}
            >
              <img
                src={group.iconCulture.url}
                alt={group.titleCulture}
                loading="eager"
              />
              <ContainerDescription>
                <span>
                  {group.titleCulture}
                  {isVisibleDescription(group) ? (
                    <AiOutlineMinus />
                  ) : (
                    <AiOutlinePlus />
                  )}
                </span>
                <VisibleDescription isTransition={isVisibleDescription(group)}>
                  {isVisibleDescription(group) && (
                    <p>{group.descriptionCulture}</p>
                  )}
                </VisibleDescription>
              </ContainerDescription>
            </PillarsCard>
          ))}
        </WrapperList>
      </WrapperContent>
    </ContainerCulture>
  );
};
