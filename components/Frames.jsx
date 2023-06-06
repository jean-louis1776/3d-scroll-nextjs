import React from "react"

const Frames = () => {
  if (typeof window !== "undefined") {
    let zSpacing = -1000,
      lastPos = zSpacing / 5,
      $frames = document.getElementsByClassName("frame"),
      frames = Array.from($frames),
      zVals = []

    window.onscroll = function () {
      let top = document.documentElement.scrollTop,
        delta = lastPos - top

      lastPos = top

      frames.forEach(function (n, i) {
        zVals.push(i * zSpacing + zSpacing)
        zVals[i] += delta * -5.5
        let frame = frames[i],
          transform = `translateZ(${zVals[i]}px)`,
          opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frame.setAttribute(
          "style",
          `transform: ${transform}; opacity: ${opacity}`
        )
      })
    }

    window.scrollTo(0, 1)
  }

  return (
    <>
      <div className="frame transform-3d">
        <div>
          <h2>Beautiful World</h2>
        </div>
      </div>

      <div className="frame transform-3d">
        <div>
          <div className="bg-1-bg frame-media frame-left" />
        </div>
      </div>

      <div className="frame bg-frame-bg transform-3d">
        <div>
          <video
            src="./video_optimized.mp4"
            autoPlay
            loop
            muted
            className="frame-video frame-video-right"
          />
        </div>
      </div>

      <div className="frame transform-3d" />

      <div className="frame transform-3d">
        <div className="frame-text-right">
          <h3>Pure planet</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur elit adipisicing. Nemo
            fugit, rerum dolorem assumenda consequatur dicta error iure
            laboriosam temporibus.
          </p>
        </div>
      </div>

      <div className="frame bg-frame-bg transform-3d">
        <div>
          <div className="bg-2-bg frame-media frame-left" />
        </div>
      </div>

      <div className="frame transform-3d" />

      <div className="frame bg-frame-bg transform-3d">
        <div>
          <div className="bg-3-bg frame-media frame-right" />
        </div>
      </div>

      <div className="frame transform-3d" />

      <div className="frame transform-3d">
        <div className="frame-text-left">
          <h3>Ask the Mountains</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur elit. Rerum dolorem
            assumenda consequatur dicta error iure laboriosam temporibus omnis
            quae eaque aliquam esse unde accusamus dolores non soluta.
          </p>
        </div>
      </div>

      <div className="frame bg-frame-bg transform-3d">
        <div>
          <div className="bg-4-bg frame-media frame-right" />
        </div>
      </div>

      <div className="frame transform-3d">
        <div>
          <video
            src="./video_optimized.mp4"
            autoPlay
            loop
            muted
            className="frame-video frame-video-left"
          />
        </div>
      </div>

      <div className="frame transform-3d" />
      <div className="frame transform-3d" />

      <div className="frame bg-frame-bg transform-3d">
        <div>
          <div className="bg-5-bg frame-media frame-right" />
        </div>
      </div>

      <div className="frame bg-frame-bg transform-3d">
        <div>
          <video
            src="./video_optimized.mp4"
            autoPlay
            loop
            muted
            className="frame-video"
          />
        </div>
      </div>

      <div className="frame transform-3d" />

      <div className="frame transform-3d">
        <div>&copy;{new Date().getFullYear()} ILALEX & WebDesign Master</div>
      </div>
    </>
  )
}

export default Frames
