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
let totalScore = player.GetVar("TotalScore");

player.SetVar("TotalScore", totalScore + 1);
}

window.Script2 = function()
{
  let player = GetPlayer();
let totalScore = player.GetVar("TotalScore");

player.SetVar("TotalScore", totalScore + 1);
}

window.Script3 = function()
{
  let player = GetPlayer();
let totalScore = player.GetVar("TotalScore");

player.SetVar("TotalScore", totalScore + 1);
}

window.Script4 = function()
{
  let player = GetPlayer();
let totalScore = player.GetVar("TotalScore");

player.SetVar("TotalScore", totalScore + 1);
}

window.Script5 = function()
{
  let player = GetPlayer();
let totalScore = player.GetVar("TotalScore");

player.SetVar("TotalScore", totalScore + 1);
}

window.Script6 = function()
{
  let player = GetPlayer();
let totalScore = player.GetVar("TotalScore");

player.SetVar("TotalScore", totalScore + 1);
}

window.Script7 = function()
{
  let player = GetPlayer();
let totalScore = player.GetVar("TotalScore");

player.SetVar("TotalScore", totalScore + 1);

}

};
