import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Closer",
      duration: "4.50",
    },
    {
      title: "Dance Monkey",
      duration: "2.50",
    },
    {
      title: "hey Boy",
      duration: "3.50",
    },
    {
      title: "Glass",
      duration: "1.50",
    },
  ];
};

const selectedSongReducer = (
  selectedSong = { title: null, duration: null },
  action
) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
