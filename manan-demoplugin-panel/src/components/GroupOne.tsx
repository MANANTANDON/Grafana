import { DataFrame } from '@grafana/data';

export const FetchData = (fData: DataFrame) => {
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

  const convertEpochToSpecificTimezone = (timeEpoch: string | number | Date, offset: number) => {
    var d = new Date(timeEpoch);
    var utc = d.getTime() + d.getTimezoneOffset() * 60000;
    var nd = new Date(utc + 3600000 * offset);
    return nd.toLocaleString().slice(12, 16);
  };

  try {
    for (let i = 0; i < fData.fields[0].values.toArray().length; i++) {
      G1S1.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[1].values.toArray()[i],
      ]);
      G1S2.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[2].values.toArray()[i],
      ]);
      G1S3.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[3].values.toArray()[i],
      ]);
      G1S4.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[4].values.toArray()[i],
      ]);
      G1S5.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[5].values.toArray()[i],
      ]);
      G1S6.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[6].values.toArray()[i],
      ]);
      G1S7.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[7].values.toArray()[i],
      ]);
      G1S8.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[8].values.toArray()[i],
      ]);
      G1S9.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[9].values.toArray()[i],
      ]);
      G1S10.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[10].values.toArray()[i],
      ]);
      G1S11.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[11].values.toArray()[i],
      ]);
      G1S12.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[12].values.toArray()[i],
      ]);
      G1S13.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[13].values.toArray()[i],
      ]);
      G1S14.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[14].values.toArray()[i],
      ]);
      G1S15.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[15].values.toArray()[i],
      ]);
      G1S16.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[16].values.toArray()[i],
      ]);
      G1S17.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[17].values.toArray()[i],
      ]);
      G1S18.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[18].values.toArray()[i],
      ]);
      G1S19.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[19].values.toArray()[i],
      ]);
      G1S20.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[20].values.toArray()[i],
      ]);
      G1S21.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[21].values.toArray()[i],
      ]);
      G1S22.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[22].values.toArray()[i],
      ]);
      G1S23.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[23].values.toArray()[i],
      ]);
      G1S24.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[24].values.toArray()[i],
      ]);
      G1S25.push([
        convertEpochToSpecificTimezone(fData.fields[0].values.toArray()[i], -12),
        fData.fields[25].values.toArray()[i],
      ]);
    }
  } catch (err) {}

  return [
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
    G1S11,
    G1S12,
    G1S13,
    G1S14,
    G1S15,
    G1S16,
    G1S17,
    G1S18,
    G1S19,
    G1S20,
    G1S21,
    G1S22,
    G1S23,
    G1S24,
    G1S25,
  ];
};
