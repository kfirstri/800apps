var React = require('react');

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

module.exports = TestAnswers;
