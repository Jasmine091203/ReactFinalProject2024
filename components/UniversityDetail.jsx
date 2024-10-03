import React from 'react';
import { useLoaderData, json } from "react-router-dom";
import UniversityItem from "./UniversityItem";


const UniversityDetail = () => {
    const result = useLoaderData();
    return <UniversityItem result={result} />;

};

export default UniversityDetail;

export const UniversityDetailLoader = async ({ params }) => {
    const id = params.objectid;
    // console.log(id)
    
    // console.log(params)
    const response = await fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-colleges-and-universities&q=&facet=objectid&refine.objectid=${id}`);
    // console.log(response)
    if (!response.ok) {
        throw json({ message: "取得資料發生錯誤..." },
            { status: response.status }
        );
    } else {
        const data = await response.json();
        // console.log(data)
        const record = data.records[0].fields;
        return record;
        // return data;
    }
}
