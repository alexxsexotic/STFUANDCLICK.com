import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Team } from "../entity/Team";
import { User } from "../entity/User";
import Klik from "../types/Klik";

const router = Router();

router.get(
  "/leaderboard",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const teamRepository = getRepository(Team);

      const teams = await teamRepository.find({
        order: {
          clicks: "DESC",
        },
      });

      teams.forEach((team, index) => {
        team.order = index + 1;
      });
      res.status(200).send(teams);
    } catch (err) {
      console.log(err);
      res.status(403);
    }
    return;
  }
);

router.post(
  "/klik",
  async (req: Request, res: Response): Promise<Response> => {
    const { team, session }: Klik = req.body;

    if (!team && !session)
      return res.status(406).send({
        message: "Inavlid input",
      });

    try {
      const teamRepository = getRepository(Team);
      const userRepository = getRepository(User);

      let curTeam = await teamRepository.findOne({ where: { team } });
      let curUser = await userRepository.findOne({ where: { session } });

      if (!curTeam) {
        curTeam = new Team();
        curTeam.team = team;
        curTeam.clicks = 0;
      }

      if (!curUser) {
        curUser = new User();
        curUser.session = session;
        curUser.clicks = 0;
      }

      curUser.clicks += 1;
      curTeam.clicks += 1;

      await teamRepository.save(curTeam);
      await userRepository.save(curUser);

      res.status(200).send({
        team_clicks: curTeam.clicks,
        your_clicks: curUser.clicks,
      });
    } catch (err) {
      console.log(err);
      res.status(409);
    }
    return;
  }
);

export default router;
