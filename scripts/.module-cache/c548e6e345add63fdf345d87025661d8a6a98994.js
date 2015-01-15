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
//
// var Test = React.createClass(function() {
//   render: function() {
//     return (
//       <div>
//         <div class="row">
//           <div id="header" class="container">
//             <div class="row">
//               <div id="question" class="col-xs-7">
//                 <span id="question"><h2>פוזמק</h2></span>
//               </div>
//               <div id="timer" class="col-xs-5">
//                 <span class="glyphicon glyphicon-time"></span>
//                 8 שניות
//               </div>
//             </div>
//           </div>
//         </div>
//         <TestAnswers />
//       </div>
//     );
//   }
// });



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
