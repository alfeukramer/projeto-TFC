import * as express from 'express';
import 'express-async-errors';
import loginRouter from './database/routes/login.router';
import genericErrorMiddleware from './database/middlerawes/genericErrorMiddleware';
import teamRouter from './database/routes/team.routes';
import matchesRouter from './database/routes/matches.router';
import leaderboardRouter from './database/routes/leaderboard.routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
    this.routes();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private routes(): void {
    this.app.use('/', loginRouter);
    this.app.use('/', teamRouter);
    this.app.use('/', matchesRouter);
    this.app.use('/', leaderboardRouter);
    this.app.use(genericErrorMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
