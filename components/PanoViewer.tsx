import React, { useEffect, useRef } from 'react'
import { Viewer } from '@photo-sphere-viewer/core'
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin'

const PanoViewer = () => {
  const viewerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!viewerRef.current) return
    const viewer = new Viewer({
      navbar: ['autorotate', 'zoom', 'caption', 'fullscreen'],
      container: viewerRef.current,
      panorama: '/images/pano.jpg',
      plugins: [AutorotatePlugin],
    })
    return () => {
      viewer.destroy()
    }
  }, [])
  return (
    <div
      ref={viewerRef}
      style={{
        height: 480,
        overflow: 'hidden',
        borderRadius: 'var(--radius-md)',
        border: 'var(--hairline)',
      }}
    ></div>
  )
}
export default PanoViewer
