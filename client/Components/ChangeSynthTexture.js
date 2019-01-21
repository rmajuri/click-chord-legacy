import React from 'react'

const ChangeSynthTexture = props => {
  const {changeTexture} = props
  return (
    <div className="change-synth-container">
      <h3 className="synth-option-head">Synth Texture</h3>
      <button
        style={{marginTop: '20px'}}
        className="synth-option"
        onClick={() => changeTexture('Synth')}
      >
        Synth
      </button>
      <button
        className="synth-option"
        onClick={() => changeTexture('DuoSynth')}
      >
        Duo Synth
      </button>
      <button className="synth-option" onClick={() => changeTexture('AMSynth')}>
        AM Synth
      </button>
      <button className="synth-option" onClick={() => changeTexture('FMSynth')}>
        FM Synth
      </button>
      <button
        className="synth-option"
        onClick={() => changeTexture('MonoSynth')}
      >
        Mono Synth
      </button>
    </div>
  )
}

export default ChangeSynthTexture
