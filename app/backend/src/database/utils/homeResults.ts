const homeResultsQuery = `SELECT team_name AS name,
SUM(CASE WHEN home_team_goals > away_team_goals THEN 3
WHEN home_team_goals = away_team_goals THEN 1
ELSE 0 END) AS totalPoints,
COUNT(teams.id) AS totalGames,
SUM(CASE WHEN home_team_goals > away_team_goals THEN 1 ELSE 0 END) AS totalVictories,
SUM(CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) AS totalDraws,
SUM(CASE WHEN home_team_goals < away_team_goals THEN 1 ELSE 0 END) AS totalLosses,
SUM(home_team_goals) AS goalsFavor,
SUM(away_team_goals) AS goalsOwn,
SUM(home_team_goals) - SUM(away_team_goals) AS goalsBalance,
FORMAT((SUM(CASE WHEN home_team_goals > away_team_goals THEN 3
WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) 
/ (COUNT(teams.id)*3)) * 100, 2) AS efficiency
FROM matches
INNER JOIN teams ON teams.id = matches.home_team
WHERE in_progress = FALSE
GROUP BY team_name
ORDER BY totalPoints DESC, goalsBalance DESC, totalVictories DESC, goalsFavor DESC, goalsOwn DESC`;

const awayResultsQuery = `SELECT team_name AS name,
SUM(CASE WHEN away_team_goals > home_team_goals THEN 3
WHEN home_team_goals = away_team_goals THEN 1
ELSE 0 END) AS totalPoints,
COUNT(teams.id) AS totalGames,
SUM(CASE WHEN away_team_goals > home_team_goals THEN 1 ELSE 0 END) AS totalVictories,
SUM(CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) AS totalDraws,
SUM(CASE WHEN away_team_goals < home_team_goals THEN 1 ELSE 0 END) AS totalLosses,
SUM(away_team_goals) AS goalsFavor,
SUM(home_team_goals) AS goalsOwn,
SUM(away_team_goals) - SUM(home_team_goals) AS goalsBalance,
FORMAT((SUM(CASE WHEN away_team_goals > home_team_goals THEN 3
WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) 
/ (COUNT(teams.id)*3)) * 100, 2) AS efficiency
FROM matches
INNER JOIN teams ON teams.id = matches.away_team
WHERE in_progress = FALSE
GROUP BY team_name
ORDER BY totalPoints DESC, goalsBalance DESC, totalVictories DESC, goalsFavor DESC, goalsOwn DESC`;

export { homeResultsQuery, awayResultsQuery };
