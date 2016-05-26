import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.search.onCreated(function helloOnCreated() {
});

Template.search.helpers({
  index: () => {
    return PlayersIndex;
  }
});

