import { Team } from "../../interfaces";

export interface TeamsState {
    teamList: Array<Team>;
    isLoading: boolean;
    userTeam: Team
  }
  