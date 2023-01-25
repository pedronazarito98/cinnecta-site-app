import React, { useEffect, useState } from "react";
import { Bar, Line, WrapperContent } from "./styledReading";
import { BsShare, BsWhatsapp, BsLinkedin, BsFacebook } from "react-icons/bs";
import { Dropdown } from "../Dropdown/dropdown";

export const ReadingBar = ({ title, slug }) => {
  const [width, setWidth] = useState(0);
  const [open, setOpen] = useState(false);

  const url =
    "http://cinnecta-site-qa.s3-website-us-east-1.amazonaws.com/blog/";
  const scrollHeight = () => {
    let el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    let percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;

    setWidth(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  });

  const handleOpen = () => {
    setOpen(!open);
  };
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

  return (
    <>
      {width > 0 && (
        <Bar>
          <WrapperContent>
            <span>{title}</span>
            <Dropdown
              open={open}
              direction="left"
              trigger={
                <BsShare
                  onClick={handleOpen}
                  color="var(--blue-50)"
                  size="20"
                />
              }
              menu={socialRedirect()}
            />
          </WrapperContent>
          <Line style={{ width: width + "%" }} />
        </Bar>
      )}
    </>
  );
};
