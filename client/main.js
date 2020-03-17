import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './layout.html';
import './templates/navbar.html';
import './templates/footer.html';



// Template.modal.events({
//   'click .leClub': function () {
//     event.preventDefault();

//     //Get input value
//     const target = event.target;
//   }
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });