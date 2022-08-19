import React, { memo, useState } from "react";
import styled from "styled-components";
import * as images from "../assets/images"

interface ShadowedProps {
  readonly collapse: boolean;
  readonly isMobileMode:boolean
};

interface PropsType {
  readonly countdown: number;
};

const HeaderStyles = styled.div<ShadowedProps>`
  position: absolute;
  top: 0;
  transition: all 0.5s;
  height: ${props => props.collapse ? '100px' : '300px'};
  background: dodgerblue;
  width: 100%;
`;

const HamburgerButton = styled.img`
  width: 30px;
  padding: 15px;
  cursor: pointer;
  background: dodgerblue;
  border-radius: 100%;
  position: fixed;
  right: 15px;
  z-index: 10;
  top: 10px;
`;

const Counter = styled.h1`
 text-align: center;
`;

function Header({ countdown }:PropsType) {
  const isMobileMode = window.innerWidth < 1000
  const [collapse, setCollapse] = useState(true);
  const toggleCollapse = ()=>{
    setCollapse(!collapse)
  }
  return (
    <HeaderStyles collapse={collapse} isMobileMode={isMobileMode}>
      {isMobileMode &&
      <HamburgerButton
        src={collapse ? images.hamburgerIcon : images.closeIcon }
        onClick={toggleCollapse}
      />
      }
      <Counter>
        {countdown}
      </Counter>

    </HeaderStyles>
  );
}

export default memo(Header);
