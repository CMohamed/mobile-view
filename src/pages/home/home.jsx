import React from "react";
import {LinkTo} from "../../components/LinkTo/LinkTo.style";
import {Typography} from "@material-ui/core";

export const Home = () => {
    return (
        <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
        }}>
            <Typography variant="h3">Home</Typography>

        </div>
    )
}