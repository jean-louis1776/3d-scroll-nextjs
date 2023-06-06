import React, { useRef, useState } from "react"

const Sound = () => {
  const [isPaused, setIsPaused] = useState(true)
  const [playing, setPlaying] = useState(false)
  const audioPlayer = useRef()

  const play = () => {
    setPlaying(true)
    setIsPaused(false)
    audioPlayer.current.play()
  }

  const stop = () => {
    setIsPaused(true)
    audioPlayer.current.pause()
    audioPlayer.current.currentTime = 0
  }

  const onPlaying = () => {
    if (audioPlayer.current.paused) setPlaying(false)
  }

  if (typeof window !== "undefined") {
    const soundButton = document.querySelector(".soundbutton")

    window.onfocus = function () {
      soundButton.classList.contains("paused")
        ? audioPlayer.current.pause()
        : audioPlayer.current.play()
    }

    window.onblur = function () {
      audioPlayer.current.pause()
    }
  }

  return (
    <>
      <button
        className={`soundbutton ${isPaused ? "paused" : null}`}
        onClick={!playing ? play : stop}>
        <img src="./sound.gif" alt="Sound Button" />
      </button>
      <audio
        src="./ambient.mp3"
        loop
        ref={audioPlayer}
        onTimeUpdate={onPlaying}
      />
    </>
  )
}

export default Sound
