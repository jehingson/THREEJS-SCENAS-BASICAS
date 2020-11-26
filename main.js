

import * as THREE from 'https://unpkg.com/three@0.123.0/build/three.js';
import { OrbitControls } from 'https://unpkg.com/three@0.123.0/examples/jsm/controls/OrbitControls.js';
// Variables Globales

let container;
let sceneWidth;
let sceneHeight;
let scene;
let renderer;
let camara;
let controls;

init();

function init() {
  createScene();
  update();
}

 
function createScene() {
  sceneWidth = window.innerWidth;
  sceneHeight = window.innerHeight;

  // Escena
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  // Render

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(sceneWidth, sceneHeight);

  // Canvas

  container = document.getElementById("container");
	container.appendChild(renderer.domElement);
	
	// Camara
	camara = new THREE.PerspectiveCamera(60, sceneWidth / sceneHeight, 1, 1000)
	camara.position.set(0, 50, 500);

	// Luces 
	var light = new THREE.DirectionalLight(0xffffff);
	ligth.position.set( 0, 0, 0 );

	controls = new OrbitControls(camara, renderer.domElement);
	controls.update();


	// Crear Cubo
	var cubeGeo = new THREE.BoxGeometry(10, 10, 10);
	var cubeMaterial = new THREE.MeshLambertMaterial({color: '0xee1122'});
	var mesh = new THREE.Mesh(cubeGeo, cubeMaterial)
	scene.add(mesh);
}

function update() {
	requestAnimationFrame(update);
	render();
}

function render() {

	controls.update();
	renderer.render(scene, camara)
}
