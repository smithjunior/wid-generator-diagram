'use strict'

const screen = document.querySelector('#wid-diagram')

// const camera = new THREE.PerspectiveCamera(200, 735 / 508, 0.8, 10000)
const camera = new THREE.OrthographicCamera(735 / -4.5, 735 / 4.5, 508 / 4.5, 508 / -4.5, 0.2, 1000)

const scene = new THREE.Scene()

const WID3Delements = {
  wipp: {
    value: 4.1
  },
  stt: {
    value: 4.0
  },
  utt: {
    value: 3.25
  },
  ust: {
    value: 1.3
  },
  ist: {
    value: 1.0
  },
  setup: {
    value: 1.0
  }
}

renderScreen()

function renderScreen() {
  const renderer = new THREE.WebGLRenderer({
    antialias: true
  })

  renderer.setClearColor(0xefefef, 1)

  configureCubeGeometries()

  camera.lookAt(scene.position)

  renderer.gammaFactor = 2.2
  renderer.gammaOutput = true

  renderer.setSize(735, 508)

  screen.appendChild(renderer.domElement)

  renderer.render(scene, camera)
}
/**
 * 
 * @param {*} rectWidth 
 * @param {*} rectDepth 
 * @param {*} rectHeight 
 * @param {*} positionY 
 * @param {*} color 
 */
function createCubeGeometry(rectWidth, rectDepth, rectHeight, positionY = -55, color = 0x0000FF) {
  const cube = new THREE.Mesh(
    new THREE.CubeGeometry(rectWidth, rectDepth, rectHeight),
    new THREE.MeshBasicMaterial({
      color: color,
      wireframe: false
    })
  )

  cube.position.z = -45
  cube.position.x = 0
  cube.position.y = positionY
  cube.rotation.x += 30
  cube.rotation.z -= 7
  cube.rotation.Y -= 90
  cube.add(getWireframe(cube))
  return cube
}
/**
 * 
 * @param {*} cube 
 */
function getWireframe(cube) {
  const lineMat = new THREE.LineBasicMaterial({
    color: 0x000000,
    linewidth: 1
  })

  const edgesGeo = new THREE.EdgesGeometry(cube.geometry)

  const wireframe = new THREE.LineSegments(edgesGeo, lineMat)

  wireframe.renderOrder = 1
  return wireframe
}

function configureCubeGeometries() {
  const defaultPixels = 25.0
  const rectWidth = WID3Delements.wipp.value * defaultPixels
  const istHeight = WID3Delements.ist.value * defaultPixels
  const setupDepth = WID3Delements.setup.value * defaultPixels

  const istCube = createCubeGeometry(rectWidth, setupDepth, istHeight, -50)
  scene.add(istCube)

  const ustHeight = (WID3Delements.ust.value * defaultPixels)
  const ustHeightCalculated = ustHeight - istHeight
  let lastPosition = getLastYPosition() + istHeight - ustHeightCalculated - 5

  const ustCube = createCubeGeometry(rectWidth, setupDepth, ustHeightCalculated, lastPosition, 0xFFFF00)
  scene.add(ustCube)

  const uttHeight = (WID3Delements.utt.value * defaultPixels)
  const uttHeightCalculated = uttHeight - ustHeight
  lastPosition += ustHeightCalculated

  const uttCube = createCubeGeometry(rectWidth, setupDepth, uttHeightCalculated, lastPosition, 0xFFFFFF)
  scene.add(uttCube)

  const sttHeight = (WID3Delements.stt.value * defaultPixels)
  const sttHeightCalculated = sttHeight - uttHeight
  lastPosition += uttHeightCalculated - sttHeightCalculated
  const sttCube = createCubeGeometry(rectWidth, setupDepth, sttHeightCalculated, lastPosition, 0xFF00FF)
  scene.add(sttCube)

}

function getLastYPosition() {

  let lastYPosition = -99999;
  const childrenLength = scene.children.length;
  if (childrenLength) {
    for (var i = 0; i < childrenLength; i++) {
      if (lastYPosition < scene.children[i].position.y) {
        lastYPosition = scene.children[i].position.y
      }
    }
  }
  return lastYPosition
}
