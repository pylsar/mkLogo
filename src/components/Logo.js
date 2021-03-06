
import * as THREE from "three";
let OrbitControls = require("three-orbit-controls")(THREE);

import getText from './getText.js';
import img from '../assets/images/mk.jpg';


export default class Sketch {
  constructor(selector) {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.container = document.getElementById("container");
    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.5,
      1000
    );
    this.camera.position.set(0, 0, 10);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.time = 0;

    this.setupResize();
    this.resize();
    this.addObjects();
    this.animate();
  }

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  addObjects() {
    let TextCanvas = new getText();
    TextCanvas.draw();

    let canvasTexture = new THREE.Texture(TextCanvas.canvas);
    canvasTexture.needsUpdate = true; // без этого не рисует

    let material = new THREE.MeshBasicMaterial({
      // color: 0xff0000,
      // wireframe: true,
      // map: new THREE.TextureLoader().load('./mk.jpg')
      transparent: true,
      side: THREE.DoubleSide,
      map: canvasTexture
    });
    
    let geometry = new THREE.SphereGeometry(2, 200, 200);

    this.meshText = new THREE.Mesh(geometry, material);
    this.scene.add(this.meshText);

    let geometryCircle = new THREE.CircleGeometry(1.6, 64);
    let materialCircle = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      side: THREE.DoubleSide,
      map: new THREE.TextureLoader().load(img)
    });

    this.meshCircle = new THREE.Mesh(geometryCircle, materialCircle);
    this.scene.add(this.meshCircle);

  }

  animate() {
    this.time += 0.05;

    this.meshText.rotation.y = - this.time / 10;
    requestAnimationFrame(this.animate.bind(this));
    this.render();
  }
}
new Sketch("container");
