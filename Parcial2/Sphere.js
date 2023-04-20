var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene();

//Camara
var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;
camera.rotation.set(0, -0.5, 0);
scene.add(camera);

//Orbit Controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);

/*Parametros :
  r          = radio
  Sx, Sy, Sz = Escalado   en x, y, z respectivamente
  Rx, Ry, Rz = Rotación   en x, y, z respectivamente
  Tx, Ty, Tz = Traslacion en x, y, z respectivamente
*/
r = 1;

Sx = 0.5;
Sy = 0.5;
Sz = 3;

Rx = -0.785398; //-45 grados en radianes
Ry = 0.785398;  // 45 grados en radianes
Rz = 0;

Tx = 0;
Ty = 0;
Tz = r * Sz;    //Radio por la escala en z

//Elementos Esfera
esfera = [];
material = [];
color = [];

//Elementos Juntos
color[0] = {color:0xECEDB4};
var geometry = new THREE.SphereGeometry([r, r, r][1, 1, 1]);
material.push(new THREE.MeshStandardMaterial(color[0]));
esfera[0] = new THREE.Mesh(geometry, material[0]);

//Transformaciones
Escala(Sx, Sy, Sz);
Rotacion(Rx, Ry, Rz);
Traslacion(Tx, Ty, Tz);

//Objeto en Escena
scene.add(esfera[0]);

//Luz
const light1 = new THREE.DirectionalLight(0xffffff, 1);
light1.position.set(-1, 2, 4);
scene.add(light1);

//Flechas y Rejilla Plano
const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);
const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

//Renderizado
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
