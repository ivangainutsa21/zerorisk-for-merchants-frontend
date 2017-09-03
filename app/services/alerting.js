import Ember from 'ember';

export default Ember.Service.extend({
  // Methods
  notify(message, type, extra) {
    let options = {
      style: "bar",
      position: "top",
      message: message,
      type: type
    };

    switch (extra) {
      case "bottom-right-toast":
          options.style = "simple";
          options.position = "bottom-right";
      break;
    }

    Ember.run.scheduleOnce('afterRender', () => {      
      Ember.$('body').pgNotification(options).show();
    });
  }
});
