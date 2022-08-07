import React from "react";
import EpisodeDetails from "./EpisodeDetails";

const EpisodeList = ({episodes}) => {
    
    const episodesItems = episodes.map((episode, index) => {
        return <EpisodeDetails episode={episode} key={index} /> });

  


    return (
        <div>
            <ol>
                {episodesItems}
            </ol>
        </div>
    );

};

export default EpisodeList;