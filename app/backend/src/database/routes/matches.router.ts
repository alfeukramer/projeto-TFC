import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.get('/matches', (req, res) => matchesController.getAllMatches(req, res));

export default matchesRouter;
