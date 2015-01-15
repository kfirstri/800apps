


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
