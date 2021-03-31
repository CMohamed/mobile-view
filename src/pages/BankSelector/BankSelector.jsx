import React, {useState} from "react";
import {SelectComp} from "../../components/Select/SelectComp";
import {BANKS} from "../../mockedData/data";
import {ButtonComp} from "../../components/Button/ButtonComp";
import {colors} from "../../styleSheet";
import {BankSelectorContainer} from "./BankSelector.style";



export const BankSelector = () => {
    // if you are using react you can select banks from store
    const [banks, setBanks] = useState(BANKS);
    const [selectedBank, setSelectedBank] = useState(null);
    const handleSelectChange = (bankId) => {
        const selectedBank = banks.find(bank => bank.id === bankId);
        setSelectedBank(selectedBank);
    }
    const completePayment = (event) => {
        console.log(event);
    }
    return (
        <BankSelectorContainer>
            <SelectComp
                title="Select your preferred bank"
                elements={banks}
                selectedElement={selectedBank}
                handleSelectChange={handleSelectChange}
            />
            <ButtonComp
                label="Complete my payment"
                color={colors.white}
                backgroundColor={colors.green}
                onClick={completePayment}
            />
        </BankSelectorContainer>
    )
}