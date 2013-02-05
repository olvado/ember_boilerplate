
App.Router.map(function() {
  this.resource('user', { path: 'user/:user_id' }, function(){
    this.resource('newCards', function(){
      this.resource('newCard', {path: ':card_id'});
    });
    this.resource('cards', function(){
      this.resource('card', {path: ':card_id'});
    });
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('user', App.User.find(1));
  }
});

App.NewCardsRoute = Ember.Route.extend({
  model: function() {
    return App.Card.find();
  }
});

App.NewCardRoute = Ember.Route.extend({
  model: function(params) {
    return App.Card.find(params.card_id);
  }
});

App.CardsRoute = Ember.Route.extend({
  model: function() {
    return App.Card.find();
  }
});

App.CardRoute = Ember.Route.extend({
  model: function(params) {
    return App.Card.find(params.card_id);
  }
});