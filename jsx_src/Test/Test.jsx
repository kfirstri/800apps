var React = require('react');
var TestAnswers = require('./TestAnswers.jsx');

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

module.exports = Test;
