import * as THREE from 'three'
import './lib/css-3d-renderer'

class CSSRenderer extends THREE.CSS3DRenderer {
  constructor(container) {
    super()

    this.setSize(container.offsetWidth, container.offsetHeight)

    this.domElement.style.position = 'absolute'
    this.domElement.style.top = 0
    // debugger
    container.appendChild(this.domElement)
  }

  resize(width, height) {
    this.setSize(width, height)
  }
}

export default CSSRenderer
