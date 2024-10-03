import React from 'react';
import ReactECharts from 'echarts-for-react';

const ResultsList = ({ results }) => {

    const countryCount = results.reduce((acc, result) => {
        acc[result.naics_desc] = (acc[result.naics_desc] || 0) + 1;
        return acc;
    }, {});

    const data = Object.keys(countryCount).map(naics_desc => ({
        name: naics_desc,
        value: countryCount[naics_desc]
    }));

    const options = {
        title: {
            text: '美國大學性質分類占比',
            left: 'center',
            textStyle: {
                fontSize: 24,
                color: '#333'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#333'
            }
        },
        series: [
            {
                name: '大學性質',
                type: 'pie',
                radius: '50%',
                data,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ],
        color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de']
    };

    return (
        <div>
            <ReactECharts option={options} />
        </div>
    );
};

export default ResultsList;
