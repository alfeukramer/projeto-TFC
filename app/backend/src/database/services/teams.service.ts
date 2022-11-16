import Teams from '../models/teams.model';

export default class TeamsService {
  public teamsModel = Teams;

  async getTeams(): Promise<any> {
    const team = await this.teamsModel.findAll();
    return team;
  }
}
