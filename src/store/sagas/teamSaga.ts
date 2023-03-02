import { all, call, put,takeLatest } from 'redux-saga/effects';
import { TeamsActions, TeamsTypes } from '../ducks/teamReducer';
import { create, findUserTeam, getAllTeams } from '../services/teamService';

function* getTeamsList() {
  try {
    const response = yield call(getAllTeams);
    const teamList = response.data;
    yield put(TeamsActions.successGetTeamsList(teamList));
  } catch (error) {
    console.error(error);
  }
}

function* getUserTeam({userId}) {
  try {
    const response = yield call(findUserTeam, userId);
    const team = response.data;
    yield put(TeamsActions.successGetUserTeam(team));
  } catch (error) {
    console.error(error);
  }
}

function* createTeam({body}) {
  try {
    console.log(body)
    const response = yield call(create, body);
    const team = response.data;
    yield put(TeamsActions.successCreateTeam(team));
  } catch (error) {
    console.error(error);
  }
}

export default function* teamsSaga() {
  return yield all([
    takeLatest(TeamsTypes.GET_TEAMS_LIST, getTeamsList),
    takeLatest(TeamsTypes.GET_USER_TEAM, getUserTeam),
    takeLatest(TeamsTypes.CREATE_TEAM, createTeam),
  ]);
}
