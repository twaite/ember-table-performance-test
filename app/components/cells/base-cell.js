import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { classNames, className } from '@ember-decorators/component';

const noop = () => {}

@classNames('base-cell')
export default class CellsBaseCellComponent extends Component {
  @argument
  value = null;

  @argument
  args = null;

  // TODO: fix this
  @argument
  @className
  cellClassNames = null;

  @argument
  onchange = noop;

  @argument
  rowMeta = null;
}
