import Controller from '@ember/controller';

export default Controller.extend({
  data: null,

  actions: {
    loadData,
  }
});

function loadData() {
  Array(8).fill().forEach(() => {
    this.store.createRecord('table-data', {
      selectOne: 'one',
      selectTwo: 'two',
      selectThree: 'three',
      selectFour: 'four',
      textOne: 'text one',
      textTwo: 'text two',
      textThree: 'text three',
      currency: 12345.67,
      numberOne: 65412,
      numberTwo: 1236,
      checkbox: true,
    });
  });

  this.setProperties({
    data: this.store.peekAll('table-data'),
  });
}