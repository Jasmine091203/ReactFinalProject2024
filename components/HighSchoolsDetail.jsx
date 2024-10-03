import React from 'react';
import { useLoaderData, json } from "react-router-dom";
import HighSchoolsItem from "./HighSchoolsItem";

const HighSchoolsDetail = () => {
    const result = useLoaderData();
    return <HighSchoolsItem result={result} />;
};
export default HighSchoolsDetail;

export const HighSchoolsDetailLoader = async ({ params }) => {
    const id = params.objectid;

    const response = await fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-public-schools&q=&facet=objectid&refine.objectid=${id}`);

    if (!response.ok) {
        throw json({ message: "取得資料發生錯誤..." }, { status: response.status });
    } else {
        const data = await response.json();
        console.log(data)
        const record = data.records[0].fields;
        return record;
    }
};


