import { IMatches, newMatch } from '../interfaces/IMatches';
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

  async getByQuery(query: any): Promise<IMatches[]> {
    const matches = await this.matchesModel.findAll(
      { where: { inProgress: query !== 'false' ? 1 : 0 },
        include: [{ model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
          { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } }],
      },
    );
    return matches;
  }

  async insertMatch(teams: newMatch): Promise<IMatches> {
    const insertMatch = await this.matchesModel.create({ ...teams, inProgress: 1 });
    return insertMatch;
  }

  async updateStatusMatch(id: string) {
    const updateMatch = await this.matchesModel.update({ inProgress: false }, { where: { id } });
    return updateMatch;
  }

  async updateMatchesInProgress(id: string, homeTeamGoals: number, awayTeamGoals: number) {
    const updateProgress = await this.matchesModel
      .update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return updateProgress;
  }
}
