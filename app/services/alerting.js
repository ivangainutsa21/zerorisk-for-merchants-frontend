import Ember from 'ember';

export default Ember.Service.extend({
  // Methods
  notify(message, type, context) {
    let options = {
      style: "bar",
      position: "top",
      message: message,
      type: type
    }

    switch (context) {
      case "stand-alone":
          options.style = "simple";
          options.position = "top-right";
      break;
    }

    console.log(options);

    $('body').pgNotification(options).show();
  }
});
