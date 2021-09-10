import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {fetchTweetData, setTweetData} from "../../../store/ducks/tweet/actionCreators";
import { selectIsTweetLoading, selectTweetData } from "../../../store/ducks/tweet/selectors";
import {Tweet} from "../../../components/Tweet";
import {useHomeStyle} from "../theme";
import {CircularProgress} from "@material-ui/core";

export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyle();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetData);
    const isLoading = useSelector(selectIsTweetLoading);
    const params: {id?: string} = useParams();
    const id = params.id;
    useEffect(() => {
        if (id) {
            dispatch(fetchTweetData(id))
        }

        return () => {
            dispatch(setTweetData(undefined));
        }
    }, [dispatch, id])
    if (isLoading) {
        return (
            <div className={classes.tweetsCentered}>
                <CircularProgress />
            </div>
        );
    }

    if (tweetData) {
        return (
            <Tweet classes={classes} {...tweetData}/>
        )
    }

    return null;
}