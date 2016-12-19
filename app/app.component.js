
//Most application files export one thing by adding that thing to the app namespace. 
//Our app.component.js file exports the AppComponent.

(function(app) {
  app.AppComponent =
  //When we need something from Angular, we use the ng object.
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Hello Angular</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
//within each file we surround the code in an IIFE 
//("Immediately Invoked Function Expression").


//The Component method takes a configuration object with three properties.

//The Class method is where we implement the component itself, 
//giving it properties and methods that bind to the view and whatever 
//behavior is appropriate for this part of the UI.
