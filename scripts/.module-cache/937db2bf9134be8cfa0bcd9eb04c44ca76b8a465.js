// React Router
var Router = require('react-router.js');
var Route = Router.Route;
var Routes = Router.Routes;
var Link = Router.Link;


var App = React.createClass({displayName: "App",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {id: "header", className: "container"}, 
            React.createElement("div", {className: "row"}, 
              React.createElement("div", {id: "question", className: "col-xs-12"}, 
                React.createElement("span", {id: "question"}, React.createElement("h2", null, "אפליקציה"))
              )
            )
          )
        ), 
        React.createElement(RouteHandler, null)
      )
    )
  }
});

var Test = React.createClass({displayName: "Test",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", {class: "row"}, 
          React.createElement("div", {id: "header", class: "container"}, 
            React.createElement("div", {class: "row"}, 
              React.createElement("div", {id: "question", class: "col-xs-7"}, 
                React.createElement("span", {id: "question"}, React.createElement("h2", null, "פוזמק"))
              ), 
              React.createElement("div", {id: "timer", class: "col-xs-5"}, 
                React.createElement("span", {class: "glyphicon glyphicon-time"}), 
                "8 שניות"
              )
            )
          )
        ), 
        React.createElement(TestAnswers, null)
      )
    );
  }
});

var Profile  = React.createClass({displayName: "Profile",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {id: "profile", className: "container"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {id: "test", className: "col-xs-12"}, 
              React.createElement("a", {className: "btn btn-default"}, "התחל מבחן חשוב מאוד")
            ), 
            React.createElement("div", {id: "test", class: "col-xs-12"}, 
              React.createElement("a", {className: "btn btn-default"}, "מבחן חשוב אחר")
            )
          )
        )
      )
    );
  }
});

var TestAnswers = React.createClass({displayName: "TestAnswers",
  // TODO : Create a answer class
  render: function() {
    return (
      React.createElement("div", {class: "row"}, 
        React.createElement("div", {id: "answers", class: "container"}, 
          React.createElement("div", {class: "row answer"}, 
            React.createElement("span", {class: "col-xs-10"}, "איש שמן מאוד"), 
            React.createElement("span", {class: "col-xs-2"}, React.createElement("span", {class: "glyphicon glyphicon-question-sign"}))
          ), 
          React.createElement("div", {class: "row answer"}, 
            React.createElement("span", {class: "col-xs-10"}, "גרב"), 
            React.createElement("span", {class: "col-xs-2"}, React.createElement("span", {class: "glyphicon glyphicon-question-sign"}))
          ), 
          React.createElement("div", {class: "row answer"}, 
            React.createElement("span", {class: "col-xs-10"}, "ילד מזדקן"), 
            React.createElement("span", {class: "col-xs-2"}, React.createElement("span", {class: "glyphicon glyphicon-question-sign"}))
          ), 
          React.createElement("div", {class: "row answer"}, 
            React.createElement("span", {class: "col-xs-10"}, "איפה יוסי הלך לאיבוד?"), 
            React.createElement("span", {class: "col-xs-2"}, React.createElement("span", {class: "glyphicon glyphicon-question-sign"}))
          )
        )
      )
    );
  }
});


var routes = (
  React.createElement(Route, {name: "app", path: "/", handler: App}, 
    React.createElement(Route, {name: "profile", handler: Profile}), 
    React.createElement(Route, {name: "test", handler: Test}), 
    React.createElement(DefaultRoute, {handler: Profile})
  )
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('content'));
});
