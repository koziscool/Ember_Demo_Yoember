
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';
import Ember from 'ember';

export default Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string'),

  isValid: Ember.computed.notEmpty('name')
});
