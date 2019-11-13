import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import Styled from "styled-components";

const TheCard = Styled.div`
    border: solid 8px gray;
    border-radius: 100px;
    padding: 100px;
    max-width: 800px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`;

const IntroName = Styled.div`
    color: grey;
`;

const Card = ({user}) => {
    return (
        <TheCard>
            <IntroName>Hi, my name is</IntroName>
            <h2>
                {user.name.first} {user.name.last}
            </h2>
            <Moment format= "MM/DD/YYYY">
                {user.dob.date}
            </Moment>
            <p>{user.email}</p>
            <p>{user.location.street.number} {user.location.street.name}</p>
            <p>{user.phone}</p>
        </TheCard>
    );
}

export default Card;