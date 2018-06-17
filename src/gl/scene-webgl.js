import * as THREE from 'three'
import GLWave from '../components/gl-wave'

class SceneWebGL extends THREE.Scene {
  constructor(renderer, camera) {
    super()

    this.renderer = renderer
    this.camera = camera
    this.wave = new GLWave()

    this.createScene()
  }

  createScene() {
    this.add(this.wave)

    let aLight = new THREE.AmbientLight(0xebebeb)
    let dLight = new THREE.DirectionalLight(0x6695f7, 1, 100)
    dLight.position.set(0, 0, 100)

    this.add(aLight)
    this.add(dLight)
  }

  render(dt) {
    this.wave.update(dt)
    this.renderer.render(this, this.camera)
  }
}

export default SceneWebGL
