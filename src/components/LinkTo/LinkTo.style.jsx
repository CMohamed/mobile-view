import { Link } from "react-router-dom";
import styled from "styled-components";


export const LinkTo = styled(Link)`
    color: ${props => props.color ? props.color : 'black'};
    text-decoration: none;
`;