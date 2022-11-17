import { IResults } from '../interfaces/IResults';
import Models from '../models';
import homeResultsQuery from '../utils/homeResults';

export default class LeaderboardService {
  public model = Models;

  async homeScores(): Promise<IResults[]> {
    const [homeResults] = await this.model.query(homeResultsQuery);
    return homeResults as IResults[];
  }
}
