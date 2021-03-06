App.ApplicationRoute = Em.Route.extend({

  beforeModel: function() {
    if (typeof(localStorage.cartId) === "undefined") {
      var cart = this.store.createRecord('cart')
      cart.save()
      localStorage.cartId = cart.get('id')
    }
  },

  model: function () {
    return this.store.find('cart');
  }
});
