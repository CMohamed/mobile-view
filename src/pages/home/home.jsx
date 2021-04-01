import React from "react";
import {LinkTo} from "../../components/LinkTo/LinkTo.style";
import {Typography} from "@material-ui/core";

export const Home = () => {
    return (
        <div style={{
            textAlign: 'center',
        }}>
            <Typography variant="h3">Home</Typography>
            <br/>
            <LinkTo color="black" to="/banks" >Banks</LinkTo>
            <LinkTo color="black" to="/pay" >Pay</LinkTo>
        </div>
    )
}