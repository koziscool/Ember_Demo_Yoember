import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  message: '',
  messageLength: Ember.computed.gte('message').length,

  emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  messageValid: Ember.computed.gte('messageLength', 5),
  submissionValid: Ember.computed.and('emailValid', 'messageValid'),  

  actions: {
    processMessage: function(){
      alert(`sending the message is in progress: ${this.get('emailAddress')},  ${this.get('message')}`);

    }
  }
});
