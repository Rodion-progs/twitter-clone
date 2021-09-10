import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './rootReducer';
import {tweetsSaga} from './ducks/tweets/sagas';
import {TweetsState} from './ducks/tweets/contracts/state';
import {TagsState} from './ducks/tags/contracts/state';
import {tagsSaga} from './ducks/tags/sagas';
import {TweetState} from "./ducks/tweet/contracts/state";
import {tweetSaga} from "./ducks/tweet/sagas";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const sagaMiddleware = createSagaMiddleware();

export interface RootState {
    tags: TagsState;
    tweets: TweetsState;
    tweet: TweetState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(tweetsSaga)
sagaMiddleware.run(tagsSaga)
sagaMiddleware.run(tweetSaga)
