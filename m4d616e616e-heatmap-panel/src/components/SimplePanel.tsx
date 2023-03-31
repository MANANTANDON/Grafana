import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
// import { useTheme2 } from '@grafana/ui';

import ReactEcharts from 'echarts-for-react';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  // const theme = useTheme2();

  const xData = data.series[0].fields[0].values.toArray();
  const yData = [];

  for (let i = 1; i < data.series[0].fields.length; i++) {
    yData.push(`s${i}`);
  }

  const hData = [];
  for (let i = 0; i < data.series[0].fields[0].values.length; i++) {
    for (let j = 0; j < data.series[0].fields.length - 1; j++) {
      if (j < 26) {
        hData.push([xData[i], yData[j], data.series[0].fields[j + 1].values.get(i)]);
      }
    }
  }

  const heatmapoptions = {
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
    xAxis: { type: 'category', data: xData },
    yAxis: { type: 'category', data: yData },
    visualMap: {
      min: 0,
      max: 300,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
    },
    series: {
      type: 'heatmap',
      data: hData,
    },
  };
  return (
    <>
      <div>
        <ReactEcharts option={heatmapoptions} />
      </div>
    </>
  );
};
