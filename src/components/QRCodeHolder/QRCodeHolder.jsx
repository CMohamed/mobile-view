import React from "react";
import styled from "styled-components";
import {colors} from "../../styleSheet";

const Angle1 = styled.div`
    border-top: 2px solid ${colors.green};
    border-left: 2px solid ${colors.green};
`;

const Angle2 = styled.div`
    border-top: 2px solid ${colors.green};
    border-right: 2px solid ${colors.green};
`;

const Angle3 = styled.div`
    border-bottom: 2px solid ${colors.green};
    border-left: 2px solid ${colors.green};
`;

const Angle4 = styled.div`
    border-bottom: 2px solid ${colors.green};
    border-right: 2px solid ${colors.green};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 30px auto 30px;
  grid-template-rows: 30px auto 30px;
`;

export const QRCodeHolder = ({qrCode}) => {
    return (
        <GridContainer>
            <Angle1/>
            <div></div>
            <Angle2/>
            <div></div>
            <img height="200" src={qrCode}/>
            <div></div>
            <Angle3/>
            <div></div>
            <Angle4/>
        </GridContainer>
    )
}