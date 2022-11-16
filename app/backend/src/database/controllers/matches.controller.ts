import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';

export default class MatchesController {
  public readonly matchesService: MatchesService;

  constructor() {
    this.matchesService = new MatchesService();
  }

  async getAllMatches(req: Request, res: Response) {
    const allMatches = await this.matchesService.getAllMatches();
    return res.status(200).json(allMatches);
  }
}
