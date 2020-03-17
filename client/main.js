import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './templates/navbar.html';
import './templates/footer.html';
import './templates/mainLayout.html';
import './templates/homeLayout.html';
import './templates/leClub.html';
import './templates/lesEquipes.html';
import './templates/actualite.html';
import './templates/partenaires.html';

import '../lib/router.js';

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