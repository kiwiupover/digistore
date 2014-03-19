App.ProductRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('product', params.product_id)
  },

  actions: {
    addToCart: function (product) {
        this.store.createRecord('item', {
        quantity: 1,
        currentprice: product.get('price'),
        product: product
      });
      item.save();
    this.transitionTo('cart');
    }
  }

});
