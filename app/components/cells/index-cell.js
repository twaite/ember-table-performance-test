import Component from '@ember/component';
import { computed } from '@ember-decorators/object';

export default class CellsIndexCellComponent extends Component {
  @computed('rowMeta.index')
  get rowNumber() {
    return this.rowMeta.index + 1;
  }
}
