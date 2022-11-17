import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';
import sameTeam from '../middlerawes/sameTeam';
import tokenValidation from '../middlerawes/tokenExists';
import verifyTeamId from '../middlerawes/verifyTeamId';
// import auth from '../middlerawes/tokenExists';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.get('/matches', (req, res) => matchesController.getAllMatches(req, res));
matchesRouter.post('/matches', tokenValidation, sameTeam, verifyTeamId, (req, res) =>
  matchesController.insertMatch(req, res));
matchesRouter.patch('/matches/:id/finish', (req, res) => matchesController
  .updateStatusMatch(req, res));

export default matchesRouter;
