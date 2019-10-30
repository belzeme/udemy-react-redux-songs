import React from "react";
import { connect } from "react-redux";

interface ISongDetailProps {
  selectedSong: {
    song: { title: string; duration: string };
  } | null;
}
const SongDetail = ({ selectedSong }: ISongDetailProps) => {
  if (!selectedSong) {
    return <div>Select a song</div>;
  } else {
    return (
      <div>
        <h3>Details for: </h3>
        <p>Title: {selectedSong.song.title}</p>
        <p>Duration: {selectedSong.song.duration}</p>
      </div>
    );
  }
};

const mapStateToProps = (state: any) => {
  console.log(state);

  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
