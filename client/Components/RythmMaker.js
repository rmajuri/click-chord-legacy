import React, {Component} from 'react'

class RythmMaker extends Component {
  constructor() {
    super()
    this.state = {
      timeCount: null,
      bpm: 120
    }
    this.toggleCheckedColor = this.toggleCheckedColor.bind(this)
    this.changeTimeCount = this.changeTimeCount.bind(this)
    this.handleBpmChange = this.handleBpmChange.bind(this)
  }

  componentDidMount() {
    this.setState({timeCount: 8})
    this.props.startSequencer(8)
  }

  componentWillUnmount() {
    this.props.stopSequencer()
  }

  changeTimeCount(count) {
    if (count !== this.state.timeCount) {
      this.props.stopSequencer()
      this.setState({timeCount: count})

      this.props.startSequencer(count)
    }
  }

  toggleCheckedColor(targetedInput) {
    const clickedDrum = document.querySelector(`#${targetedInput}`)
    if (clickedDrum.className === 'drum-checkbox-clicked') {
      clickedDrum.className = 'drum-checkbox'
    } else {
      clickedDrum.className = 'drum-checkbox-clicked'
    }
  }

  handleBpmChange(event) {
    const bpm = event.target.value
    this.props.changeBpm(bpm)
    this.setState({bpm: bpm})
  }

  render() {
    const drumSteps = new Array(this.state.timeCount).fill('_')
    const kicks = drumSteps.map((step, i) => {
      return (
        <label key={'kick-label' + i} className="check-container">
          <span
            key={'kick-span' + i}
            className="drum-checkbox"
            id={'kick-span' + i}
          >
            <input
              type="checkbox"
              id={'kick' + i}
              onClick={() => this.toggleCheckedColor('kick-span' + i)}
            />
          </span>
        </label>
      )
    })
    const snares = drumSteps.map((step, i) => {
      return (
        <label key={'snare-label' + i} className="check-container">
          <span
            key={'snare-span' + i}
            className="drum-checkbox"
            id={'snare-span' + i}
          >
            <input
              type="checkbox"
              key={'snare' + i}
              id={'snare' + i}
              onClick={() => this.toggleCheckedColor('snare-span' + i)}
            />
          </span>
        </label>
      )
    })
    const hats = drumSteps.map((step, i) => {
      return (
        <label key={'hat-label' + i} className="check-container">
          <span
            key={'hat-span' + i}
            className="drum-checkbox"
            id={'hat-span' + i}
          >
            <input
              type="checkbox"
              key={'hat' + i}
              id={'hat' + i}
              onClick={() => this.toggleCheckedColor('hat-span' + i)}
            />
          </span>
        </label>
      )
    })
    const crash = drumSteps.map((step, i) => {
      return (
        <label key={'crash-label' + i} className="check-container">
          <span
            key={'crash-span' + i}
            className="drum-checkbox"
            id={'crash-span' + i}
          >
            <input
              type="checkbox"
              key={'crash' + i}
              id={'crash' + i}
              onClick={() => this.toggleCheckedColor('crash-span' + i)}
            />
          </span>
        </label>
      )
    })

    return (
      <div className="rythm-maker">
        <h3 className="rythm-player">Rhythm Maker</h3>
        <div className="time-button-container">
          <label className="bpm-label">BPM</label>
          <input
            className="bpm-input"
            onChange={() => this.handleBpmChange(event)}
            type="number"
            min="0"
            step="1"
            value={this.state.bpm}
          />
          <button
            className="time-count-button"
            onClick={() => this.changeTimeCount(8)}
          >
            4/4
          </button>
          <button
            className="time-count-button"
            onClick={() => this.changeTimeCount(6)}
          >
            6/8
          </button>
        </div>
        <div className="kick-container">
          <p className="drum-tag">Kick</p>
          {kicks}
        </div>
        <div className="snare-container">
          <p className="drum-tag">Snare</p>
          {snares}
        </div>
        <div className="hat-container">
          <p className="drum-tag">Hi-Hat</p>
          {hats}
        </div>
        <div className="crash-container">
          <p className="drum-tag">Crash</p>
          {crash}
        </div>
      </div>
    )
  }
}

export default RythmMaker
