Meteor.methods({

    // add an item to collection
    addItem: function (itemName, itemPrice) {

        // check if user is signed in
        if (!Meteor.userId()) {
            alert('Not authorized. Please sign-in');
            throw new Meteor.Error('Not Authorized to insert');
        }

        // insert an item into collection
        ShoppingList.insert({
            name: itemName,
            price: itemPrice,
            createdAt: new Date(),
            userId: Meteor.userId(),
            username: Meteor.user().username
        });
    },

    // delete and item from collection
    deleteItem: function (itemId) {

        // check if user is signed in
        if (!Meteor.userId()) {
            alert('Not authorized. Please sign-in');
            throw new Meteor.Error('Not Authorized to delete');
        }

        // remove an item from collection
        ShoppingList.remove(itemId);
    },

    // update an item
    updateItem: function(itemId, itemPayload) {

        // update an item in collection
        ShoppingList.update(itemId, {$set: {name: itemPayload.name, price: itemPayload.price}});
    },

    // route from list page to item page
    routeToItem: function(itemId) {

        // route from list to item
        Router.go('/listItem/' + itemId);
    },

    // toggle checkbox
    toggleCheck: function (itemId, checked) {

        // check if user is signed in
        if (!Meteor.userId()) {
            alert('Please Sign-in to save changes');
            throw new Meteor.Error('Not Authorized to update');
        }

        // update the checked property of an item
        ShoppingList.update(itemId, {$set: {checked: checked}});
    }
});
