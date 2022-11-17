import { NextFunction, Request, Response } from 'express';
import Matches from '../models/matches.model';

const verifyId = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;

  const homeTeamVerify = await Matches.findOne({ where: { id: homeTeam } });
  const awayTeamVerify = await Matches.findOne({ where: { id: awayTeam } });

  if (!homeTeamVerify || !awayTeamVerify) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  next();
};

export default verifyId;
