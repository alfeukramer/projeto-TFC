import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';

export default class TeamController {
  private readonly teamService: TeamsService;

  constructor() {
    this.teamService = new TeamsService();
  }

  async getTeams(req: Request, res: Response) {
    const team = await this.teamService.getTeams();
    return res.status(200).json(team);
  }
}
