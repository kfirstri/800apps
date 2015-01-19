var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;

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

module.exports = Profile;
