import React, { Component } from 'react'
import * as THREE from 'three'
import GLGradient from './gl-gradient'
import GLWave from './gl-wave'

let camera, scene, renderer, controls

export default class GLView extends Component {
  componentDidMount = () => {
    // this.view = new GLGradient()
    this.view = new GLWave()

    this.clock = new THREE.Clock()
    this.setupCamera()
    this.setupRenderer()
    this.setupScene()
    this.setupLights()
    this.animate()
  }

  setupCamera = () => {
    let { innerWidth: width, innerHeight: height } = window

    this.camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      10,
      10000
    )

    this.camera.position.z = 800
  }

  setupRenderer = () => {
    let { innerWidth: width, innerHeight: height } = window

    this.renderer = new THREE.WebGLRenderer({
      alpha: false,
      antialias: false,
      clearAlpha: 0.25,
      preserveDrawingBuffer: false
    })

    this.renderer.setClearColor(0xebebeb)
    this.renderer.setPixelRatio(Math.min(1.75, window.devicePixelRatio))
    this.renderer.setSize(width, height)
    this.refs.container.appendChild(this.renderer.domElement)
  }

  setupScene = () => {
    this.scene = new THREE.Scene()
    this.scene.add(this.view.group)
  }

  setupLights = () => {
    let aLight = new THREE.AmbientLight(0xebebeb)
    let dLight = new THREE.DirectionalLight(0x6695f7, 1, 100)
    dLight.position.set(0, 0, 100)

    this.scene.add(aLight)
    this.scene.add(dLight)
  }

  animate = () => {
    let dt = this.clock.getDelta()

    this.view.update(dt)

    requestAnimationFrame(this.animate)
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return <div id="glView" ref="container" className="slow-fade" />
  }
}
