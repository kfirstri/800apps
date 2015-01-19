var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

// Components
var App = require('./app.js');
var Test = require('./Test/Test.jsx');
var TestAnswers = require('./Test/TestAnswers.jsx');
var Profile = require('./Profile/Profile.jsx');

var Routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="profile" handler={Profile}/>
    <Route name="test" handler={Test}/>
    <DefaultRoute handler={Profile}/>
  </Route>
);


Router.run(Routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('content'));
});

module.exports = Routes;
