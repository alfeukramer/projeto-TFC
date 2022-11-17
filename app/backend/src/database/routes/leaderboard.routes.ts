import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const leaderboardRouter = Router();
const leaderboardController = new LeaderboardController();

leaderboardRouter.get('/leaderboard/home', (req, res) =>
  leaderboardController.getHomeScores(req, res));

export default leaderboardRouter;
