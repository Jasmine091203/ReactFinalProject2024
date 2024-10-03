import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

const ResultsListTwo = ({ results2 }) => {
    const [options, setOptions] = useState(null);
    const [selectedStates, setSelectedStates] = useState(['CO', 'CA', 'FL', 'NY']);
    const [config] = useState({
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 15
    });

    useEffect(() => {
        if (results2) {
            const groupedData = results2.reduce((acc, record) => {
                const state = record.state;
                if (selectedStates.includes(state)) {
                    if (!acc[state]) {
                        acc[state] = 0;
                    }
                    acc[state]++;
                }
                return acc;
            }, {});

            const states = Object.keys(groupedData);
            const values = Object.values(groupedData);

            const labelOption = {
                show: true,
                position: config.position,
                distance: config.distance,
                align: config.align,
                verticalAlign: config.verticalAlign,
                rotate: config.rotate,
                formatter: '{c}  {name|{a}}',
                fontSize: 16,
                rich: { name: {} }
            };

            const options = {
                title: {
                    text: '美國的大學各州學校數目',
                    left: 'center',
                    textStyle: {
                        fontSize: 24,
                        color: '#333'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { type: 'shadow' },
                    formatter: '{a} <br/>{b}: {c} 學校'
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: { show: false },
                        data: states,
                        axisLabel: {
                            rotate: 45,
                            interval: 0,
                            textStyle: {
                                fontSize: 14,
                                color: '#333'
                            }
                        }
                    }
                ],
                yAxis: [
                    { 
                        type: 'value',
                        axisLabel: {
                            textStyle: {
                                fontSize: 14,
                                color: '#333'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '學校數目',
                        type: 'bar',
                        barGap: 0,
                        label: labelOption,
                        emphasis: { focus: 'series' },
                        data: values,
                        universalTransition: {
                            enabled: true,
                            divideShape: 'clone'
                        },
                        animationDurationUpdate: 800,
                        animationEasingUpdate: 'quarticOut',
                        itemStyle: {
                            color: '#5d9cec'
                        },
                        barWidth: '50%'
                    }
                ]
            };

            setOptions(options);
        }
    }, [results2, selectedStates, config]);

    const handleStateClick = (state) => {
        setSelectedStates((prevStates) => {
            if (prevStates.includes(state)) {
                return prevStates.filter((s) => s !== state);
            } else {
                return [...prevStates, state];
            }
        });
    };

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                {['CO', 'CA', 'FL', 'NY'].map((state) => (
                    <button 
                        key={state} 
                        onClick={() => handleStateClick(state)} 
                        style={{ 
                            margin: '0 5px', 
                            padding: '10px 15px', 
                            backgroundColor: selectedStates.includes(state) ? '#007ACC' : '#ddd', 
                            color: selectedStates.includes(state) ? '#fff' : '#333', 
                            border: 'none', 
                            borderRadius: '5px', 
                            cursor: 'pointer' 
                        }}
                    >
                        {state}
                    </button>
                ))}
            </div>
            {options ? <ReactECharts option={options} style={{ height: '400px', width: '100%' }} /> : <p>Loading...</p>}
        </div>
    );
};

export default ResultsListTwo;
