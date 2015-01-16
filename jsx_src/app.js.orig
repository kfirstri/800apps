// React
var React = require('react');

// React Router
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

// Components


var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <div id="header" className="container">
            <div className="row">
              <div id="question" className="col-xs-12">
                <Link to="profile"><span id="question"><h2>אפליקציה</h2></span></Link>
              </div>
            </div>
          </div>
        </div>
        <RouteHandler/>
      </div>
    )
  }
});

var Test = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <div id="header" className="container">
            <div className="row">
              <div id="question" className="col-xs-7">
                <span id="question"><h2>פוזמק</h2></span>
              </div>
              <div id="timer" className="col-xs-5">
                <span className="glyphicon glyphicon-time"></span>
                8 שניות
              </div>
            </div>
          </div>
        </div>
        <TestAnswers />
      </div>
    );
  }
});

var Profile  = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div id="profile" className="container">
          <div className="row">
            <div id="test" className="col-xs-12">
              <Link to="test"><div className="btn btn-default">התחל מבחן חשוב מאוד</div></Link>
            </div>
            <div id="test" className="col-xs-12">
              <Link to="test"><div className="btn btn-default">מבחן נוסף שכדאי לעשות</div></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var TestAnswers = React.createClass({
  // TODO : Create a answer class
  componentDidMount: function() {
    var animClick = 'pulse';
    // var animEntry = 'fadeInRight';

    $('div.answer').click(function() {
      $(this).addClass(animClick + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass(animClick + ' bounce animated');
      });
    });
  },
  render: function() {
    return (
      <div className="row">
        <div id="answers" className="container">
          <div className="row answer">
            <span className="col-xs-10">איש שמן מאוד</span>
            <span className="col-xs-2"><span className="glyphicon glyphicon-question-sign"></span></span>
          </div>
          <div className="row answer">
            <span className="col-xs-10">גרב</span>
            <span className="col-xs-2"><span className="glyphicon glyphicon-question-sign"></span></span>
          </div>
          <div className="row answer">
            <span className="col-xs-10">ילד מזדקן</span>
            <span className="col-xs-2"><span className="glyphicon glyphicon-question-sign"></span></span>
          </div>
          <div className="row answer">
            <span className="col-xs-10">איפה יוסי הלך לאיבוד?</span>
            <span className="col-xs-2"><span className="glyphicon glyphicon-question-sign"></span></span>
          </div>
        </div>
      </div>
    );
  }
});


var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="profile" handler={Profile}/>
    <Route name="test" handler={Test}/>
    <DefaultRoute handler={Profile}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('content'));
});
