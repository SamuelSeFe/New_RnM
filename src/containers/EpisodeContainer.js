import React, {useState, useEffect} from "react";
import EpisodeList from "../components/EpisodeList";

const EpisodeContainer = () => {

    const [episodes, setEpisodes] = useState([]);
    const [episodesPageTwo, setEpisodesPageTwo] = useState([]);

    useEffect(() => {
        getEpisodes()
    }, []);

    useEffect(() => {
        getEpisodesPageTwo()
    }, []);


    const getEpisodes = () => {
        fetch("https://rickandmortyapi.com/api/episode")
        .then(result => result.json())
        .then(episodes => setEpisodes(episodes.results))
    };

    const getEpisodesPageTwo = () => {
        fetch("https://rickandmortyapi.com/api/episode?page=2")
        .then(result => result.json())
        .then(episodesPageTwo => setEpisodesPageTwo(episodesPageTwo.results))
    };



    return (

        <>
            <div className="main-container">
                <h2>Rick & Morty Episodes</h2>
                <EpisodeList episodes={episodes} episodesPageTwo={episodesPageTwo}/>
            </div>
        </>

    );

};

export default EpisodeContainer;