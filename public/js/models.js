App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

App.User = DS.Model.extend({
  name:     DS.attr('string'),
  cards:    DS.hasMany('App.Card')
});

App.Card = DS.Model.extend({
  name: DS.attr('string')
});