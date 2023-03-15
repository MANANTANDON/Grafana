import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
// import { css } from '@emotion/css';
import { useTheme2 } from '@grafana/ui';
import ReactECharts from 'echarts-for-react';
import { timeData } from './Data';

import { FetchData } from './GroupOne';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const sensorOne = FetchData(data.series[0]);
  const sensorTwo = FetchData(data.series[1]);
  const sensorThree = FetchData(data.series[2]);
  const sensorFour = FetchData(data.series[3]);
  const sensorFive = FetchData(data.series[4]);
  const sensorSix = FetchData(data.series[5]);
  const sensorSeven = FetchData(data.series[6]);
  const sensorEight = FetchData(data.series[7]);
  const sensorNine = FetchData(data.series[8]);
  const sensorTen = FetchData(data.series[9]);
  const sensorEleven = FetchData(data.series[10]);
  const sensorTwelve = FetchData(data.series[11]);
  const sensorThirteen = FetchData(data.series[12]);
  const sensorFourteen = FetchData(data.series[13]);
  const sensorFifteen = FetchData(data.series[14]);
  const sensorSixtenn = FetchData(data.series[15]);
  const sensorSeventeen = FetchData(data.series[16]);

  const theme = useTheme2();

  const seriesData = [
    [
      sensorOne.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        smooth: true,
        symbolSize: 1,
        data: item,
      })),
    ],
    [
      sensorThree.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        smooth: true,
        symbolSize: 1,
        data: item,
      })),
    ],
    [
      sensorFour.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        smooth: true,
        symbolSize: 1,
        data: item,
      })),
    ],
    [
      sensorFive.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorSix.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorSeven.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorEight.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorNine.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorTen.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorEleven.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorTwelve.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorThirteen.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorFourteen.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorFifteen.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorSixtenn.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorSeventeen.map((item, key) => ({
        name: `G1S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
  ];

  const yaxis = [0, 100, 200, 300, 400, 500];

  const chartsOption: any[] = [];
  for (let i = 0; i < seriesData.length; i++) {
    chartsOption[i] = {
      tooltip: {
        trigger: 'item',
        position: ['10%', '0'],
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },

      visualMap: {
        top: 1000,
        right: 1000,
        pieces: [
          {
            gt: 0,
            lte: 100,
            color: '#0047AB',
          },
          {
            gt: 100,
            lte: 200,
            color: '#7DF9FF',
          },
          {
            gt: 200,
            lte: 300,
            color: '#50C878',
          },
          {
            gt: 300,
            lte: 400,
            color: 'orange',
          },
          {
            gt: 400,
            lte: 500,
            color: 'red',
          },
        ],
        outOfRange: {
          color: 'brown',
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
        name: `Group ${i + 1}`,
        nameTextStyle: {
          align: 'left',
          verticalAlign: 'middle',
          color: theme.name === 'Dark' ? 'white' : '#181B1F',
        },
        axisLine: {
          lineStyle: {
            color: theme.name === 'Dark' ? '#181B1F' : 'white',
          },
        },
      },
      series: seriesData[i][0],
    };
  }

  return (
    <>
      <span style={{ position: 'absolute', transform: 'rotate(-90deg)', top: '130px', left: '-10px' }}>
        Temperature
      </span>
      <div
        style={{
          position: 'absolute',
          // border: '2px solid green',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '11px',
          top: '51px',
          left: '55px',
        }}
      >
        {yaxis.reverse().map((item, key) => (
          <div key={key}>{item}</div>
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          top: '0px',
          left: '100px',
          flexWrap: 'wrap',
          overflowX: 'scroll',
          width: '1300px',
          height: '315px',
        }}
      >
        {chartsOption.map((item, key) => (
          <div style={{ width: '110px' }} key={key}>
            <ReactECharts option={item} />
          </div>
        ))}
      </div>
      <span style={{ position: 'absolute', top: '325px', left: '50%' }}>Time</span>
    </>
  );
};
