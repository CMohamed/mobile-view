import styled from 'styled-components';
import {colors} from "../../styleSheet";
import {Typography} from "@material-ui/core";

export const SelectContainer = styled.div`
  background-color: ${colors.white};
  padding: 10px;
`;

export const SelectTitle = styled(Typography)`
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const SearchBarContainer = styled.div`
  margin: 20px 0;
`;