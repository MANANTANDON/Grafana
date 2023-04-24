import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { useTheme2 } from '@grafana/ui';

//css
import '../components/styles/simplepanel.css';

import ReactEcharts from 'echarts-for-react';
import { FetchData } from './FetchData';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme2();
  const axisData = options.sensorName === undefined ? '' : options.sensorName.split(',');

  let groupNames = options.changeName === undefined ? '' : options.changeName.split(',');
  let value = options.groups === undefined ? '' : options.groups;
  const hData: any[] = [];

  if (data.series.length !== 0) {
    for (let i = 0; i < data.series.length; i++) {
      hData[i] = FetchData(data.series[i], axisData);
    }
  }

  const chartsOption: any[] = [];
  for (let i = 0; i < Number(value); i++) {
    {
      chartsOption[i] = {
        tooltip: {
          trigger: 'item',
          position: ['2%', '0'],
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        grid: {
          containLabel: false,
          height: '80%',
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: 'category',
          data: axisData,
          name: groupNames === '' ? `Group ${i + 1}` : groupNames[i] === '' ? `Group ${i + 1}` : groupNames[i],
          nameTextStyle: {
            align: 'left',
            verticalAlign: 'middle',
            fontWeight: 600,
            color: theme.name === 'Dark' ? 'white' : '#181B1F',
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            padding: [0, 30, 0, 0],
            fontSize: 10,
            fontWeight: 600,
          },
          axisLine: {
            show: false,
          },
        },
        visualMap: {
          min: 0,
          max: 300,
          show: false,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          inRange: {
            color: ['#0047AB', '#7DF9FF', '#00cd00', 'orange', 'red'],
          },
        },
        series: {
          type: 'heatmap',
          data: hData[i],
        },
      };
    }
  }

  const initialoptions = {
    grid: {
      height: '80%',
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'category',
      data: axisData,
      // axisTick: {
      //   show: true,
      //   alignWithLabel: true,
      // },
      axisLine: {
        show: true,
        lineStyle: {
          color: theme.name === 'Dark' ? 'white' : '#181B1F',
        },
      },
      axisLabel: {
        fontWeight: 600,
      },
    },
    visualMap: {
      min: 0,
      max: 300,
      show: false,
    },
    series: {
      type: 'heatmap',
    },
  };

  return (
    <>
      {axisData.length >= 25 ? (
        <>
          <span className="sensorAxis">mm</span>
          <ReactEcharts option={initialoptions} className="initialMap" />
          <div className="outerBox">
            {chartsOption.map((item, key) => (
              <ReactEcharts option={item} className="heatmap" key={key} />
            ))}
          </div>
        </>
      ) : (
        <div className="informations">Enter the y-axis data in panel options</div>
      )}
    </>
  );
};
