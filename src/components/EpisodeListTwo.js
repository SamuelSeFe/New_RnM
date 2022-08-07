import React from "react";
import EpisodeDetailsTwo from "./EpisodeDetailsTwo";

const EpisodeListTwo = ({episodesPageTwo}) => {

    const episodesItemsTwo = episodesPageTwo.map((episodePageTwo, index) => {
        return <EpisodeDetailsTwo episodePageTwo={episodePageTwo} key={index} /> });

  

    return (
        <div>
            <ol start="21">
                {episodesItemsTwo}
            </ol>
        </div>
    );

};

export default EpisodeListTwo;