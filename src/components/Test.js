
import * as THREE from "three";
let OrbitControls = require("three-orbit-controls")(THREE);

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
    var w = window.innerWidth;
    var h = window.innerHeight;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  addObjects() {
    let material = new THREE.MeshBasicMaterial({
      color: "0xff0000",
      wireframe: true
    });
    let geometry = new THREE.SphereGeometry(2, 20, 20);

    let mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);
  }

  animate() {
    this.time += 0.05;

    requestAnimationFrame(this.animate.bind(this));
    this.render();
  }
}
new Sketch("container");
