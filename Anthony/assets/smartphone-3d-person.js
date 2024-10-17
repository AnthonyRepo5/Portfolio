// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// if (window.innerWidth <= 768) {
//     const canvasMobile = document.getElementById('canvas');
//     canvasMobile.width = innerWidth;
//     canvasMobile.height = innerHeight;
//     const iwMobile = canvasMobile.width;
//     const ihMobile = canvasMobile.height;

//     const sceneMobile = new THREE.Scene();
//     const cameraMobile = new THREE.PerspectiveCamera(50, iwMobile / ihMobile);

//     const rendererMobile = new THREE.WebGLRenderer(
//         {
//             canvas: canvasMobile,
//             antialias: false,
//             alpha: true,
//             precision: "lowp",
//             powerPreference: "low-power"
//         }
//     );

//     rendererMobile.setSize(iwMobile, ihMobile);

//     const loaderMobile = new GLTFLoader();
//     let roomMobile;
//     let objectsMobile;

//     const scaleFactorMobile = 0.085;

//     // Create a directional light
//     const topLightMobile = new THREE.DirectionalLight(0xff670f, 5);
//     topLightMobile.position.set(-1, 1, 1);
//     sceneMobile.add(topLightMobile);

//     let darkModeMobile = false;
//     let animateModel2IdMobile;

//     function loadModelMobile(modelName1, modelName2) {
//         if (roomMobile) {
//             sceneMobile.remove(roomMobile);
//         }

//         if (objectsMobile) {
//             sceneMobile.remove(objectsMobile);
//         }

//         loaderMobile.load(`public/${modelName1}`, (gltf) => {
//             roomMobile = gltf.scene;
//             roomMobile.scale.set(scaleFactorMobile, scaleFactorMobile, scaleFactorMobile);
//             sceneMobile.add(roomMobile);
//             cameraMobile.position.set(-0.3, 0, 1.6);
//             cameraMobile.lookAt(0, 0, 0);
//             cameraMobile.fov = 50;
//             cameraMobile.updateProjectionMatrix();
//         });

//         loaderMobile.load(`public/${modelName2}`, (gltf) => {
//             objectsMobile = gltf.scene;
//             objectsMobile.scale.set(scaleFactorMobile, scaleFactorMobile, scaleFactorMobile);
//             sceneMobile.add(objectsMobile);
//             cameraMobile.position.set(-0.3, 0, 1.6);
//             cameraMobile.lookAt(0, 0, 0);
//             cameraMobile.fov = 50;
//             cameraMobile.updateProjectionMatrix();

//             if (darkModeMobile) {
//                 topLightMobile.color.setHex(0x1c002d);
//                 topLightMobile.intensity = 100;
//             } else {
//                 topLightMobile.color.setHex(0xff670f);
//                 topLightMobile.intensity = 5;
//             }

//             // Restart the animation for model 2
//             if (animateModel2IdMobile) {
//                 cancelAnimationFrame(animateModel2IdMobile);
//             }

//             animateModel2Mobile();
//         });
//     }

//     function toggleDarkModeMobile() {
//         darkModeMobile = !darkModeMobile;

//         if (darkModeMobile) {
//             topLightMobile.color.setHex(0x1c002d);
//             topLightMobile.intensity = 100;
//             loadModelMobile('smartphone_room_dark.gltf', 'objects_dark.gltf');
//         } else {
//             topLightMobile.color.setHex(0xff670f);
//             topLightMobile.intensity = 5;
//             loadModelMobile('smartphone_room.gltf', 'objects.gltf');
//         }
//     }

//     lighticon.addEventListener('click', toggleDarkModeMobile);

//     loadModelMobile('smartphone_room.gltf', 'objects.gltf');

//     function animateMobile() {
//         requestAnimationFrame(animateMobile);
//         rendererMobile.render(sceneMobile, cameraMobile);
//     }

//     function animateModel2Mobile() {
//         if (objectsMobile) {
//             objectsMobile.rotation.y += 0.01;
//         }

//         rendererMobile.render(sceneMobile, cameraMobile);
//         animateModel2IdMobile = requestAnimationFrame(animateModel2Mobile);
//     }

//     animateMobile();


//     const maxZoomFactor = 1.3; // Échelle maximale de zoom
//     let zoomFactor = 1; // Échelle actuelle du modèle
    
//     // Écouteur d'événement pour le défilement de la fenêtre
//     window.onscroll = function () {
//         // Calculez le zoom en fonction de la position de la fenêtre
//         zoomFactor = 1 + window.scrollY * 0.001; // Vous pouvez ajuster ce facteur selon vos préférences
    
//         // Limitez le zoom au facteur maxZoomFactor
//         if (zoomFactor > maxZoomFactor) {
//             zoomFactor = maxZoomFactor;
//         } else if (zoomFactor < 1) {
//             zoomFactor = 1;
//         }
    
//         // Appliquez l'échelle au modèle
//         roomMobile.scale.set(scaleFactorMobile * zoomFactor, scaleFactorMobile * zoomFactor, scaleFactorMobile * zoomFactor);
//         objectsMobile.scale.set(scaleFactorMobile * zoomFactor, scaleFactorMobile * zoomFactor, scaleFactorMobile * zoomFactor);
    
//         // Mettez à jour la projection de la caméra
//         cameraMobile.updateProjectionMatrix();
//     };
    
// }