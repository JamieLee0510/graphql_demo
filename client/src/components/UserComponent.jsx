import React from "react";
import { useQuery, gql } from "@apollo/client";

import AddressComponent from "./AdressComponet";

const GET_USER = gql`
    query GetUser($id: String!) {
        user(id: $id) {
            id
            name
            email
            address {
                city
            }
        }
    }
`;

function UserComponent() {
    const { loading, error, data } = useQuery(GET_USER, {
        variables: { id: "1" },
    });
    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log("---graphql error:", error);
        return <p>Error :(</p>;
    }

    return (
        <div>
            <h3> {data.user.name}</h3>
            <ul>
                <li> {data.user.name}</li>
                <li> {data.user.email}</li>
                <AddressComponent />
            </ul>
        </div>
    );
}

export default UserComponent;
