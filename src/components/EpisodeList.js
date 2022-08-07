import React from "react";
import EpisodeDetails from "./EpisodeDetails";
import EpisodeDetailsTwo from "./EpisodeDetailsTwo";

const EpisodeList = ({episodes, episodesPageTwo}) => {
    
    const episodesItems = episodes.map((episode, index) => {
        return <EpisodeDetails episode={episode} key={index} /> });

    const episodesItemsTwo = episodesPageTwo.map((episodePageTwo, index) => {
        return <EpisodeDetailsTwo episodePageTwo={episodePageTwo} key={index} /> });



    return (
        <div>
            <ol>
                {episodesItems}
                {episodesItemsTwo}
            </ol>
        </div>
    );

};

export default EpisodeList;