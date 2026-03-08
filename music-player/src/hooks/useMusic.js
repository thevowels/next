import { useState } from "react";


const songs = [
    {
        id: 1,
        title: "Breathing",
        artist: "EchoBr",
        url: "/songs/Breaching.wav",
        duration: "3:45"
    },
    {
        id: 2,
        title: "Dusk",
        artist: "EchoBr",
        url: "/songs/Dusk.wav",
        duration: "4:20"
    }
]
export const useMusic = () => {
    const [allSongs, setAllSongs] = useState(songs);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const handlePlaySong = (song, index) => {
        setCurrentTrack(song);
        setCurrentTrackIndex(index);
    }
    return {allSongs};
}