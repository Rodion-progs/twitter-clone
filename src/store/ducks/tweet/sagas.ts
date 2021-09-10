import {call, takeEvery, put} from 'redux-saga/effects';
import {setTweetData, setTweetLoadingState} from './actionCreators';
import {TweetsApi} from '../../../services/api/tweetsApi';
import {LoadingState} from './contracts/state';
import {FetchTweetDataActionInterface, TweetActionType} from "./contracts/actionTypes";


export function* fetchTweetsRequest({ payload: TweetId  }: FetchTweetDataActionInterface): any {
    try {
        const data = yield call(TweetsApi.fetchTweetData, TweetId)
        yield put(setTweetData(data[0]))
    } catch (e) {
        yield put(setTweetLoadingState(LoadingState.ERROR))
    }
}

export function* tweetSaga() {
    yield takeEvery(TweetActionType.FETCH_TWEET_DATA, fetchTweetsRequest)
}
