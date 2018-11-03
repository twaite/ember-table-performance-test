import DS from 'ember-data';
import { attr } from '@ember-decorators/data';
const { Model } = DS;

export default class SelectOptionModel extends Model {
  @attr('string') code;
  @attr('displayValue') displayValue;
}
