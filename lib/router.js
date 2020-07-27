Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {
    // home router
    this.route('home', {
        path: '/',
        template: 'home'
    });

    // list-page
    this.route('shoppingList');

    // single-item page
    this.route('listItem', {
        path: 'listItem/:itemId',
        templete: 'listItem',
        // data: function() {
        //     var itemId = this.params.itemId;
        //     return ShoppingList.findOne({_id: itemId});
        // }
    });

    // contact page
    this.route('contact');
});
