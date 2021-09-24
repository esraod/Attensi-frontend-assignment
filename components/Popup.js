import React from 'react'
import leaderboards from '../data/leaderboards.json'

export default function Popup({ data, setPopup }) {
  if (!data) {
    return null
  }
  return (
    <>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          top: '0',
          bottom: '0',
          right: '0',
          left: '0',
          backgroundColor: 'rgba(0,0,0,0.75)',
          color: 'white',
          fontSize: '24px',
        }}
      >
        {' '}
        {data.description} <br />
        {data.supported_platforms}
        <button onClick={() => setPopup(null)}>close {data.title}</button>
        <div>
          {leaderboards
            .filter((item) => item.product_id == data.id)
            .map((leaderboard) => (
              <ul key={leaderboard.product_id}>
                {' '}
                {leaderboard.entries.map((entry) => (
                  <li key={entry.user_id}>{entry.username}</li>
                ))}{' '}
              </ul>
            ))}
        </div>
      </div>
    </>
  )
}
