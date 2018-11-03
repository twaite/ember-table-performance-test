import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import { argument } from '@ember-decorators/argument';

export default class TestTableComponent extends Component {
  @argument
  data = null;

  @argument
  selectOptions = [];

  selection = null;

  @computed
  get columns() {
    return [
      {
        useRowMeta: true,
        width: 40,
        cellComponent: 'cells/index-cell',
        cellClassNames: 'text-right',
      },
      {
        width: 150,
        name: 'Select One',
        valuePath: 'selectOne',
        cellComponent: 'cells/select-cell',
        args: {
          options: this.selectOptions,
        },
      },
      {
        width: 125,
        name: 'Select Two',
        valuePath: 'selectTwo',
        cellComponent: 'cells/select-cell',
        args: {
          options: this.selectOptions,
        },
      },
      {
        width: 200,
        name: 'Select Three',
        valuePath: 'selectThree',
        cellComponent: 'cells/select-cell',
        args: {
          options: this.selectOptions,
        },
      },
      {
        width: 100,
        name: 'Text One',
        valuePath: 'textOne',
        cellComponent: 'cells/input-cell',
      },
      {
        width: 100,
        name: 'Text Two',
        valuePath: 'textTwo',
        cellComponent: 'cells/input-cell',
      },
      {
        width: 100,
        name: 'Currency',
        valuePath: 'currency',
        cellComponent: 'cells/input-cell',
      },
      {
        width: 100,
        name: 'Text Three',
        valuePath: 'textThree',
        cellComponent: 'cells/input-cell',
      },
      {
        width: 100,
        name: 'Select Four',
        valuePath: 'selectFour',
        cellComponent: 'cells/select-cell',
        args: {
          options: this.selectOptions,
        },
      },
      {
        width: 100,
        name: 'Number Cell One',
        valuePath: 'numberOne',
        cellComponent: 'cells/input-cell',
      },
      {
        width: 100,
        name: 'Number Cell Two',
        valuePath: 'numberTwo',
        cellComponent: 'cells/input-cell',
      },
      {
        width: 60,
        name: 'Checkbox',
        valuePath: 'checkbox',
      },
    ];
  }
}