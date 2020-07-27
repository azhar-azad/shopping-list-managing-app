Template.contact.events({
    'submit .js-add-user-contact-info': function (event) {
        console.log('in the contact.js');

        var message = event.target.message.value;
        var fullName = event.target.fullName.value;
        var phoneNo = event.target.phoneNo.value;

        console.log(message);
        console.log(fullName);
        console.log(phoneNo);

        event.target.message.value = '';
        event.target.fullName.value = '';
        event.target.phoneNo.value = '';

        alert('Message sent');

        return false;
    }
});
