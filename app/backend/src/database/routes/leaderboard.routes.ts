import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const leaderboardRouter = Router();
const leaderboardController = new LeaderboardController();

leaderboardRouter.get('/leaderboard', (req, res) =>
  leaderboardController.allScores(req, res));

leaderboardRouter.get('/leaderboard/home', (req, res) =>
  leaderboardController.getHomeScores(req, res));

leaderboardRouter.get('/leaderboard/away', (req, res) =>
  leaderboardController.getAwayScores(req, res));

export default leaderboardRouter;
