import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';

export default class DataLoaderComponent extends Component {
  @argument
  // TODO: type this as an action
  onInit = null;

  constructor() {
    super(...arguments);
    this.onInit();
  }
}
