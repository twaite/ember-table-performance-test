import Controller from '@ember/controller';

export default Controller.extend({
  data: null,

  actions: {
    loadData,
  }
});

function loadData() {
  Array(1000).fill().forEach((data, index) => {
    this.store.createRecord('table-data', {
      id: index,
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