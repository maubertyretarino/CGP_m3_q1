import * as THREE from './three.module.js'
import { FontLoader } from './FontLoader.js';
import { TextGeometry } from './TextGeometry.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(68, window.innerWidth/ window.innerHeight, 0.1, 1000); 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
let textMesh = new THREE.Mesh();

lighting();
text();
sceneObjects();

//Entertainment room 

function sceneObjects () {
//floor
const floorTexture = new THREE.TextureLoader().load('assets/textures/concreteFloor.jpg');
const floorMaterial = new THREE.MeshPhongMaterial({ map: floorTexture });
const floorGeometry = new THREE.BoxGeometry(400,1,550);
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor);

  floor.position.y = -20
  floor.position.x = -50
  floor.position.z = -3
  floor.rotation.y = 5


//wall
const wall1Texture = new THREE.TextureLoader().load('assets/textures/wall1.jpg');
const wall1Material = new THREE.MeshBasicMaterial( {map: wall1Texture, color: "#FFFFFF"} );
const wall1Geometry = new THREE.BoxGeometry( 1, 110, 115);
const wall1 = new THREE.Mesh(wall1Geometry, wall1Material);
scene.add(wall1);

  wall1.position.y = 50
  wall1.position.x = 95
  wall1.position.z = -6
  wall1.rotation.y = 9.5


//wall2
const wall2Texture = new THREE.TextureLoader().load('assets/textures/wall1.jpg');
const wall2Material = new THREE.MeshBasicMaterial( {map: wall2Texture, color: "#FFFFFF"} );
const wall2Geometry = new THREE.BoxGeometry(380, 1, 320);
const wall2 = new THREE.Mesh(wall2Geometry, wall2Material);
scene.add(wall2);

  wall2.position.y = 2
  wall2.position.x = 50
  wall2.position.z = -170
  wall2.rotation.y = 7.9
  wall2.rotation.x = 9
  wall2.rotation.z =2


//digital panel
const panelTexture = new THREE.TextureLoader().load('assets/textures/panel.png');
const panelMaterial = new THREE.MeshBasicMaterial({ map: panelTexture });
const panelGeometry = new THREE.BoxGeometry(7, 0.5, 30);
const panelMesh = new THREE.Mesh(panelGeometry, panelMaterial,);
scene.add(panelMesh);

  panelMesh.material.transparent = true;
  panelMesh.material.opacity = 1; 
  panelMesh.position.y = 38
  panelMesh.position.x = 0
  panelMesh.position.z = -20
  panelMesh.rotation.y = 7.9
  panelMesh.rotation.x = 9
  panelMesh.rotation.z =2



const panelBorderTexture = new THREE.TextureLoader().load('assets/textures/greyPanel.jpg');
const panelBorderMaterial = new THREE.MeshBasicMaterial({ map: panelBorderTexture });
const panelBorderGeometry = new THREE.BoxGeometry(8, 0.5, 31);
const panelBorderMesh = new THREE.Mesh(panelBorderGeometry, panelBorderMaterial,);
scene.add(panelBorderMesh);


  panelBorderMesh.material.transparent = true;
  panelBorderMesh.material.opacity = 1; 
  panelBorderMesh.position.y = 38.2
  panelBorderMesh.position.x = 0
  panelBorderMesh.position.z = -20.5
  panelBorderMesh.rotation.y = 7.9
  panelBorderMesh.rotation.x = 9
  panelBorderMesh.rotation.z =2


//tv
const tvTexture = new THREE.TextureLoader().load('assets/textures/screen2.png');
const tvMaterial = new THREE.MeshBasicMaterial({ map: tvTexture, color: "#FFFFFF"});
const tvGeometry = new THREE.BoxGeometry(17, 1, 35);
const tvMesh = new THREE.Mesh(tvGeometry, tvMaterial,);
scene.add(tvMesh);

  tvMesh.material.transparent = true;
  tvMesh.material.opacity = 1; 
  tvMesh.position.y = 22
  tvMesh.position.x = 1
  tvMesh.position.z = -20
  tvMesh.rotation.y = 7.9
  tvMesh.rotation.x = 9
  tvMesh.rotation.z =2



const tvBorderGeometry = new THREE.BoxGeometry(19, 1, 37);
const tvBorderMaterial = new THREE.MeshBasicMaterial( {color: "black"} );
const tvBorder = new THREE.Mesh(tvBorderGeometry, tvBorderMaterial);
scene.add(tvBorder);

  tvBorder.material.transparent = true;
  tvBorder.material.opacity = 1; 
  tvBorder.position.y = 22
  tvBorder.position.x = 1
  tvBorder.position.z = -21
  tvBorder.rotation.y = 7.9
  tvBorder.rotation.x = 9
  tvBorder.rotation.z =2


//speakers
//speaker1
const speaker1Texture = new THREE.TextureLoader().load('assets/textures/speaker2.jpg');
const speaker1Material = new THREE.MeshBasicMaterial({ map: speaker1Texture });
const speaker1Geometry = new THREE.BoxGeometry(17, 1, 10);
const speaker1 = new THREE.Mesh(speaker1Geometry, speaker1Material);
scene.add(speaker1);


  speaker1.position.y = 23
  speaker1.position.x = 27
  speaker1.position.z = -20
  speaker1.rotation.y = 7.9
  speaker1.rotation.x = 9
  speaker1.rotation.z =2

const speaker1Head1Texture = new THREE.TextureLoader().load('assets/textures/speakerHead.png');
const speaker1Head1Material = new THREE.MeshBasicMaterial({ map: speaker1Head1Texture });
const speakerHead1Geometry = new THREE.BoxGeometry(6, 1, 6);
const speaker1Head1 = new THREE.Mesh(speakerHead1Geometry, speaker1Head1Material);
scene.add(speaker1Head1);

  speaker1Head1.material.transparent = true;
  speaker1Head1.material.opacity = 1; 
  speaker1Head1.position.y = 27
  speaker1Head1.position.x = 26.5
  speaker1Head1.position.z = -19
  speaker1Head1.rotation.y = 7.9
  speaker1Head1.rotation.x = 9
  speaker1Head1.rotation.z =2

const speaker1Head2Texture = new THREE.TextureLoader().load('assets/textures/speakerHead.png');
const speaker1Head2Material = new THREE.MeshBasicMaterial({ map: speaker1Head2Texture });
const speaker1Head2Geometry = new THREE.BoxGeometry(6, 1, 6);
const speaker1Head2 = new THREE.Mesh(speaker1Head2Geometry, speaker1Head2Material);
scene.add(speaker1Head2);

  speaker1Head2.material.transparent = true;
  speaker1Head2.material.opacity = 1; 
  speaker1Head2.position.y = 19
  speaker1Head2.position.x = 26.5
  speaker1Head2.position.z = -19
  speaker1Head2.rotation.y = 7.9
  speaker1Head2.rotation.x = 9
  speaker1Head2.rotation.z =2

//speaker2

const speaker2Texture = new THREE.TextureLoader().load('assets/textures/speaker2.jpg');
const speaker2Material = new THREE.MeshBasicMaterial({ map: speaker2Texture });
const speaker2Geometry = new THREE.BoxGeometry(17, 1, 8);
const speaker2 = new THREE.Mesh(speaker2Geometry, speaker2Material);
scene.add(speaker2);


  speaker2.position.y = 21.2
  speaker2.position.x = -23
  speaker2.position.z = -19
  speaker2.rotation.y = 7.9
  speaker2.rotation.x = 9
  speaker2.rotation.z =2

const speaker2Head1Texture = new THREE.TextureLoader().load('assets/textures/speakerHead.png');
const speaker2Head1Material = new THREE.MeshBasicMaterial({ map: speaker2Head1Texture });
const speaker2Head1Geometry = new THREE.BoxGeometry(5, 1, 5);
const speaker2Head1 = new THREE.Mesh(speaker2Head1Geometry, speaker2Head1Material);
scene.add(speaker2Head1);

  speaker2Head1.material.transparent = true;
  speaker2Head1.material.opacity = 1; 
  speaker2Head1.position.y = 25
  speaker2Head1.position.x = -22.5
  speaker2Head1.position.z = -17
  speaker2Head1.rotation.y = 7.9
  speaker2Head1.rotation.x = 9
  speaker2Head1.rotation.z =2


const speaker2Head2Texture = new THREE.TextureLoader().load('assets/textures/speakerHead.png');
const speaker2Head2Material = new THREE.MeshBasicMaterial({ map: speaker2Head2Texture });
const speaker2Head2Geometry = new THREE.BoxGeometry(5, 1, 5);
const speaker2Head2 = new THREE.Mesh(speaker2Head2Geometry, speaker2Head2Material);
scene.add(speaker2Head2);

  speaker2Head2.material.transparent = true;
  speaker2Head2.material.opacity = 1; 
  speaker2Head2.position.y = 17
  speaker2Head2.position.x = -22.5
  speaker2Head2.position.z = -17
  speaker2Head2.rotation.y = 7.9
  speaker2Head2.rotation.x = 9
  speaker2Head2.rotation.z =2


//soundbar
const soundBarTexture = new THREE.TextureLoader().load('assets/textures/speaker2.jpg');
const soundBarMaterial = new THREE.MeshBasicMaterial({ map: soundBarTexture});
const soundBarGeometry = new THREE.BoxGeometry(1, 5, 35);
const soundBar = new THREE.Mesh(soundBarGeometry, soundBarMaterial,);
scene.add(soundBar);

  soundBar.position.y = 10
  soundBar.position.x = -1
  soundBar.position.z = -1
  soundBar.rotation.y = 7.9
  soundBar.rotation.x = 9
  soundBar.rotation.z =2


//floor light
const floorLight1Texture = new THREE.TextureLoader().load('assets/textures/light.jpg');
const floorLight1Material = new THREE.MeshBasicMaterial({ map: floorLight1Texture});
const floorLight1Geometry = new THREE.BoxGeometry(4, 1, 2);
const floorLight1 = new THREE.Mesh(floorLight1Geometry, floorLight1Material,);
scene.add(floorLight1);

  floorLight1.position.y = 6
  floorLight1.position.x = 31
  floorLight1.position.z = -1
  floorLight1.rotation.y = 7.9
  floorLight1.rotation.x = 9
  floorLight1.rotation.z =2


const floorLight2Texture = new THREE.TextureLoader().load('assets/textures/light2.jpg');
const floorLight2Material = new THREE.MeshBasicMaterial({ map: floorLight2Texture});
const floorLight2Geometry = new THREE.BoxGeometry(4, 1, 2);
const floorLight2 = new THREE.Mesh(floorLight2Geometry, floorLight2Material,);
scene.add(floorLight2);

  floorLight2.position.y = 6
  floorLight2.position.x = 31
  floorLight2.position.z = 30
  floorLight2.rotation.y = 7.9
  floorLight2.rotation.x = 9
  floorLight2.rotation.z =2


//glass desk
const glassDeskTexture = new THREE.TextureLoader().load('assets/textures/glass.jpg');
const glassDeskMaterial = new THREE.MeshBasicMaterial( {map: glassDeskTexture, color: "#FFFFFF"} );
const glassDeskGeometry = new THREE.BoxGeometry( 50, 0.5, 50);
const glassDesk = new THREE.Mesh(glassDeskGeometry, glassDeskMaterial);
scene.add(glassDesk);

  glassDesk.position.y = 10
  glassDesk.position.x = 80
  glassDesk.position.z = -3
  glassDesk.rotation.y = -58


//window
const window1Texture = new THREE.TextureLoader().load('assets/textures/glass.jpg');
const window1Material = new THREE.MeshBasicMaterial( {map: window1Texture, color: "#FFFFFF"} );
const window1Geometry = new THREE.BoxGeometry( 1, 20, 50);
const window1 = new THREE.Mesh(window1Geometry, window1Material);
scene.add(window1);

  window1.material.transparent = true;
  window1.material.opacity = 0.9; 
  window1.position.y = 30
  window1.position.x = 75
  window1.position.z = -5


//diamond
const highlightGeometry = new THREE.OctahedronGeometry( 1, 0  );
const highlightMaterial = new THREE.MeshNormalMaterial ;
const highlight = new THREE.Mesh( highlightGeometry, highlightMaterial );
scene.add( highlight );

  highlight.position.y = 6
  highlight.position.x = 22
  highlight.position.z = 22

}

function text () {
  const texture = new THREE.TextureLoader().load("../assets/textures/glass.jpg");


  const loader = new FontLoader();
  loader.load( '../assets/fonts/BallianPhil_Regular.json', function ( font ) 
  {
     const textGeometry = new TextGeometry( 'M', {
      font: font,
      size: 1,
      height: 1,
      
    } );
  
    const textMaterial = new THREE.MeshBasicMaterial({ map: texture, });
    textMesh = new THREE.Mesh( textGeometry, textMaterial );
  
    textMesh.castShadow= true;
    textMesh.position.y= 11;
    textMesh.position.x=  22;
    textMesh.position.z=  22;
    
  
    scene.add(textMesh);
  
  } );

}

function lighting() {

  const light1 = new THREE.PointLight( 0xff0000, 1, 200 );
  light1.position.set( 130, 10, -1 );
  scene.add( light1 );

  const light2 = new THREE.PointLight( 0xffff00, 3, 2 );
  light2.position.set( 4, 30, 20 );
  scene.add( light2 );

  const spotLight = new THREE.SpotLight
  (0xffff00, 0.4, 30, -0.4, 0.5, 0);

  spotLight.position.set( 240,30,-220 );
  spotLight.rotation.set( 40,0,0 );
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.set(100,100);
  scene.add(spotLight);

  const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
  scene.add( directionalLight );






}

function animate() {
  requestAnimationFrame(animate);
  //rotation
  textMesh.rotation.y += 0.2;

  //camera
  camera.position.z= 40;
  camera.position.x= -7;
  camera.position.y= 10;
  camera.rotation.y= -0.5;
  renderer.render(scene, camera);
  }

animate();
