import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.service';

export default class {
  private readonly leaderService: LeaderboardService;

  constructor() {
    this.leaderService = new LeaderboardService();
  }

  async getHomeScores(req: Request, res: Response) {
    const results = await this.leaderService.homeScores();
    return res.status(200).json(results);
  }

  async getAwayScores(req: Request, res: Response) {
    const results = await this.leaderService.awayScores();
    return res.status(200).json(results);
  }

  async allScores(req: Request, res: Response) {
    const results = await this.leaderService.allScores();
    return res.status(200).json(results);
  }
}
