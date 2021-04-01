import React from "react";
import styled from "styled-components";
import {SelectTitle} from "../../components/Select/SelectComp.style";
import {colors} from "../../styleSheet";

const PaymentCodeContainer = styled.div`
  text-align: center;
  padding: 10px;
`;

const CodeContainer = styled.div`
  color: ${colors.green};
`;

const InstructionContainer = styled.div`
  color: darkgrey;
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