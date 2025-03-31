window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  let player = GetPlayer();
let totalScore = player.GetVar("TotalScore");

if (totalScore <= 0) {
  player.SetVar("TotalScore", totalScore + 1);
}
}

window.Script2 = function()
{
  let player = GetPlayer();
let totalScore = player.GetVar("TotalScore") + 1;

if (totalScore <= 2) {
  player.SetVar("TotalScore", totalScore);
}
}

window.Script3 = function()
{
  let player = GetPlayer();
let totalScore = player.GetVar("TotalScore");

player.SetVar("TotalScore", totalScore + 1);

}

};
