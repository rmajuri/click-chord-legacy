import React from 'react'

const ChangeKey = props => {
  return (
    <div className="change-key-container">
      <i className="fas fa-sort-up" onClick={() => props.changeKey('up')} />
      <h4 className="chord-text">{props.displayKey}</h4>
      <i className="fas fa-sort-down" onClick={() => props.changeKey('down')} />
    </div>
  )
}

export default ChangeKey
