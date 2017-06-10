import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('know');
  },

  actions: {
    saveKnow3(params) {
      varNewKnow = this.store.createRecord('know', params);
      newKnow.save();
      this.transitionTo('index');
    },

    update(know, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          know.set(key, params[key]);
        }
      });

      know.save();
      this.transitionTo('inedx');
    },

    destroyKnow(know) {
      know.destroyRecord();
      this.transitionTo('index');
    }
  }
});
