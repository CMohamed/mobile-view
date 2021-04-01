import React from "react";
import {LinkTo} from "../../components/LinkTo/LinkTo.style";

export const Home = () => {
    return (
        <div>
            Home
            <br/>
            <LinkTo to="/banks" >Banks</LinkTo>
            <LinkTo to="/pay" >Pay</LinkTo>
        </div>
    )
}