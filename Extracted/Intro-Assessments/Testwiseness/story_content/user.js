window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  let player = GetPlayer();
player.SetVar("TotalScore", 0);
}

window.Script2 = function()
{
  let player = GetPlayer();

let totalScore = player.GetVar("TotalScore") + 1;

if (totalScore <= 1) {
  player.SetVar("TotalScore", totalScore);
}
}

window.Script3 = function()
{
  let player = GetPlayer();
let totalScore = player.GetVar("TotalScore") + 1;

if (totalScore <= 2) {
  player.SetVar("TotalScore", totalScore);
}
}

window.Script4 = function()
{
  let player = GetPlayer();
let totalScore = player.GetVar("TotalScore") + 1;

if (totalScore <= 3) {
player.SetVar("TotalScore", totalScore);
}

}

};
