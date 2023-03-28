import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { useTheme2 } from '@grafana/ui';
// import { timeData } from './Data';

//echarts
import ReactECharts from 'echarts-for-react';

//styles
import '../components/styles/simplepanel.css';

//Groups.tsx
import { FetchData } from './Groups';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  //variables
  const theme = useTheme2();
  let groupNames = options.changeName === undefined ? '' : options.changeName.split(',');
  let value = options.groups === undefined ? '' : options.groups;

  const groups = [
    'group1',
    'group2',
    'gropu3',
    'group4',
    'group5',
    'group6',
    'group7',
    'group8',
    'group9',
    'group10',
    'group11',
    'group12',
    'group13',
    'group14',
    'group15',
    'group16',
    'group17',
  ];
  const xAxisData = data.series[0] === undefined ? '' : data.series[0].fields[0].values.toArray().length - 6;

  //sensor data fetch from Gropus.ts
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

  const seriesData = [
    [
      sensorOne.map((item, key) => ({
        name: `S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
        color: theme.name !== 'Dark' ? 'white' : '#181B1F',
      })),
    ],
    [
      sensorTwo.map((item, key) => ({
        name: `S${key + 1}`,
        type: 'line',
        smooth: true,
        symbolSize: 1,
        data: item,
      })),
    ],
    [
      sensorThree.map((item, key) => ({
        name: `S${key + 1}`,
        type: 'line',
        smooth: true,
        symbolSize: 1,
        data: item,
      })),
    ],
    [
      sensorFour.map((item, key) => ({
        name: `S${key + 1}`,
        type: 'line',
        smooth: true,
        symbolSize: 1,
        data: item,
      })),
    ],
    [
      sensorFive.map((item, key) => ({
        name: `S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorSix.map((item, key) => ({
        name: `S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorSeven.map((item, key) => ({
        name: `S${key + 1}`,
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
        name: `S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorTen.map((item, key) => ({
        name: `S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorEleven.map((item, key) => ({
        name: `S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorTwelve.map((item, key) => ({
        name: `S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorThirteen.map((item, key) => ({
        name: `S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorFourteen.map((item, key) => ({
        name: `S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorFifteen.map((item, key) => ({
        name: `S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorSixtenn.map((item, key) => ({
        name: `S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
    [
      sensorSeventeen.map((item, key) => ({
        name: `S${key + 1}`,
        type: 'line',
        symbolSize: 1,
        smooth: true,
        data: item,
      })),
    ],
  ];

  const chartsOption: any[] = [];
  for (let i = 0; i < seriesData.length; i++) {
    chartsOption[i] = {
      grid: {
        show: false,
      },
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
        top: 0,
        right: 300,
        pieces: [
          {
            gt: 0,
            lte: 50,
            color: '#0047AB',
          },
          {
            gt: 50,
            lte: 100,
            color: '#7DF9FF',
          },
          {
            gt: 100,
            lte: 150,
            color: '#50C878',
          },
          {
            gt: 150,
            lte: 200,
            color: 'orange',
          },
          {
            gt: 200,
            lte: 250,
            color: 'red',
          },
        ],
        outOfRange: {
          color: 'brown',
        },
      },

      dataZoom: [
        {
          startValue: xAxisData,
        },
      ],
      xAxis: {
        type: 'category',
        axisLabel: {
          interval: 4,
          align: 'center',
          fontSize: 9,
        },
      },
      yAxis: {
        name: groupNames === '' ? groups[i] : groupNames[i] === '' ? groups[i] : groupNames[i],
        min: 0,
        max: 300,
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
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      series: seriesData[i][0],
    };
  }

  const lineGraphOption = {
    grid: {
      show: false,
    },
    xAxis: {
      show: false,
      axisLabel: {
        interval: 4,
      },
    },
    yAxis: {
      min: 0,
      max: 300,
      splitLine: {
        show: false,
      },
    },
    series: seriesData[0][0],
  };
  const widt = value === '3' ? 370 : value === '4' ? 470 : value === '5' ? 600 : 1300;
  const scroll = widt === 1300 ? 'scroll' : 'hidden';
  return (
    <>
      <span className="temperatureLabel">Temperature</span>
      <div className="yAxis">
        <ReactECharts option={lineGraphOption} className="initial" />
      </div>
      <div className="chartBox" style={{ width: `${widt}px`, overflowX: `${scroll}` }}>
        {chartsOption.map((item, key) => (
          <div style={{ width: '120px' }} key={key}>
            <ReactECharts option={item} />
          </div>
        ))}
      </div>
      <span className="timeLabel">Time</span>
    </>
  );
};
