import "semantic-ui-css/semantic.min.css";
import React from "react";
import { connect } from "react-redux";

interface ISongListProps {
  songs: { title: string; duration: string }[];
}
class SongList extends React.Component<ISongListProps> {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div key={song.title} className="item">
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="contentn">{song.title}</div>
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

export default connect(mapStateToProps)(SongList);
