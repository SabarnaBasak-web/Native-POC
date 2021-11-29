import {call, put, take, takeEvery} from 'redux-saga/effects';
import {FETCH_BLOG, FETCH_BLOG_SUCCESS, FETCH_BLOG_FAIL} from '../types/Types';

const delay = ms => new Promise(res => setTimeout(res, ms));

async function getBlogData() {
  try {
    const response = await fetch(
      'https://618b530f3013680017344020.mockapi.io/blogs/Posts',
    );
    if (response.status !== 200) {
      return {status: 0, message: 'Something went wrong!!'};
    } else {
      const data = await response.json();
      return {status: 1, users: data};
    }
  } catch (error) {
    console.log('Error occured ', error.message);
  }
}

function* fetchBlogs() {
  const result = yield call(getBlogData);
  if (result.status === 1) {
    yield put({type: FETCH_BLOG_SUCCESS, user: result.users});
  } else {
    yield put({type: FETCH_BLOG_FAIL, user: result.message});
  }
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield takeEvery(FETCH_BLOG, fetchBlogs);
}
