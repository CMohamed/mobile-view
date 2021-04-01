import React from "react";
import styled from "styled-components";
import {pages} from "../App";
import {LinkTo} from "../components/LinkTo/LinkTo.style";

const NavCompContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.div`
    
`;

export const NavComp = () => {
    return (
        <NavCompContainer>
            {
                pages.map(page => (
                    <div>
                        <LinkTo color="black" to={page.path}>
                            {page.label}
                        </LinkTo>
                    </div>
                ))
            }
        </NavCompContainer>
    )
}