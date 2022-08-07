import React from "react";

const EpisodeDetails = ({episode}) => {

    return (
        <div>
            <li>
                <h3>{episode.name}</h3>
            </li>
        </div>
    )
};

export default EpisodeDetails;