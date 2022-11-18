import { IResults } from '../interfaces/IResults';
import Models from '../models';
import { awayResultsQuery, homeResultsQuery, totalLeaderboard } from '../utils/homeResults';

export default class LeaderboardService {
  public model = Models;

  async homeScores(): Promise<IResults[]> {
    const [homeResults] = await this.model.query(homeResultsQuery);
    return homeResults as IResults[];
  }

  async awayScores(): Promise<IResults[]> {
    const [awayResults] = await this.model.query(awayResultsQuery);
    return awayResults as IResults[];
  }

  async allScores(): Promise<IResults[]> {
    const [AllScores] = await this.model.query(totalLeaderboard);
    return AllScores as IResults[];
  }
}
