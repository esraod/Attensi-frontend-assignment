import React from 'react'
import leaderboards from '../data/leaderboards.json'
import { useEffect } from 'react'
import Image from 'next/image'

export default function Popup({ data, setPopup }) {
  useLockBodyScroll(data)
  if (!data) {
    return null
  }
  return (
    <>
      <div className="modal">
        <div className="popup">
          <button className="close" onClick={() => setPopup(null)}>
            ✖
          </button>

          <div>
            <h3>Description: </h3>
            {data.description}
          </div>
          <div>
            <h3>Available on the following devices: </h3>
            {data.supported_platforms.join(', ')}
          </div>

          <div>
            {leaderboards
              .filter((item) => item.product_id == data.id)
              .map((leaderboard) => (
                <div className="leaderboard" key={leaderboard.product_id}>
                  <h3>Leaderboard</h3>
                  <div className="toplist">
                    {leaderboard.entries.map((entry) =>
                      entry.rank < 4 ? (
                        <>
                          <div
                            className={'rank-column rank-' + entry.rank}
                            key={entry.user_id}
                            value={entry.rank}
                          >
                            <div className="rank">{entry.rank}</div>
                            <img
                              className="avatar"
                              alt="User avatar"
                              src={entry.image}
                            />
                            <div className="username">{entry.username}</div>
                            <div className="score">{entry.score}</div>
                          </div>
                        </>
                      ) : null
                    )}
                  </div>
                  {leaderboard.entries.map((entry) =>
                    entry.rank > 3 ? (
                      <>
                        <div className="rank-row" key={entry.user_id}>
                          <div className="rank">{entry.rank}</div>
                          <img
                            className="avatar"
                            alt="User avatar"
                            src={entry.image}
                          />
                          <div className="username">{entry.username}</div>
                          <div className="score">{entry.score}</div>
                        </div>
                      </>
                    ) : null
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
function useLockBodyScroll(active) {
  useEffect(() => {
    if (!active) {
      return null
    }
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = originalStyle)
  }, [active])
}
