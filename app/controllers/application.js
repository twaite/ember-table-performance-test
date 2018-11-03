import Controller from '@ember/controller';

export default Controller.extend({
  data: null,
  selectOptions: null,

  actions: {
    loadData,
  }
});

function loadData() {
  Array(1000).fill().forEach((data, index) => {
    this.store.createRecord('table-data', {
      id: index,
      selectOne: 'One',
      selectTwo: 'Two',
      selectThree: 'Three',
      selectFour: 'Four',
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

  const options = ['One', 'Two', 'Three', 'Four'];

  options.forEach((opt, index) => {
    this.store.createRecord('select-option', {
      id: index,
      code: opt.toUpperCase(),
      displayValue: opt,
    })
  });

  this.setProperties({
    selectOptions: this.store.peekAll('select-option'),
  });
}