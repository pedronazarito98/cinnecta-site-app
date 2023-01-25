import React from "react";
import { StyledPrivacyText } from "./styledPrivacyText";
import { usePrivacy } from "../../../hooks/methods/privacy";

export function PrivacyText() {
  const { data, isSuccess } = usePrivacy();

  return (
    <StyledPrivacyText
      dangerouslySetInnerHTML={{
        __html: isSuccess && data?.privacyPage?.privacyText.html,
      }}
    />
  );
}
