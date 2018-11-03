import DS from 'ember-data';
const { Model } = DS;
import { attr } from '@ember-decorators/data';

export default class TableDataModel extends Model {
  @attr selectOne;
  @attr selectTwo;
  @attr selectThree;
  @attr selectFour;

  @attr('string') textOne;
  @attr('string') textTwo;
  @attr('string') textThree;

  @attr('number') currency;

  @attr('number') numberOne;
  @attr('number') numberTwo;

  @attr('boolean') checkbox;
}
