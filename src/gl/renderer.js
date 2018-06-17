import * as THREE from 'three'
import Emitter from 'event-emitter'

class Renderer extends THREE.WebGLRenderer {
  constructor(
    container,
    options = {
      alpha: false,
      antialias: false,
      clearAlpha: 0.25,
      preserveDrawingBuffer: false,
      failIfMajorPerformanceCaveat: true
    }
  ) {
    super(options)

    this.setClearColor(0xebebeb)
    this.setPixelRatio(Math.min(1.25, window.devicePixelRatio))
    this.setSize(container.offsetWidth, container.offsetHeight)

    this.domElement.style.position = 'absolute'
    this.domElement.style.top = 0
    container.appendChild(this.domElement)
  }
}

export default Renderer
