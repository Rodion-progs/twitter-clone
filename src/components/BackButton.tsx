import React from 'react';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {IconButton} from "@material-ui/core";
import {useHistory} from "react-router";

export const BackButton: React.FC = (): React.ReactElement => {
    const history = useHistory();
    const handleClickButton = () => {
        history.goBack();
    }
    return (
        <IconButton onClick={handleClickButton} style={{ marginRight: 15 }} color='primary'>
            <ArrowBackIcon />
        </IconButton>
    )

}