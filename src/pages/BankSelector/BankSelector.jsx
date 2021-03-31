import React, {useState} from "react";
import {SelectComp} from "../../components/Select/SelectComp";
import {BANKS} from "../../mockedData/data";



export const BankSelector = () => {
    // if you are using react you can select banks from store
    const [banks, setBanks] = useState(BANKS);
    const [selectedBank, setSelectedBank] = useState(null);
    const handleSelectChange = (bankId) => {
        const selectedBank = banks.find(bank => bank.id === bankId);
        setSelectedBank(selectedBank);
    }
    return (
        <SelectComp
            title="Select your preferred bank"
            elements={banks}
            selectedElement={selectedBank}
            handleSelectChange={handleSelectChange}
        />
    )
}