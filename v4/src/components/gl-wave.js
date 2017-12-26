import * as THREE from 'three'
import { radians } from '../utils/math'
import vertShader from '../shaders/wave.vs'
import fragShader from '../shaders/wave.fs'

export default class Onda {
  constructor() {
    this.group = new THREE.Group()
    this.uniforms = {
      time: {
        type: 'f',
        value: 0
      }
    }

    this.obj = this.createObj(vertShader, fragShader)
    this.obj.position.set(0, 0, 0)
    this.obj.rotation.set(radians(-90), 0, 0)

    this.group.add(this.obj)
  }

  createObj(vertexShader, fragmentShader) {
    return new THREE.Mesh(
      new THREE.PlaneBufferGeometry(1024, 1024, 32, 32),
      new THREE.RawShaderMaterial({
        uniforms: this.uniforms,
        transparent: true,
        wireframe: true,
        vertexShader,
        fragmentShader
      })
    )
  }

  update(dt) {
    this.uniforms.time.value += dt * 1.1
  }
}
