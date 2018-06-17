import * as THREE from 'three'
import gsap from 'gsap'

import Renderer from './renderer'
import CSSRenderer from './css-renderer'
import SceneWebGL from './scene-webgl'
import SceneCSS3D from './scene-css3d'
import Stage from './stage'
import Emitter from './emitter'

export default class World {
  constructor(container, children) {
    this.container = container
    this.children = children

    this.stages = [new Stage('home', new THREE.Vector3(0, 2000, 0))]

    this.css3dEnabled = true

    const width = this.container.offsetWidth
    const height = this.container.offsetHeight

    this.clock = new THREE.Clock()

    this.renderer = {
      webgl: new Renderer(this.container),
      css3d: this.css3dEnabled ? new CSSRenderer(this.container) : null
    }

    this.camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      10,
      10000
    )

    this.scene = {
      webgl: new SceneWebGL(this.renderer.webgl, this.camera),
      css3d: new SceneCSS3D(
        this.renderer.css3d,
        this.camera,
        this.stages,
        this.children
      )
    }
  }

  render() {
    let dt = this.clock.getDelta()

    this.scene.webgl.render(dt)

    if (this.css3dEnabled) {
      // this.scene.css3d.render()
    }
  }

  resize(width, height) {
    Emitter.emit('resize', width, height)
  }

  mouseMove(x, y) {
    Emitter.emit('mousemove', x, y)
  }
}
