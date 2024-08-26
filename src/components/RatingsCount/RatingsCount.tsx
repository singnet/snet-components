import React, { FC } from "react";
import { RatingsCountProps } from "./RatingsCount.types";
import { useStyles } from "./styles";

const RatingsCount: FC<RatingsCountProps> = ({ ratingGiven, totalRating }) => {
    const classes = useStyles();
    const parseRatingGiven = () => {
        if (!ratingGiven) {
            return null;
        }
        return ratingGiven;
    };
    return (
        <span className={classes.ratedCount}>
            {parseRatingGiven()} ({totalRating ? `${totalRating}` : 0})
        </span>
    );
};

export default RatingsCount;
