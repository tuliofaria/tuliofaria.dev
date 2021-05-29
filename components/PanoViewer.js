import React, { useEffect, useRef } from 'react'
import { Viewer } from 'photo-sphere-viewer'

const PanoViewer = () => {
  const viewerRef = useRef()
  useEffect(() => {
    const viewer = new Viewer({
      navbar: ['autorotate', 'zoom', 'caption', 'fullscreen'],
      container: viewerRef.current,
      panorama: '/images/pano.jpg',
    })
    return () => {
      viewer.destroy()
    }
  }, [])
  return (
    <div className='shadow-xl'>
      <div
        ref={viewerRef}
        className='rounded-lg'
        style={{ height: 480, overflow: 'hidden' }}
      ></div>
    </div>
  )
}
export default PanoViewer
