import React from "react";
import { MenuList, WrapperDropdown } from "./styledDropdown";

export const Dropdown = ({ open, trigger, menu, direction }) => {
  return (
    <WrapperDropdown open={open}>
      {trigger}
      {open ? (
        <MenuList direction={direction}>
          {menu.map((menuItem, index) => (
            <li key={index}>{menuItem}</li>
          ))}
        </MenuList>
      ) : null}
    </WrapperDropdown>
  );
};
