import React from "react";
import { connect } from "react-redux";
import { selectSong } from "./actions";

const SongList = (props) => {
  return (
    <ul>
      {props.songs.map((value, key) => (
        <li key={key}>
          <p> {value.title}</p>

          <button
            onClick={() => {
              props.selectSong(value);
            }}
          >
            Select
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
