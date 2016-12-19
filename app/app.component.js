(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Hello Angular</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));


//The Component method takes a configuration object with three properties.

//The Class method is where we implement the component itself, 
//giving it properties and methods that bind to the view and whatever 
//behavior is appropriate for this part of the UI.
