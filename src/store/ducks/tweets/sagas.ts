import {call, takeLatest, put} from 'redux-saga/effects';
import {setTweets, setTweetsLoadingState, TweetsActionType} from './actionCreators';
import {TweetsApi} from '../../../services/api/tweetsApi';
import {LoadingState} from './contracts/state';


export function* fetchTweetsRequest(): any {
    try {
        const items = yield call(TweetsApi.fetchTweets)
        yield put(setTweets(items))
    } catch (e) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest)
}
