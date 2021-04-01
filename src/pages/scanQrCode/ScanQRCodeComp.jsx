import React from "react";
import styled from "styled-components";
import {colors} from "../../styleSheet";
import {SelectTitle} from "../../components/Select/SelectComp.style";
import {ButtonComp} from "../../components/Button/ButtonComp";
import {QRCodeHolder} from "../../components/QRCodeHolder/QRCodeHolder";
import qrCode from '../../assets/qrCode.PNG';

const ScanQRCodeContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 30px 10px;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.white};
  height: 100%;
  bottom: 50px;
`;


export const ScanQRCodeComp = () => {
    const scan = () => {
        console.log('scan done');
    }
    return (
        <ScanQRCodeContainer>
            <SelectTitle>Scan the QR Code</SelectTitle>
            <QRCodeHolder qrCode={qrCode}/>
            <ButtonComp
                label="Scan"
                color={colors.white}
                backgroundColor={colors.green}
                onClick={scan}
            />
        </ScanQRCodeContainer>
    )
}