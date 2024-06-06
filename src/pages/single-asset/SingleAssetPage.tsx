import React from 'react';
import {useNavigate} from "react-router-dom";

const SingleAssetPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h2 onClick={()=>navigate(-1)}> Go back</h2>
            <h1>Single asset Page</h1>
        </div>
    );
};

export default SingleAssetPage;