import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_TODOS, REQUEST_TODOS } from './types'

export function* sagaWatcher() {
  yield takeEvery(REQUEST_TODOS, sagaWorker)
}

function* sagaWorker () {
  const payload = yield call(fetchTodos) 
  yield put({type: FETCH_TODOS, payload})
}

async function fetchTodos () {
  const res = await fetch('/api/todos')
  return res.json()
}