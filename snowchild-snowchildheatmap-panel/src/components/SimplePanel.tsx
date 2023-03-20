import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { useTheme2 } from '@grafana/ui';
import './simplepanel.css';
import ReactEchart from 'echarts-for-react';
import { getNoiseHelper } from './Getnoicehelper';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme2();

  let noise = getNoiseHelper();
  let xData = [];
  let yData = [];
  noise.seed(Math.random());

  function generateData() {
    let data = [];
    for (let i = 0; i <= 16; i++) {
      for (let j = 0; j <= 24; j++) {
        data.push([i, j, noise.perlin2(i / 40, j / 20) + 0.5]);
      }
      xData.push(i);
    }
    for (let j = 0; j < 100; j++) {
      yData.push(j);
    }
    return data;
  }

  let heatData = generateData();
  const sensorAxis = [790, 690, 590, 490, 390, 290, 190, 90, 30, -90, -190, -290, -390, -490, -590, -690, -790];
  const ySensorAxis = [
    'g1s1',
    'g1s2',
    'g1s3',
    'g1s4',
    'g1s5',
    'g1s6',
    'g1s7',
    'g1s8',
    'g1s9',
    'g1s10',
    'g1s11',
    'g1s12',
    'g1s13',
    'g1s14',
    'g1s15',
    'g1s16',
    'g1s17',
    'g1s18',
    'g1s19',
    'g1s20',
    'g1s21',
    'g1s22',
    'g1s23',
    'g1s24',
    'g1s25',
  ];

  const heatmapOption = {
    tooltip: {
      position: 'top',
    },
    grid: {
      height: '70%',
    },
    xAxis: {
      type: 'category',
      data: sensorAxis,
      show: false,
    },
    yAxis: {
      type: 'category',
      show: false,
      data: ySensorAxis,
      axisLine: {
        lineStyle: {
          color: theme.name === 'Dark' ? '#181B1F' : 'white',
        },
      },
    },
    visualMap: {
      min: 0,
      max: 1,
      show: false,
      inRange: {
        color: [
          'white',
          '#313695',
          '#4575b4',
          '#74add1',
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026',
        ],
      },
    },
    series: [
      {
        name: 'heat',
        type: 'heatmap',
        label: {
          show: false,
        },
        data: heatData,
      },
    ],
  };

  return (
    <div className="heatmap">
      {sensorAxis.map((item, key) => (
        <div className="oneheatmap" key={key}>
          <span className="axisTag">{item}mm</span>
          <ReactEchart option={heatmapOption} className="closeMap" />
        </div>
      ))}
    </div>
  );
};
