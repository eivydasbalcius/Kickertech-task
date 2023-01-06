import menu from "./../images/menu.png";
import close from "./../images/close.png";
import React, { useState } from "react";

export default function MobileHeader() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <header class="hide-header">
        <div class="topnav">
          <div class="hide-menu-element">
            {!isShown ? (
              <img
                class="menu-image"
                src={menu}
                alt={"menu"}
                onClick={() => {
                  setIsShown(true);
                }}
              />
            ) : (
              <img
                class="close-image"
                src={close}
                alt={"close"}
                onClick={() => {
                  setIsShown(false);
                }}
              />
            )}
          </div>
        </div>
      </header>
      <div>
        {isShown ? (
          <div class="flex-header">
            <span>Lorem ipsum</span>
            <span class="line-header" />
            <span>Lorem ipsum</span>
            <span class="line-header" />
            <span>Lorem ipsum</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
