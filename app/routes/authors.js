import Ember from 'ember';

export default Ember.Route.extend({
  
  isNotValid: Ember.computed.empty('name'),

  model() {
    return this.store.findAll('author');
  },

 actions: {

   editAuthor(author) {
     author.set('isEditing', true);
   },

   cancelAuthorEdit(author) {
     author.set('isEditing', false);
     author.rollbackAttributes();
   },

   saveAuthor(author) {
     if (author.get('isNotValid')) {
       return;
     }

     author.set('isEditing', false);
     author.save();
   }
 }

});
