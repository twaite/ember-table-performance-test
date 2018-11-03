import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import { argument } from '@ember-decorators/argument';

export default class TestTableComponent extends Component {
  @argument
  data = null;

  @computed
  get columns() {
    return [
      {
        cellComponent: 'cells/k-index-cell',
        useRowMeta: true,
        width: 40,
      },
      {
        width: 150,
        name: 'Select One',
        valuePath: 'department',
        cellComponent: 'cells/k-enum-select-cell',
        args: {
          options: this.get('model.departments'),
        },
      },
      {
        width: 125,
        name: 'Select Two',
        valuePath: 'propertyType',
        cellComponent: 'cells/k-enum-select-cell',
        args: {
          options: this.get('model.propertyTypes'),
        },
      },
      {
        width: 200,
        name: 'Select Three',
        valuePath: 'propertyEquipmentGroupType',
        cellComponent: 'cells/k-enum-select-cell',
        args: {
          options: this.get('model.propertyEquipmentGroupTypes'),
        },
      },
      {
        width: 100,
        name: 'Text One',
        valuePath: 'itemName',
        cellComponent: 'cells/k-input-cell',
      },
      {
        width: 100,
        name: 'Text Two',
        valuePath: 'model',
        cellComponent: 'cells/k-input-cell',
      },
      {
        width: 100,
        name: 'Currency',
        valuePath: 'newCost',
        cellClassNames: 'text-right',
        cellComponent: 'cells/k-input-cell',
        args: {
          type: 'number',
        },
      },
      {
        width: 100,
        name: 'Text Three',
        valuePath: 'size',
        cellComponent: 'cells/k-input-cell',
      },
      {
        width: 100,
        name: 'Enum Four',
        valuePath: 'unit',
        cellComponent: 'cells/k-basic-select-cell',
        args: {
          options: ['', 'Foot', 'Mile'],
        },
      },
      {
        width: 100,
        name: 'Number Cell One',
        valuePath: 'minimumSize',
        cellComponent: 'cells/k-input-cell',
        cellClassNames: 'text-right',
        args: {
          type: 'number',
        },
      },
      {
        width: 100,
        name: 'Number Cell Two',
        valuePath: 'maximumSize',
        cellComponent: 'cells/k-input-cell',
        cellClassNames: 'text-right',
        args: {
          type: 'number',
        },
      },
      {
        width: 60,
        name: 'Checkbox',
        valuePath: 'perUnit',
        cellComponent: 'cells/k-checkbox-cell',
        cellClassNames: 'text-center',
      },
    ];
  }
}