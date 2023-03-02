import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from 'components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'text',
      name: 'Simple text option',
      description: 'text',
    })
    .addRadio({
      path: 'fieldName',
      name: 'Group Selection',
      settings: {
        options: [
          {
            value: 'G1S1',
            label: 'G1S1',
          },
          {
            value: 'G1S2',
            label: 'G1S2',
          },
          {
            value: 'G1S3',
            label: 'G1S3',
          },
          {
            value: 'G1S4',
            label: 'G1S4',
          },
          {
            value: 'G1S5',
            label: 'G1S5',
          },
        ],
      },
    })
    .addNumberInput({ path: 'value', name: 'Value Input', description: 'enter temperature value' })
    .addTextInput({ path: 'time', name: 'Time Input', description: "enter time in this format '0:00'" })
    .addColorPicker({ path: 'color', name: 'color picker' })
    .addBooleanSwitch({
      path: 'showSeriesCount',
      name: 'Show series counter',
      defaultValue: false,
    })
    .addRadio({
      path: 'seriesCountSize',
      defaultValue: 'sm',
      name: 'Series counter size',
      settings: {
        options: [
          {
            value: 'sm',
            label: 'Small',
          },
          {
            value: 'md',
            label: 'Medium',
          },
          {
            value: 'lg',
            label: 'Large',
          },
        ],
      },
      showIf: (config) => config.showSeriesCount,
    });
});