import React from "react";
import SongList from "./SongList";
import { connect } from "react-redux";
import CardContent from "./cardContent";
const SongApp = (props) => {
  return (
    <>
      <div className="mainBox">
        <h1>Hello Redux hey</h1>
        <div className="contentBox">
          <CardContent>
            <SongList />
          </CardContent>
          <CardContent>
            <p>
              {props.selectedSong.title} {props.selectedSong.duration}
            </p>
          </CardContent>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return { selectedSong: state.selectedSong };
};
export default connect(mapStateToProps)(SongApp);
