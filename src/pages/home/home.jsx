import React from "react";
import {LinkTo} from "../../components/LinkTo/LinkTo.style";
import {Typography} from "@material-ui/core";
import {ButtonComp} from "../../components/Button/ButtonComp";
import {colors} from "../../styleSheet";
import logo from '../../assets/logo.png';
import styled from "styled-components";


const LogoHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Home = () => {
    const openModal = () => {
        // todo: openModal
    }
    return (
        <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '100%',
        }}>
            <Typography variant="h3">
                Home
                <LogoHolder>
                    <img height="100" width="200" src={logo}/>
                </LogoHolder>
            </Typography>
            <ButtonComp
                label="Open Pay modal"
                color={colors.white}
                backgroundColor={colors.green}
                onClick={openModal}
            />
        </div>
    )
}