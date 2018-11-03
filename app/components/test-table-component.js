import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import { argument } from '@ember-decorators/argument';

export default class TestTableComponent extends Component {
  @argument
  data = null;

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
        cellComponent: 'cells/base-cell',
      },
      {
        width: 125,
        name: 'Select Two',
        valuePath: 'selectTwo',
      },
      {
        width: 200,
        name: 'Select Three',
        valuePath: 'selectThree',
      },
      {
        width: 100,
        name: 'Text One',
        valuePath: 'textOne',
      },
      {
        width: 100,
        name: 'Text Two',
        valuePath: 'textTwo',
      },
      {
        width: 100,
        name: 'Currency',
        valuePath: 'currency',
      },
      {
        width: 100,
        name: 'Text Three',
        valuePath: 'textThree',
      },
      {
        width: 100,
        name: 'Select Four',
        valuePath: 'selectFour',
      },
      {
        width: 100,
        name: 'Number Cell One',
        valuePath: 'numberOne',
      },
      {
        width: 100,
        name: 'Number Cell Two',
        valuePath: 'numberTwo',
      },
      {
        width: 60,
        name: 'Checkbox',
        valuePath: 'checkbox',
      },
    ];
  }
}