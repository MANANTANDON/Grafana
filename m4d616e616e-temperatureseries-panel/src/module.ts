import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'changeName',
      name: 'Change Group Name',
      description: 'write a custom group name before "," to rename it. (max = 17)',
      defaultValue: ',,,,,,,,,,,,,,,,',
    })
    .addTextInput({
      path: 'groups',
      name: 'How many group you want ? ',
      description: '(max groups = 17)',
      defaultValue: '',
    });
});
