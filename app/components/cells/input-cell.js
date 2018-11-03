import TextField from '@ember/component/text-field';
import { on } from '@ember-decorators/object';

export default class CellsInputCellComponent extends TextField {
  @on('click')
  click(event) {
    event.stopPropagation();
  }
}
