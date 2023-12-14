import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CITY = gql`
    query GetUserCity($id: String!) {
        user(id: $id) {
            address {
                city
            }
        }
    }
`;

function AddressComponent() {
    const { loading, error, data } = useQuery(GET_CITY, {
        variables: { id: "1" },
    });

    if (error) {
        console.log("---graphql error:", error);
        return <li>None</li>;
    }

    return <li> {data.user.address.city}</li>;
}

export default AddressComponent;
