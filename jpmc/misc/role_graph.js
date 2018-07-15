var x = [];
var username="raminisai12";
var api_key="OsdWOTzAOvhQ6wjFYSts";
var object=require ("plotly");
for (var i = 0; i < 500; i ++) 
{
	x[i] = Math.random();
}

object(username, api_key);

var data = [
  {
    x: x,
    type: "histogram"
  }
];
var graphOptions = {filename: "basic-histogram", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});