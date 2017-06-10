import Ember from 'ember';

export default Ember.Component.extend({
  addNewKnow: false,
  actions: {
    knowFormShow() {
      this.set('addNewKnow', true);
    },
    saveKnow1() {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        explore: this.get('explore'),
      };
      this.set('addNewKnow', false);
      this.sendAction('saveKnow2', params);
    }
  }
});
