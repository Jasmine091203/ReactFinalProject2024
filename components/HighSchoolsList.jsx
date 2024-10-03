import React, { useState } from 'react';
import { Link } from "react-router-dom";
import classes from "./MainNavLink.module.css";

const HighSchoolsList = ({ results }) => {
    const allowedStates = ['CO', 'CA', 'FL', 'NY', 'AZ'];
    const [filter, setFilter] = useState('');

    const handleFilter = (e) => setFilter(e.target.value);

    const groupedResults = results.reduce((acc, result) => {
        const { state } = result;
        if (allowedStates.includes(state)) {
            if (!acc[state]) {
                acc[state] = [];
            }
            acc[state].push(result);
        }
        return acc;
    }, {});

    const filteredGroupedResults = Object.keys(groupedResults).reduce((acc, state) => {
        const filteredSchools = groupedResults[state].filter((school) =>
            school.name.toLowerCase().includes(filter.toLowerCase())
        );
        if (filteredSchools.length) {
            acc[state] = filteredSchools;
        }
        return acc;
    }, {});

    return (
        <div>
            <h1 className={classes.largeTitle}>小學和中學資訊</h1>
            
            <input
                type="text"
                value={filter}
                onChange={handleFilter}
                placeholder="輸入關鍵字過濾學校名稱..."
                className={classes.filterInput}
            />
            
            <div className={classes.item}>
                <h3>以下是根據美國各州進行分類的國中及國小的學校，您可以根據您的需求進行選擇<br />點擊照片即可查看更多詳細的資訊唷！！</h3>
            </div>
            
            {
                Object.keys(filteredGroupedResults).map((state) => (
                    <div key={state}>
                        <h2>{state}</h2>
                        <div className={classes.grid}>
                            {filteredGroupedResults[state].map((result) => (
                                <div key={result.objectid} className={classes.item}>
                                    <h3>{result.name}</h3>
                                    <Link to={`/highSchool/` + result.objectid} className={classes.link}>
                                        <div className={classes.imageWrapper}>
                                            <img src={`https://picsum.photos/300/200?random=${result.objectid}`} alt={result.name} />
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default HighSchoolsList;
