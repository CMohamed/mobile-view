import React, {useState} from 'react';
import {SearchBarContainer, SelectContainer, SelectTitle} from "./SelectComp.style";
import {TextField, Typography} from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import defaultBank from '../../assets/banks/default_bank.jpg';


export const SelectComp = ({elements, selectedElement, handleSelectChange, title}) => {
    const [searchCriteria, setSearchCriteria] = useState('');
    const handleFilterChange = (searchCriteria) => {
        setSearchCriteria(searchCriteria);
    }

    const filterByText = (element, text) => !text |
        element.name.toLowerCase()
            .includes(text.trim().toLowerCase())

    const handleCheck = (event) => {
        handleSelectChange(event.target.value);
    }

    return (
        <SelectContainer>
            <SelectTitle variant="h6">{title}</SelectTitle>
            <SearchBarContainer>
                <TextField
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                    placeholder="Search bank..."
                    onChange={event => handleFilterChange(event.target.value)}
                />
            </SearchBarContainer>
            {
                elements
                    .filter(element => filterByText(element, searchCriteria))
                    .map(element => (
                        <div>
                            <FormControlLabel
                                checked={selectedElement && selectedElement.id === element.id}
                                value={element.id}
                                control={<Checkbox color="primary"/>}
                                label={
                                    <div style={{display: "flex", alignItems: 'center'}}>
                                        <img height="40"
                                             width="40"
                                             src={element.logo ? element.logo : defaultBank}
                                             style={{marginRight: 10}}/>
                                        <Typography>
                                            {element.name}
                                        </Typography>
                                    </div>
                                }
                                labelPlacement="end"
                                onChange={handleCheck}
                            />
                        </div>
                    ))
            }
        </SelectContainer>
    )
}