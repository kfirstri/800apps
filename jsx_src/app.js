// React
var React = require('react');

// React Router
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

// Components
var Test = require('./Test/Test.jsx');
var TestAnswers = require('./Test/TestAnswers.jsx');
var Profile = require('./Profile/Profile.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <div id="header" className="container">
            <div className="row">
              <div id="question" className="col-xs-12">
                <Link to="profile"><span id="question"><h2>800App</h2></span></Link>
              </div>
            </div>
          </div>
        </div>
        <RouteHandler/>
      </div>
    )
  }
});

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
