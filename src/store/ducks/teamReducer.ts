import { createActions, createReducer } from 'reduxsauce';
import { TeamsState } from './types';
import { Team } from '../../interfaces/index';

const initialState: TeamsState = {
  teamList: [],
  userTeam: {} as Team,
  isLoading: false,
};

const { Types, Creators } = createActions({
  getTeamsList: null,
  successGetTeamsList: ['teamList'],
  getUserTeam: ['userId'],
  successGetUserTeam: ['userTeam'],
  successCreateTeam: ['userTeam'],
  createTeam:['body']
});

const teams = createReducer(initialState, {
  [Types.GET_TEAMS_LIST]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [Types.SUCCESS_GET_TEAMS_LIST]: (state, { teamList }) => ({
    ...state,
    teamList,
    isLoading: false,
  }),
  [Types.GET_USER_TEAM]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [Types.SUCCESS_GET_USER_TEAM]: (state, { userTeam }) => ({
    ...state,
    userTeam,
    isLoading: false,
  }),
  [Types.CREATE_TEAM]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [Types.SUCCESS_CREATE_TEAM]: (state, { userTeam }) => ({
    ...state,
    userTeam,
    isLoading: false,
  }),
});

export const TeamsTypes = Types;
export const TeamsActions = Creators;
export default teams;
