import { Request, Response } from 'express';
import { newMatch } from '../interfaces/IMatches';
import MatchesService from '../services/matches.service';

export default class MatchesController {
  public readonly matchesService: MatchesService;

  constructor() {
    this.matchesService = new MatchesService();
  }

  async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (!inProgress) {
      const allMatches = await this.matchesService.getAllMatches();
      return res.status(200).json(allMatches);
    }
    const matchesQuery = await this.matchesService.getByQuery(inProgress);
    return res.status(200).json(matchesQuery);
  }

  async insertMatch(req: Request, res: Response) {
    const { homeTeam, homeTeamGoals, awayTeam, awayTeamGoals }: newMatch = req.body;
    if (!homeTeam || !homeTeamGoals || !awayTeam || !awayTeamGoals) {
      return res.sendStatus(401);
    }
    const newwMatch = await this.matchesService
      .insertMatch({ homeTeam, homeTeamGoals, awayTeam, awayTeamGoals });
    return res.status(201).json(newwMatch);
  }

  async updateStatusMatch(req: Request, res: Response) {
    const { id } = req.params;
    await this.matchesService.updateStatusMatch(id);
    return res.status(200).json({ message: 'Finished' });
  }

  async updateScoreMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    if (!homeTeamGoals && !awayTeamGoals) {
      return res.status(401).json({ message: 'Something went wrong' });
    }
    await this.matchesService.updateMatchesInProgress(id, homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ message: 'Score updated' });
  }
}
