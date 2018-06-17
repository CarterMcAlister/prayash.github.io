import * as THREE from 'three'
import Stage from './stage'

class SceneCSS3D extends THREE.Scene {
  constructor(renderer, camera, container, stages) {
    super()

    this.renderer = renderer
    this.camera = camera
    this.container = container
    this.stages = stages

    this.createScene()
  }

  createScene() {
    this.stages.forEach((s, i) => {
      const stage = s.clone()
      const obj = new THREE.CSS3DObject(this.container)
      // obj.position.z = 0; // move a little in front
      stage.add(obj)
      this.add(stage)
    })
  }

  render() {
    this.renderer.render(this, this.camera)
  }
}

export default SceneCSS3D
