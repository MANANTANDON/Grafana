import React from 'react';
import { PanelData, PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
// import { css } from '@emotion/css';
// import { useStyles2 } from '@grafana/ui';
import ReactECharts from 'echarts-for-react';
import { timeData } from './Data';

interface Props extends PanelProps<SimpleOptions> {}

const G1S1: any[][] = [];
const G1S2: any[][] = [];
const G1S3: any[][] = [];
const G1S4: any[][] = [];
const G1S5: any[][] = [];
const G1S6: any[][] = [];
const G1S7: any[][] = [];
const G1S8: any[][] = [];
const G1S9: any[][] = [];
const G1S10: any[][] = [];
const G1S11: any[][] = [];
const G1S12: any[][] = [];
const G1S13: any[][] = [];
const G1S14: any[][] = [];
const G1S15: any[][] = [];
const G1S16: any[][] = [];
const G1S17: any[][] = [];
const G1S18: any[][] = [];
const G1S19: any[][] = [];
const G1S20: any[][] = [];
const G1S21: any[][] = [];
const G1S22: any[][] = [];
const G1S23: any[][] = [];
const G1S24: any[][] = [];
const G1S25: any[][] = [];
const G1S26: any[][] = [];
const G1S27: any[][] = [];
const G1S28: any[][] = [];
const G1S29: any[][] = [];
const G1S30: any[][] = [];
const G1S31: any[][] = [];
const G1S32: any[][] = [];
const G1S33: any[][] = [];
const G1S34: any[][] = [];
const G1S35: any[][] = [];
const G1S36: any[][] = [];
const G1S37: any[][] = [];
const G1S38: any[][] = [];
const G1S39: any[][] = [];
const G1S40: any[][] = [];
const G1S41: any[][] = [];
const G1S42: any[][] = [];
const G1S43: any[][] = [];
const G1S44: any[][] = [];
const G1S45: any[][] = [];
const G1S46: any[][] = [];
const G1S47: any[][] = [];
const G1S48: any[][] = [];
const G1S49: any[][] = [];
const G1S50: any[][] = [];

const setData = (data: PanelData) => {
  for (let i = 0; i < data.series[0].fields[0].values.toArray().length; i++) {
    G1S1.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[1].values.toArray()[i]]);
    G1S2.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[2].values.toArray()[i]]);
    G1S3.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[3].values.toArray()[i]]);
    G1S4.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[4].values.toArray()[i]]);
    G1S5.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[5].values.toArray()[i]]);
    G1S6.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[6].values.toArray()[i]]);
    G1S7.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[7].values.toArray()[i]]);
    G1S8.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[8].values.toArray()[i]]);
    G1S9.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[9].values.toArray()[i]]);
    G1S10.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[10].values.toArray()[i]]);
    // G1S11.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[11].values.toArray()[i]]);
    // G1S12.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[12].values.toArray()[i]]);
    // G1S13.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[13].values.toArray()[i]]);
    // G1S14.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[14].values.toArray()[i]]);
    // G1S15.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[15].values.toArray()[i]]);
    // G1S16.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[16].values.toArray()[i]]);
    // G1S17.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[17].values.toArray()[i]]);
    // G1S18.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[18].values.toArray()[i]]);
    // G1S19.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[19].values.toArray()[i]]);
    // G1S20.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[20].values.toArray()[i]]);
    // G1S21.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[21].values.toArray()[i]]);
    // G1S22.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[22].values.toArray()[i]]);
    // G1S23.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[23].values.toArray()[i]]);
    // G1S24.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[24].values.toArray()[i]]);
    // G1S25.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[25].values.toArray()[i]]);
    // G1S26.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[26].values.toArray()[i]]);
    // G1S27.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[27].values.toArray()[i]]);
    // G1S28.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[28].values.toArray()[i]]);
    // G1S29.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[29].values.toArray()[i]]);
    // G1S30.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[30].values.toArray()[i]]);
    // G1S31.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[31].values.toArray()[i]]);
    // G1S32.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[32].values.toArray()[i]]);
    // G1S33.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[33].values.toArray()[i]]);
    // G1S34.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[34].values.toArray()[i]]);
    // G1S35.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[35].values.toArray()[i]]);
    // G1S36.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[36].values.toArray()[i]]);
    // G1S37.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[37].values.toArray()[i]]);
    // G1S38.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[38].values.toArray()[i]]);
    // G1S39.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[39].values.toArray()[i]]);
    // G1S40.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[40].values.toArray()[i]]);
    // G1S41.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[41].values.toArray()[i]]);
    // G1S42.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[42].values.toArray()[i]]);
    // G1S43.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[43].values.toArray()[i]]);
    // G1S44.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[44].values.toArray()[i]]);
    // G1S45.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[45].values.toArray()[i]]);
    // G1S46.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[46].values.toArray()[i]]);
    // G1S47.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[47].values.toArray()[i]]);
    // G1S48.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[48].values.toArray()[i]]);
    // G1S49.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[49].values.toArray()[i]]);
    // G1S50.push([data.series[0].fields[0].values.toArray()[i], data.series[0].fields[50].values.toArray()[i]]);
  }
};
export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  setData(data);

  const sensors = [
    G1S1,
    G1S2,
    G1S3,
    G1S4,
    G1S5,
    G1S6,
    G1S7,
    G1S8,
    G1S9,
    G1S10,
    // G1S11,
    // G1S12,
    // G1S13,
    // G1S14,
    // G1S15,
    // G1S16,
    // G1S17,
    // G1S18,
    // G1S19,
    // G1S20,
    // G1S21,
    // G1S22,
    // G1S23,
    // G1S24,
    // G1S25,
    // G1S16,
    // G1S27,
    // G1S28,
    // G1S29,
    // G1S30,
    // G1S31,
    // G1S32,
    // G1S33,
    // G1S34,
    // G1S35,
    // G1S36,
    // G1S37,
    // G1S38,
    // G1S39,
    // G1S40,
    // G1S41,
    // G1S42,
    // G1S43,
    // G1S44,
    // G1S45,
    // G1S46,
    // G1S47,
    // G1S48,
    // G1S49,
    // G1S50,
  ];

  const shiftArray = () => {
    for (let i = 0; i < 5; i++) {
      sensors.shift();
    }
  };

  const cOptions: any[] = [];

  for (let i = 0; i < 10; i++) {
    let count = 0;
    cOptions[i] = {
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
        name: 'Group 1',
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
      series: [
        {
          name: 'G1S1',
          type: 'line',
          symbol: 'emptycircle',
          smooth: true,
          itemStyle: {
            color: options.color,
          },
          data: sensors[count],
        },
        {
          name: 'G1S2',
          type: 'line',
          symbol: 'emptycircle',
          smooth: true,
          itemStyle: {
            color: '#9EC1CF',
          },
          data: sensors[count + 1],
        },
        {
          name: 'G1S3',
          type: 'line',
          symbol: 'emptycircle',
          smooth: true,
          itemStyle: {
            color: '#9EE09E',
          },
          data: sensors[count + 2],
        },
        {
          name: 'G1S4',
          type: 'line',
          symbol: 'emptycircle',
          smooth: true,
          itemStyle: {
            color: '#FEB144',
          },
          data: sensors[count + 3],
        },
        {
          name: 'G1S5',
          type: 'line',
          symbol: 'emptycircle',
          smooth: true,
          itemStyle: {
            color: '#FF6663',
          },
          data: sensors[count + 4],
        },
      ],
    };
    shiftArray();
  }

  console.log(cOptions);

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
      data: G1S1,
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
        {cOptions.map((item, key) => (
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
