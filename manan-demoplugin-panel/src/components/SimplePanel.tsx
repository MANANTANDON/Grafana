import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
// import { css } from '@emotion/css';
// import { useStyles2 } from '@grafana/ui';
import ReactECharts from 'echarts-for-react';
import { timeData } from './Data';

import { FetchData } from './GroupOne';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const sensorOne = FetchData(data.series[0]);
  const sensorTwo = FetchData(data.series[1]);

  const seriesData = [
    [
      sensorOne.map((item, key) => ({
        name: 'G1S1',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: 'G1S2',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: 'G1S3',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: 'G1S4',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: 'G1S4',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: 'G1S4',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: 'G1S4',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: 'G1S4',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: 'G1S4',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: 'G1S4',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: 'G1S4',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: 'G1S4',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: 'G1S4',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: 'G1S4',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: 'G1S4',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: 'G1S4',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: 'G1S4',
        type: 'line',
        symbol: 'emptycircle',
        smooth: true,
        itemStyle: {
          color: 'red',
        },
        data: item,
      })),
    ],
  ];

  const chartsOption: any[] = [];
  for (let i = 0; i < seriesData.length; i++) {
    chartsOption[i] = {
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },

      dataZoom: [
        {
          start: 0,
          end: 115,
          xAxisIndex: [0, 10],
        },
        {
          start: 0,
          end: 15,
          type: 'inside',
        },
      ],
      xAxis: {
        type: 'category',
        data: timeData,
        axisLabel: {
          interval: 4,
        },
      },
      yAxis: {
        type: 'value',
        name: `Group ${i + 1}`,
        nameTextStyle: {
          align: 'left',
          verticalAlign: 'middle',
          color: 'black',
        },
        axisLine: {
          lineStyle: {
            color: 'white',
          },
        },
      },
      series: seriesData[i][0],
    };
  }

  const testOption = {
    title: {
      // text: 'Snowchild',
      textStyle: {
        color: '#ffb347',
        fontStyle: 'italic',
      },
    },
    yAxis: {
      nameGap: 25,
      data: [0, 100, 200, 300, 400, 500],
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },

    xAxis: [{}],
    series: {
      name: 'G1S6',
      type: 'line',
      symbol: 'emptycircle',
      smooth: true,
      itemStyle: {
        color: 'white',
      },
      data: sensorOne[0],
    },
  };

  return (
    <>
      <span style={{ position: 'absolute', transform: 'rotate(-90deg)', top: '130px', left: '20px' }}>Temperature</span>
      <div style={{ width: `${width}`, marginLeft: '-20px' }}>
        <ReactECharts option={testOption} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          top: '0px',
          marginLeft: '120px',
          flexWrap: 'wrap',
          overflowX: 'scroll',
          width: '1160px',
          height: '315px',
        }}
      >
        {chartsOption.map((item, key) => (
          <div style={{ width: '100px' }} key={key}>
            <ReactECharts option={item} />
          </div>
        ))}
      </div>

      <span style={{ position: 'absolute', top: '312px', left: '50%' }}>Time</span>
    </>
  );
};

//commented code

//  <div
//     className={cx(
//       styles.wrapper,
//       css`
//         width: 500px;
//         height: 500px;
//       `
//     )}
//   >
//     <ReactECharts option={chartOptionsTwo} />
//   </div>

//  <button className={css(styles.button)} onClick={buttonHandler}>
//     AddData
//   </button>

// const buttonHandler = () => {
//   options.fieldName === 'G1S1'
//     ? setG1S1((prev) => [...prev, [options.time, options.value]])
//     : options.fieldName === 'G1S2'
//     ? setG1S2((prev) => [...prev, [options.time, options.value]])
//     : options.fieldName === 'G1S3'
//     ? setG1S3((prev) => [...prev, [options.time, options.value]])
//     : options.fieldName === 'G1S4'
//     ? setG1S4((prev) => [...prev, [options.time, options.value]])
//     : options.fieldName === 'G1S5'
//     ? setG1S5((prev) => [...prev, [options.time, options.value]])
//     : console.log('no field selected');
// };

// const chartOptionsOne = {
//   tooltip: {
//     trigger: 'item',
//     axisPointer: {
//       type: 'cross',
//       label: {
//         backgroundColor: '#6a7985',
//       },
//     },
//   },

//   dataZoom: [
//     {
//       start: 0,
//       end: 115,
//       xAxisIndex: [0, 10],
//     },
//     {
//       start: 0,
//       end: 15,
//       type: 'inside',
//     },
//   ],
//   xAxis: {
//     type: 'category',
//     data: timeData,
//     axisLabel: {
//       interval: 4,
//     },
//   },
//   yAxis: {
//     type: 'value',
//     name: 'Group 1',
//     nameTextStyle: {
//       align: 'left',
//       verticalAlign: 'middle',
//       color: 'black',
//     },
//     axisLine: {
//       lineStyle: {
//         color: 'white',
//       },
//     },
//   },
//   series: [
//     {
//       name: 'G1S1',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: options.color,
//       },
//       data: G1S1,
//     },
//     {
//       name: 'G1S2',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EC1CF',
//       },
//       data: G1S2,
//     },
//     {
//       name: 'G1S3',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EE09E',
//       },
//       data: G1S3,
//     },
//     {
//       name: 'G1S4',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FEB144',
//       },
//       data: G1S4,
//     },
//     {
//       name: 'G1S5',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FF6663',
//       },
//       data: G1S5,
//     },
//   ],
// };

// const chartOptionsTwo = {
//   tooltip: {
//     trigger: 'item',
//     axisPointer: {
//       type: 'cross',
//       label: {
//         backgroundColor: '#6a7985',
//       },
//     },
//   },

//   dataZoom: [
//     {
//       start: 0,
//       end: 115,
//       xAxisIndex: [0, 10],
//     },
//     {
//       start: 0,
//       end: 15,
//       type: 'inside',
//     },
//   ],
//   xAxis: {
//     type: 'category',
//     data: timeData,
//     axisLabel: {
//       interval: 4,
//     },
//   },

//   yAxis: {
//     type: 'value',
//     name: 'Group 2',
//     nameTextStyle: {
//       align: 'left',
//       verticalAlign: 'middle',
//       color: 'black',
//     },
//     axisLine: {
//       lineStyle: {
//         color: 'white',
//       },
//     },
//   },

//   series: [
//     {
//       name: 'G1S6',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: options.color,
//       },
//       data: G1S6,
//     },
//     {
//       name: 'G1S7',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EC1CF',
//       },
//       data: G1S7,
//     },
//     {
//       name: 'G1S8',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EE09E',
//       },
//       data: G1S8,
//     },
//     {
//       name: 'G1S9',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FEB144',
//       },
//       data: G1S9,
//     },
//     {
//       name: 'G1S10',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FF6663',
//       },
//       data: G1S10,
//     },
//   ],
// };

// const chartOptionsThree = {
//   tooltip: {
//     trigger: 'item',
//     axisPointer: {
//       type: 'cross',
//       label: {
//         backgroundColor: '#6a7985',
//       },
//     },
//   },

//   dataZoom: [
//     {
//       start: 0,
//       end: 115,
//       xAxisIndex: [0, 10],
//     },
//     {
//       start: 0,
//       end: 15,
//       type: 'inside',
//     },
//   ],
//   xAxis: {
//     type: 'category',
//     data: timeData,
//     axisLabel: {
//       interval: 4,
//     },
//   },

//   yAxis: {
//     type: 'value',
//     name: 'Group 3',
//     nameTextStyle: {
//       align: 'left',
//       verticalAlign: 'middle',
//       color: 'black',
//     },
//     axisLine: {
//       lineStyle: {
//         color: 'white',
//       },
//     },
//   },

//   series: [
//     {
//       name: 'G1S6',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: options.color,
//       },
//       data: G1S11,
//     },
//     {
//       name: 'G1S7',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EC1CF',
//       },
//       data: G1S12,
//     },
//     {
//       name: 'G1S8',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EE09E',
//       },
//       data: G1S13,
//     },
//     {
//       name: 'G1S9',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FEB144',
//       },
//       data: G1S14,
//     },
//     {
//       name: 'G1S10',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FF6663',
//       },
//       data: G1S15,
//     },
//   ],
// };

// const chartOptionsFour = {
//   tooltip: {
//     trigger: 'item',
//     axisPointer: {
//       type: 'cross',
//       label: {
//         backgroundColor: '#6a7985',
//       },
//     },
//   },

//   dataZoom: [
//     {
//       start: 0,
//       end: 115,
//       xAxisIndex: [0, 10],
//     },
//     {
//       start: 0,
//       end: 15,
//       type: 'inside',
//     },
//   ],
//   xAxis: {
//     type: 'category',
//     data: timeData,
//     axisLabel: {
//       interval: 4,
//     },
//   },

//   yAxis: {
//     type: 'value',
//     name: 'Group 4',
//     nameTextStyle: {
//       align: 'left',
//       verticalAlign: 'middle',
//       color: 'black',
//     },
//     axisLine: {
//       lineStyle: {
//         color: 'white',
//       },
//     },
//   },

//   series: [
//     {
//       name: 'G1S6',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: options.color,
//       },
//       data: G1S16,
//     },
//     {
//       name: 'G1S7',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EC1CF',
//       },
//       data: G1S17,
//     },
//     {
//       name: 'G1S8',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EE09E',
//       },
//       data: G1S18,
//     },
//     {
//       name: 'G1S9',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FEB144',
//       },
//       data: G1S19,
//     },
//     {
//       name: 'G1S10',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FF6663',
//       },
//       data: G1S20,
//     },
//   ],
// };

// const chartOptionsFive = {
//   tooltip: {
//     trigger: 'item',
//     axisPointer: {
//       type: 'cross',
//       label: {
//         backgroundColor: '#6a7985',
//       },
//     },
//   },

//   dataZoom: [
//     {
//       start: 0,
//       end: 115,
//       xAxisIndex: [0, 10],
//     },
//     {
//       start: 0,
//       end: 15,
//       type: 'inside',
//     },
//   ],
//   xAxis: {
//     type: 'category',
//     data: timeData,
//     axisLabel: {
//       interval: 4,
//     },
//   },

//   yAxis: {
//     type: 'value',
//     name: 'Group 5',
//     nameTextStyle: {
//       align: 'left',
//       verticalAlign: 'middle',
//       color: 'black',
//     },
//     axisLine: {
//       lineStyle: {
//         color: 'white',
//       },
//     },
//   },

//   series: [
//     {
//       name: 'G1S6',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: options.color,
//       },
//       data: G1S21,
//     },
//     {
//       name: 'G1S7',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EC1CF',
//       },
//       data: G1S22,
//     },
//     {
//       name: 'G1S8',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EE09E',
//       },
//       data: G1S23,
//     },
//     {
//       name: 'G1S9',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FEB144',
//       },
//       data: G1S24,
//     },
//     {
//       name: 'G1S10',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FF6663',
//       },
//       data: G1S25,
//     },
//   ],
// };
// const chartOptionsSix = {
//   tooltip: {
//     trigger: 'item',
//     axisPointer: {
//       type: 'cross',
//       label: {
//         backgroundColor: '#6a7985',
//       },
//     },
//   },

//   dataZoom: [
//     {
//       start: 0,
//       end: 115,
//       xAxisIndex: [0, 10],
//     },
//     {
//       start: 0,
//       end: 15,
//       type: 'inside',
//     },
//   ],
//   xAxis: {
//     type: 'category',
//     data: timeData,
//     axisLabel: {
//       interval: 4,
//     },
//   },

//   yAxis: {
//     type: 'value',
//     name: 'Group 6',
//     nameTextStyle: {
//       align: 'left',
//       verticalAlign: 'middle',
//       color: 'black',
//     },
//     axisLine: {
//       lineStyle: {
//         color: 'white',
//       },
//     },
//   },

//   series: [
//     {
//       name: 'G1S26',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: options.color,
//       },
//       data: G1S26,
//     },
//     {
//       name: 'G1S27',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EC1CF',
//       },
//       data: G1S27,
//     },
//     {
//       name: 'G1S28',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EE09E',
//       },
//       data: G1S28,
//     },
//     {
//       name: 'G1S29',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FEB144',
//       },
//       data: G1S29,
//     },
//     {
//       name: 'G1S30',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FF6663',
//       },
//       data: G1S30,
//     },
//   ],
// };
// const chartOptionsSeven = {
//   tooltip: {
//     trigger: 'item',
//     axisPointer: {
//       type: 'cross',
//       label: {
//         backgroundColor: '#6a7985',
//       },
//     },
//   },

//   dataZoom: [
//     {
//       start: 0,
//       end: 115,
//       xAxisIndex: [0, 10],
//     },
//     {
//       start: 0,
//       end: 15,
//       type: 'inside',
//     },
//   ],
//   xAxis: {
//     type: 'category',
//     data: timeData,
//     axisLabel: {
//       interval: 4,
//     },
//   },

//   yAxis: {
//     type: 'value',
//     name: 'Group 7',
//     nameTextStyle: {
//       align: 'left',
//       verticalAlign: 'middle',
//       color: 'black',
//     },
//     axisLine: {
//       lineStyle: {
//         color: 'white',
//       },
//     },
//   },

//   series: [
//     {
//       name: 'G1S31',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: options.color,
//       },
//       data: G1S31,
//     },
//     {
//       name: 'G1S32',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EC1CF',
//       },
//       data: G1S32,
//     },
//     {
//       name: 'G1S33',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EE09E',
//       },
//       data: G1S33,
//     },
//     {
//       name: 'G1S34',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FEB144',
//       },
//       data: G1S34,
//     },
//     {
//       name: 'G1S35',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FF6663',
//       },
//       data: G1S35,
//     },
//   ],
// };

// const chartOptionsEight = {
//   tooltip: {
//     trigger: 'item',
//     axisPointer: {
//       type: 'cross',
//       label: {
//         backgroundColor: '#6a7985',
//       },
//     },
//   },

//   dataZoom: [
//     {
//       start: 0,
//       end: 115,
//       xAxisIndex: [0, 10],
//     },
//     {
//       start: 0,
//       end: 15,
//       type: 'inside',
//     },
//   ],
//   xAxis: {
//     type: 'category',
//     data: timeData,
//     axisLabel: {
//       interval: 4,
//     },
//   },

//   yAxis: {
//     type: 'value',
//     name: 'Group 8',
//     nameTextStyle: {
//       align: 'left',
//       verticalAlign: 'middle',
//       color: 'black',
//     },
//     axisLine: {
//       lineStyle: {
//         color: 'white',
//       },
//     },
//   },

//   series: [
//     {
//       name: 'G1S36',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: options.color,
//       },
//       data: G1S36,
//     },
//     {
//       name: 'G1S37',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EC1CF',
//       },
//       data: G1S37,
//     },
//     {
//       name: 'G1S38',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EE09E',
//       },
//       data: G1S38,
//     },
//     {
//       name: 'G1S39',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FEB144',
//       },
//       data: G1S39,
//     },
//     {
//       name: 'G1S40',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FF6663',
//       },
//       data: G1S40,
//     },
//   ],
// };

// const chartOptionsNine = {
//   tooltip: {
//     trigger: 'item',
//     axisPointer: {
//       type: 'cross',
//       label: {
//         backgroundColor: '#6a7985',
//       },
//     },
//   },

//   dataZoom: [
//     {
//       start: 0,
//       end: 115,
//       xAxisIndex: [0, 10],
//     },
//     {
//       start: 0,
//       end: 15,
//       type: 'inside',
//     },
//   ],
//   xAxis: {
//     type: 'category',
//     data: timeData,
//     axisLabel: {
//       interval: 4,
//     },
//   },

//   yAxis: {
//     type: 'value',
//     name: 'Group 9',
//     nameTextStyle: {
//       align: 'left',
//       verticalAlign: 'middle',
//       color: 'black',
//     },
//     axisLine: {
//       lineStyle: {
//         color: 'white',
//       },
//     },
//   },

//   series: [
//     {
//       name: 'G1S41',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: options.color,
//       },
//       data: G1S41,
//     },
//     {
//       name: 'G1S42',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EC1CF',
//       },
//       data: G1S42,
//     },
//     {
//       name: 'G1S43',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EE09E',
//       },
//       data: G1S43,
//     },
//     {
//       name: 'G1S44',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FEB144',
//       },
//       data: G1S44,
//     },
//     {
//       name: 'G1S45',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FF6663',
//       },
//       data: G1S45,
//     },
//   ],
// };

// const chartOptionsTen = {
//   tooltip: {
//     trigger: 'item',
//     axisPointer: {
//       type: 'cross',
//       label: {
//         backgroundColor: '#6a7985',
//       },
//     },
//   },

//   dataZoom: [
//     {
//       start: 0,
//       end: 115,
//       xAxisIndex: [0, 10],
//     },
//     {
//       start: 0,
//       end: 15,
//       type: 'inside',
//     },
//   ],
//   xAxis: {
//     type: 'category',
//     name: 'Time',
//     data: timeData,
//     axisLabel: {
//       interval: 4,
//     },
//   },

//   yAxis: {
//     type: 'value',
//     name: 'Group 10',
//     nameTextStyle: {
//       align: 'left',
//       verticalAlign: 'middle',
//       color: 'black',
//     },
//     axisLine: {
//       lineStyle: {
//         color: 'white',
//       },
//     },
//   },

//   series: [
//     {
//       name: 'G1S46',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: options.color,
//       },
//       data: G1S46,
//     },
//     {
//       name: 'G1S47',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EC1CF',
//       },
//       data: G1S47,
//     },
//     {
//       name: 'G1S48',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#9EE09E',
//       },
//       data: G1S48,
//     },
//     {
//       name: 'G1S49',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FEB144',
//       },
//       data: G1S49,
//     },
//     {
//       name: 'G1S50',
//       type: 'line',
//       symbol: 'emptycircle',
//       smooth: true,
//       itemStyle: {
//         color: '#FF6663',
//       },
//       data: G1S50,
//     },
//   ],
// };

// const chartOptions = [
//   chartOptionsOne,
//   chartOptionsTwo,
//   chartOptionsThree,
//   chartOptionsFour,
//   chartOptionsFive,
//   chartOptionsSix,
//   chartOptionsSeven,
//   chartOptionsEight,
//   chartOptionsNine,
//   chartOptionsTen,
//   chartOptionsTen,
//   chartOptionsTen,
//   chartOptionsTen,
//   chartOptionsTen,
// ];

// const theme = useTheme2();
// const styles = useStyles2(getStyles);
// const [newArray, setNewArray] = React.useState({ g1s1: [], g1s2: [], g1s3: [], g1s4: [], g1s5: [] });

// const dataArray: any[] = [];
// for (let i = 0; i < data.series[0].fields.length; i++) {
//   dataArray.push(data.series[0].fields[i].values.toArray());
// }

// console.log(dataArray);

// console.log(newArray);

// const [arrayOption, setArrayOption] = React.useState({});
// const timeInstance: any[][] = [];

// console.log(data.series[0].fields[0].values.toArray().length);
// const getStyles = () => {
//   return {
//     wrapper: css`
//       font-family: Arial;
//       position: relative;
//     `,
//     svg: css`
//       position: absolute;
//       top: 0;
//       left: 0;
//     `,
//     textBox: css`
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       padding: 10px;
//     `,
//     button: css`
//       background-color: #8bd3e6;
//       color: white;
//       border: none;
//       border-radius: 12px;
//       width: 180px;
//       height: 50px;
//       font-size: 18px;
//     `,
//     buttonStyle: css`
//       margin: auto;
//       width: fit-content;
//       padding-top: 50px;
//     `,
//   };
// };
