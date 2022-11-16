import { Router } from 'express';
import TeamController from '../controllers/team.controller';

const teamRouter = Router();
const teamController = new TeamController();

teamRouter.get('/teams', (req, res) => teamController.getTeams(req, res));
teamRouter.get('/teams/:id', (req, res) => teamController.getTeamsById(req, res));

export default teamRouter;
