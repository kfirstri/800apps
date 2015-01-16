// React Router
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({displayName: "App",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {id: "header", className: "container"}, 
            React.createElement("div", {className: "row"}, 
              React.createElement("div", {id: "question", className: "col-xs-12"}, 
                React.createElement(Link, {to: "profile"}, React.createElement("span", {id: "question"}, React.createElement("h2", null, "אפליקציה")))
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
        React.createElement("div", {className: "rowdd"}, 
          React.createElement("div", {id: "header", className: "container"}, 
            React.createElement("div", {className: "row"}, 
              React.createElement("div", {id: "question", className: "col-xs-7"}, 
                React.createElement("span", {id: "question"}, React.createElement("h2", null, "פוזמק"))
              ), 
              React.createElement("div", {id: "timer", className: "col-xs-5"}, 
                React.createElement("span", {className: "glyphicon glyphicon-time"}), 
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
              React.createElement(Link, {to: "test"}, React.createElement("div", {className: "btn btn-default"}, "התחל מבחן חשוב מאוד"))
            ), 
            React.createElement("div", {id: "test", className: "col-xs-12"}, 
              React.createElement(Link, {to: "test"}, React.createElement("div", {className: "btn btn-default"}, "מבחן נוסף שכדאי לעשות"))
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
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {id: "answers", className: "container"}, 
          React.createElement("div", {className: "row answer"}, 
            React.createElement("span", {className: "col-xs-10"}, "איש שמן מאוד"), 
            React.createElement("span", {className: "col-xs-2"}, React.createElement("span", {className: "glyphicon glyphicon-question-sign"}))
          ), 
          React.createElement("div", {className: "row answer"}, 
            React.createElement("span", {className: "col-xs-10"}, "גרב"), 
            React.createElement("span", {className: "col-xs-2"}, React.createElement("span", {className: "glyphicon glyphicon-question-sign"}))
          ), 
          React.createElement("div", {className: "row answer"}, 
            React.createElement("span", {className: "col-xs-10"}, "ילד מזדקן"), 
            React.createElement("span", {className: "col-xs-2"}, React.createElement("span", {className: "glyphicon glyphicon-question-sign"}))
          ), 
          React.createElement("div", {className: "row answer"}, 
            React.createElement("span", {className: "col-xs-10"}, "איפה יוסי הלך לאיבוד?"), 
            React.createElement("span", {className: "col-xs-2"}, React.createElement("span", {className: "glyphicon glyphicon-question-sign"}))
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
