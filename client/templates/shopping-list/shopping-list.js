Template.shoppingList.helpers({
    items: function () {
        return ShoppingList.find({}, {sort: {createdAt: -1}});
    }
});

Template.shoppingList.events({
    // insert a new item
    'submit .js-add-item': function (event) {

        var itemName = event.target.itemName.value;
        var itemPrice = event.target.itemPrice.value;

        if (!(itemName && itemPrice)) {    // prevent submitting empty form
            alert('Please fill up the whole form');
        }
        else {
            Meteor.call('addItem', itemName, itemPrice);

            event.target.itemName.value = '';
            event.target.itemPrice.value = '';
        }

        return false;
    },

    'click .js-delete-item': function (event) {
        Meteor.call('deleteItem', this._id);
    },

    'click .js-route-to-item-page': function (event) {
        Meteor.call('routeToItem', this._id);
    },
    
    'click .js-toggle-checked': function (event) {
        Meteor.call('toggleCheck', this._id, !this.checked);
    }
});
