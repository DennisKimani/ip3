import Ember from 'ember';

export default Ember.Component.extend({
  updateKnowForm: false,
  actions: {
    updateKnowForm() {
      this.set('updateKnowForm', true);
    },
    update(know) {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        explore: this.get('explore'),
      };
      this.set('updateKnowForm', false);
      this.sendAction('update', know, params);
    }
  }
});
