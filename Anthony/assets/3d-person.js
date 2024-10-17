// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// if (window.innerWidth > 768) {
//     window.canvas = document.getElementById('canvas');
//     window.canvas.width = innerWidth;
//     window.canvas.height = innerHeight;
//     window.iw = innerWidth;
//     window.ih = innerHeight;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(40, iw / ih);
//     const renderer = new THREE.WebGLRenderer({
//         canvas: canvas,
//         antialias: false,
//         alpha: true,
//         precision: "lowp",
//         powerPreference: "low-power"
//     });

//     renderer.setSize(iw, ih);

//     function resizeCanvas() {
//         const maxWidth = 1400;
//         const maxHeight = 1200;
//         const aspect = iw / ih;

//         if (iw > maxWidth) {
//             iw = maxWidth;
//             ih = iw / aspect;
//         }

//         if (ih > maxHeight) {
//             ih = maxHeight;
//             iw = ih * aspect;
//         }

//         camera.aspect = iw / ih;
//         camera.updateProjectionMatrix();
//         renderer.setSize(iw, ih);
//     }

//     window.addEventListener('resize', resizeCanvas);
//     resizeCanvas();

//     const topLightDesktop = new THREE.DirectionalLight(0xff670f, 5);
//     topLightDesktop.position.set(-1, 1, 1);
//     scene.add(topLightDesktop);

//     const loader = new GLTFLoader();
//     let roomModel;
//     let objectsModel;
//     let headModel;

//     let isDarkMode = false;

//     const loadedModels = {};

//     async function loadModelAsync(path) {
//         const fullPath = `public/${path}`;

//         if (loadedModels[fullPath]) {
//             const cachedModel = loadedModels[fullPath].clone();
//             return cachedModel;
//         }

//         return new Promise((resolve, reject) => {
//             loader.load(fullPath, (gltf) => {
//                 const model = gltf.scene;
//                 const scaleFactor = 0.11;
//                 model.scale.set(scaleFactor, scaleFactor, scaleFactor);
//                 loadedModels[fullPath] = model;
//                 resolve(model);
//             }, undefined, reject);
//         });
//     }

//     async function updateModels() {
//         const roomModelPath = isDarkMode ? 'room_dark.gltf' : 'room_relaxing_copy.gltf';
//         const headModelPath = 'head.gltf';
//         const objectsModelPath = isDarkMode ? 'objects_dark.gltf' : 'objects.gltf';

//         if (roomModel) {
//             scene.remove(roomModel);
//         }
//         if (objectsModel) {
//             scene.remove(objectsModel);
//         }
//         if (headModel) {
//             scene.remove(headModel);
//         }

//         try {
//             const roomModelResult = await loadModelAsync(roomModelPath);
//             const headModelResult = await loadModelAsync(headModelPath);
//             const objectsModelResult = await loadModelAsync(objectsModelPath);

//             roomModel = roomModelResult;
//             headModel = headModelResult;
//             objectsModel = objectsModelResult;

//             Load the head model
//             loader.load(`public/${headModelPath}`, (gltf) => {
//                 headModel = gltf.scene;

//                 const scaleFactor = 0.11;
//                 headModel.scale.set(scaleFactor, scaleFactor, scaleFactor);

//                 const headModelYOffset = 0.162;
//                 headModel.position.y = headModelYOffset;
//                 headModel.position.x = 0.004;
//                 headModel.position.z = 0.11;

//                 scene.add(headModel);

//                 camera.position.set(-.05, -0.8, 1.1);
//                 camera.lookAt(0, -0.02, 0);
//                 camera.fov = 40;
//                 camera.updateProjectionMatrix();

//                 let rotationX = 0.15;
//                 let rotationY = 0.1;

//                 function onMouseMove(event) {
//                     rotationY = (event.clientX / iw) * 2 - 1;
//                     rotationX = (event.clientY / ih) * 2 - 0.5;
//                     rotationX = Math.min(Math.PI / 6, rotationX);
//                 }

//                 window.addEventListener('mousemove', onMouseMove);

//                 function animate() {
//                     requestAnimationFrame(animate);
//                     rotationY = Math.min(Math.PI / 2.5, rotationY);

//                     if (headModel) {
//                         headModel.rotation.x = rotationX + 0.91;
//                         headModel.rotation.y = rotationY - 0.4;
//                     }

//                     renderer.render(scene, camera);
//                 }

//                 animate();
//             });

//             loader.load(`public/${roomModelPath}`, (gltf) => {
//                 roomModel = gltf.scene;

//                 const scaleFactor = 0.11;
//                 roomModel.scale.set(scaleFactor, scaleFactor, scaleFactor);

//                 scene.add(roomModel);

//                 let rotationX = 0.55;
//                 let rotationY = 0.1;

//                 function animate() {
//                     requestAnimationFrame(animate);
//                     rotationY = Math.max(-Math.PI / 8, Math.min(Math.PI / 5, rotationY));

//                     if (roomModel) {
//                         roomModel.rotation.x = rotationX;
//                         roomModel.rotation.y = rotationY;
//                     }

//                     renderer.render(scene, camera);
//                 }

//                 animate();
//             });

//             loader.load(`public/${objectsModelPath}`, (gltf) => {
//                 objectsModel = gltf.scene;

//                 const scaleFactor = 0.11;
//                 objectsModel.scale.set(scaleFactor, scaleFactor, scaleFactor);

//                 const initialRotationX = Math.PI / 4;
//                 const initialRotationY = 0;
//                 const initialRotationZ = 0;
//                 objectsModel.rotation.set(initialRotationX, initialRotationY, initialRotationZ);

//                 scene.add(objectsModel);

//                 function animateObjetcs() {
//                     if (objectsModel) {
//                         objectsModel.rotation.y += 0.01;
//                     }

//                     renderer.render(scene, camera);
//                     requestAnimationFrame(animateObjetcs);
//                 }

//                 animateObjetcs();
//             });
//         } catch (error) {
//             console.error("Une erreur s'est produite lors du chargement des modèles:", error);
//         }
//     }

//     function toggleDarkMode() {
//         isDarkMode = !isDarkMode;
//         updateModels();
//         if (isDarkMode) {
//             topLightDesktop.color.setHex(0x1c002d);
//             topLightDesktop.intensity = 100;
//         } else {
//             topLightDesktop.color.setHex(0xff670f);
//             topLightDesktop.intensity = 5;
//         }
//     }

//     const lighticon = document.getElementById("lighticon");
//     lighticon.addEventListener('click', toggleDarkMode);

//     updateModels();
// }
