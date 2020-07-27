Meteor.startup(function () {
    // code to run on server at startup
});

Meteor.publish('shoppingList', function () {
    return ShoppingList.find({userId: this.userId});
});
