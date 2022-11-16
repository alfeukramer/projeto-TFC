import { IMatches } from '../interfaces/IMatches';
import Matches from '../models/matches.model';
import Teams from '../models/teams.model';

export default class MatchesService {
  public readonly matchesModel = Matches;

  async getAllMatches(): Promise<IMatches[]> {
    const matches = await this.matchesModel.findAll({
      include: [{ model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } }],
    });
    return matches;
  }
}
