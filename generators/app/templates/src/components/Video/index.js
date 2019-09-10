import React from 'react';
import ReactPlayer from 'react-player';
import './styles.module.css';

/**
 * Video component
 * Adaptive video player for local files and streaming services
 * @property {string} src Source of video
 * @property {boolean} background Whether to mute, loop, and hide controls of video
 * @property {boolean|string} placeholder Placeholder for video, setting to true will auto-fetch, setting to false will eager-load video
 * @properties inherited from react-player
 */
export default function Video({
  src = '',
  background = false,
  placeholder = null,
  className,
  ...props
}) {
  return (
    <div styleName="video" className={className || ''}>
      <ReactPlayer
        url={src}
        light={placeholder}
        width="100%"
        height="100%"
        volume={1}
        loop={background}
        muted={background}
        playsinline={background}
        config={{
          youtube: {
            embedOptions: {
              autoplay: background ? 1 : 0,
              controls: background ? 0 : 1,
              disablekb: background ? 1 : 0
            }
          },
          vimeo: {
            background
          }
        }}
        {...props}
      />
    </div>
  );
}
