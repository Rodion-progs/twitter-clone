import {LoadingState, Tweet, TweetsState} from './contracts/state';
import {Action} from 'redux';

export enum TweetsActionType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_ADD_TWEETS = 'tweets/FETCH_ADD_TWEETS',
    ADD_TWEETS = 'tweets/ADD_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

export interface SetTweetsActionInterface extends Action<TweetsActionType>{
    type: TweetsActionType.SET_TWEETS;
    payload: TweetsState['items'];
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionType>{
    type: TweetsActionType.FETCH_ADD_TWEETS;
    payload: string;
}

export interface AddTweetActionInterface extends Action<TweetsActionType>{
    type: TweetsActionType.ADD_TWEETS;
    payload: Tweet;
}

export interface FetchTweetsActionInterface extends Action<TweetsActionType>{
    type: TweetsActionType.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionType>{
    type: TweetsActionType.SET_LOADING_STATE;
    payload: LoadingState
}


export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionType.SET_TWEETS,
    payload,
})

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
    type: TweetsActionType.FETCH_ADD_TWEETS,
    payload,
})


export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
    type: TweetsActionType.ADD_TWEETS,
    payload,
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
    type: TweetsActionType.SET_LOADING_STATE,
    payload,
})

export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionType.FETCH_TWEETS,
})

export type TweetsAction = SetTweetsActionInterface | FetchTweetsActionInterface | SetTweetsLoadingStateActionInterface;
