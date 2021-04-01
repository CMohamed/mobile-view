import React from "react";
import styled from "styled-components";
import {SelectTitle} from "../../components/Select/SelectComp.style";
import {colors} from "../../styleSheet";

const PaymentCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  background-color: ${colors.white};
  height: 100%;
`;

const CodeContainer = styled.div`
  color: ${colors.green};
  background-color: ${colors.lightGreen};
  width: 90%;
  text-align: center;
  font-weight: bold;
`;

const InstructionContainer = styled.div`
  color: darkgrey;
  font-size: small;
`;

export const PaymentCodeComp = () => {
    return (
        <PaymentCodeContainer>
            <SelectTitle>Make your payment</SelectTitle>
            <CodeContainer>
                code here
            </CodeContainer>
            <InstructionContainer>
                Tap the code above to complete your payment
            </InstructionContainer>
        </PaymentCodeContainer>
    )
}