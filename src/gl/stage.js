import * as THREE from 'three'
import { clone } from 'lodash'

class Stage extends THREE.Group {
  constructor(name, position) {
    super()

    this.name = name
    this.position.set(position.x, position.y, position.z)
  }

  clone() {
    return clone(this)
  }
}

export default Stage
