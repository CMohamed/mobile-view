import React from "react";
import styled from "styled-components";
import {SelectTitle} from "../../components/Select/SelectComp.style";
import {colors} from "../../styleSheet";
import FilterNoneIcon from '@material-ui/icons/FilterNone';

const PaymentCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
  align-items: center;
  background-color: ${colors.white};
  height: 100%;
`;

const CodeContainer = styled.div`
  color: ${colors.green};
  background-color: ${colors.lightGreen};
  width: 90%;
  height: 60px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: large;
  border-radius: 6px;
  margin: 80px 0 20px;
`;

const IconContainer = styled.div`
  position: absolute;
  right: 10px;
`;

const InstructionContainer = styled.div`
  color: darkgrey;
  font-size: small;
  margin: 20px 0;
`;

export const PaymentCodeComp = ({paymentCode}) => {

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(paymentCode)
    };

    return (
        <PaymentCodeContainer>
            <SelectTitle>Make your payment</SelectTitle>
            <CodeContainer>
                {paymentCode}
                <IconContainer onClick={copyToClipBoard}>
                    <FilterNoneIcon color={colors.green}/>
                </IconContainer>
            </CodeContainer>
            <InstructionContainer>
                Tap the code above to complete your payment
            </InstructionContainer>
        </PaymentCodeContainer>
    )
}