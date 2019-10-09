import React from 'react'

export default function RythmPlayer(props) {
  const {rythmPlaying, start, back, forward, pause} = props
  return (
    <div id="player-container">
      <h3 className="rythm-player">Rhythm Player</h3>
      <div id="player-controls">
        <div className="row center">
          <i className="fa fa-step-backward" onClick={back} />
          <i
            className={
              rythmPlaying ? 'fa fa-pause-circle' : 'fa fa-play-circle'
            }
            onClick={rythmPlaying ? pause : start}
          />
          <i className="fa fa-step-forward" onClick={forward} />
        </div>
      </div>
    </div>
  )
}
