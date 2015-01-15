var App = React.createClass({displayName: "App",
  render: function () {
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
