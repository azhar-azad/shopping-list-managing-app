Template.listItem.helpers({
    itemId: function() {
        return Router.current().params.itemId;
    },
    item: function () {
        var itemId = Router.current().params.itemId;
        return ShoppingList.findOne({_id: itemId});
    }
});

Template.listItem.events({
    'submit .js-update-item': function (event) {

        // get itemId from url, sent by router
        var itemId = Router.current().params.itemId;

        // get form data
        var itemName = event.target.itemName.value;
        var itemPrice = event.target.itemPrice.value;

        // updated data to save in database
        var itemPayload = {
            name: itemName,
            price: itemPrice
        };

        // call update method in common.js
        Meteor.call('updateItem', itemId, itemPayload);

        // get back to list page
        Router.go('/shoppingList');

        // prevent browser to auto-submit
        return false;
    }
});
