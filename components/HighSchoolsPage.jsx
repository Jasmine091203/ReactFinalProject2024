import React from "react";
import { useLoaderData } from "react-router-dom";
import HighSchoolsList from "./HighSchoolsList";

const HighSchoolsPage = () => {
    const results = useLoaderData();
    return <HighSchoolsList results={results} />;
}
export default HighSchoolsPage;

export const HighSchoolsLoader = async () => {

    const response = await fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/us-public-schools/records?limit=100");

    if (!response.ok) {
        return {
            isErrored: true,
            message: "取得資料發生錯誤...",
        }
    }
    else {

        const data = await response.json();
        console.log(data.results);
        return data.results;
    }
};