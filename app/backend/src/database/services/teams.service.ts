import { ITeamById } from '../interfaces/ITeamById';
import Teams from '../models/teams.model';

export default class TeamsService {
  public teamsModel = Teams;

  async getTeams(): Promise<ITeamById[]> {
    const team = await this.teamsModel.findAll();
    return team;
  }

  async getById(id: string): Promise<ITeamById> {
    const teamById = await this.teamsModel.findByPk(id);
    return teamById as ITeamById;
  }
}
