App.ProductNewRoute = Ember.Route.extend({
  model: function (params) {
    return {};
  },

  actions: {
    createProduct: function (proxy) {
      newProduct = this.store.createRecord('product', proxy);

      var self = this
      newProduct.save().then(function () {
          self.transitionTo('home');
        },
        function (error) {
          alert(error.responseText);
          newProduct.deleteRecord();
        }
      );
    }
  }
});
