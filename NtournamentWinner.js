// function tournamentWinner(competitions, results) {
//   let teamsDict = {};
//   for (let index = 0; index < competitions.length; index++) {
//     const teams = competitions[index];
//     let winner = results[index];
//     if (winner == 0) {
//       winner = 1;
//     } else if (winner == 1) {
//       winner = 0;
//     }

//     let winnerTeam = teams[winner];
//     teamsDict[winnerTeam] = 3;
//   }

//   console.log(teamsDict);

//   return "";
// }
// const competitions = [
//   ["HTML", "C#"],
//   ["C#", "Python"],
//   ["Python", "HTML"],
// ];

// const results = [0, 0, 1];

// tournamentWinner(competitions, results);

const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

const results = [0, 0, 1];
function tournamentWinner(competitions, results) {
  let teamWinners = {};

  for (let index = 0; index < competitions.length; index++) {
    let twoTeamsCompetingArr = competitions[index];
    let theWinnerBinaryValue = results[index];
    let teamThatWon = "";

    if (theWinnerBinaryValue == 0) {
      teamThatWon = twoTeamsCompetingArr[theWinnerBinaryValue + 1];
    } else if (theWinnerBinaryValue == 1) {
      teamThatWon = twoTeamsCompetingArr[theWinnerBinaryValue - 1];
    }

    if (!teamWinners.hasOwnProperty(teamThatWon)) {
      teamWinners[teamThatWon] = 3;
    } else {
      teamWinners[teamThatWon] += 3;
    }
  }

  let winnerPoints = 0;
  let winnerName = "";
  for (const property in teamWinners) {
    if (teamWinners[property] > winnerPoints) {
      winnerPoints = teamWinners[property];
      winnerName = property;
    }
  }

  return winnerName;
}

console.log(tournamentWinner(competitions, results));
