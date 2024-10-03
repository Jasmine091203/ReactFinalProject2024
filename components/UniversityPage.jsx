import React from "react";
import { useLoaderData } from "react-router-dom";
import UniversityList from "./UniversityList";
const UniversityPage = () => {
    const results = useLoaderData();
    return <UniversityList results={results} />;
}
export default UniversityPage;
export const UniversityLoader = async () => {
    const response = await fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/us-colleges-and-universities/records?limit=100");
    // console.log(response)
    if (!response.ok) {
        return {
            isErrored: true,
            message: "取得資料發生錯誤...",
        }
    }
    else {
        const data = await response.json();
        console.log(data.results)
        return data.results;
        
    }
};
