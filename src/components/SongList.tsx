import "semantic-ui-css/semantic.min.css";
import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

interface ISongListProps {
  songs: { title: string; duration: string }[];
  selectSong: CallableFunction;
}
class SongList extends React.Component<ISongListProps> {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div key={song.title} className="item">
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state: any) => {
  return {
    songs: state.songs
  };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
