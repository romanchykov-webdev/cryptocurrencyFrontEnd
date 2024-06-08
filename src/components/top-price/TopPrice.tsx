import React from 'react';

import AssetsTableComponent from "../assetsTable/assetsTableComponent";

const TopPrice = (props: any) => {
    const {assets} = props



    return (
        <>
           <AssetsTableComponent assets={assets} />
        </>
    );
};

export default TopPrice;