import { DataFrame } from '@grafana/data';

export const FetchData = (data: DataFrame, axisData: string | string[]) => {
  const yData = [];
  const hData = [];

  if (data != undefined) {
    const xData = data.fields[0].values.toArray();
    for (let i = 1; i < data.fields.length; i++) {
      yData.push(`s${i}`);
    }

    for (let i = 0; i < data.fields[0].values.length; i++) {
      for (let j = 0; j < data.fields.length - 1; j++) {
        if (j < 26) {
          hData.push([xData[i], axisData[j], data.fields[j + 1].values.get(i)]);
        }
      }
    }
  }

  return hData;
};
