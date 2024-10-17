// script pour le dark mode
let avatar = document.querySelector("#avatar");
const mapImage = document.querySelector('#google-map-image');
let primaryColor = "#030050";
let secondaryColor = "#fff";
let isDarkThemeBody = document.getElementsByTagName("body")[0];



//BACKGROUND
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/build/three.module.js';



// Couleur des points par défaut
let pointsColor = new THREE.Color(0x470072);

const canvasbg = document.getElementById('background');
canvasbg.width = innerWidth;
canvasbg.height = innerHeight;
const iw = innerWidth;
const ih = innerHeight;

const scenebg = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, iw / ih);

const geometrybg = computeGeometry();
const materialbg = new THREE.PointsMaterial({ size: 0.008, vertexColors: true });
const meshbg = new THREE.Points(geometrybg, materialbg);

const backgroundColor = new THREE.Color(0x4169E1);
scenebg.background = backgroundColor;



// Fonction pour basculer le thème
let isDarkTheme = false;
const lighticon = document.querySelector("#lighticon");

lighticon.onclick = function () {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        lighticon.src = "./public/images/sun.png";
        avatar.src = "./public/images/avatar-white.png";
        mapImage.src = "./public/images/dark_map.jpg"
        primaryColor = "#fff";
        secondaryColor = "#030050";
        isDarkThemeBody.classList = "dark-theme";
        pointsColor.set(0xffc069);
        backgroundColor.set(0x6700a7);
    } else {
        lighticon.src = "./public/images/moon.png";
        avatar.src = "./public/images/avatar-hover.png";
        mapImage.src = "./public/images/light_map.jpg"
        primaryColor = "#030050";
        secondaryColor = "#fff";
        isDarkThemeBody.classList = "light-theme";
        pointsColor.set(0x470072);
        backgroundColor.set(0xff7715);
    }
    scenebg.background = backgroundColor;
};


scenebg.add(meshbg);

camera.position.set(0, 1, 2);
camera.lookAt(0, -0.5, 0);

const rendererbg = new THREE.WebGLRenderer(
        {
            canvas: canvasbg,
            antialias: false,
            alpha: true,
            precision: "lowp",
            powerPreference: "low-power"
        }
    );

const clock = new THREE.Clock();
let t = 0;


function loop() {
    t += clock.getDelta();
    animateGeometry(geometrybg, t);
    meshbg.rotation.y = 0.1 * t;
    rendererbg.render(scenebg, camera);
    requestAnimationFrame(loop);
}

function computeGeometry() {
    const space = 3, nb = 210, amp = 0.25, fre = 1, pi2 = Math.PI * 2;

    const geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(nb * nb * 3);
    const colors = new Float32Array(nb * nb * 3);

    let k = 0;
    for (let i = 0; i < nb; i++) {
        for (let j = 0; j < nb; j++) {
            const x = i * (space / nb) - space / 2;
            const z = j * (space / nb) - space / 2;
            const y = amp * (Math.cos(x * pi2 * fre) +  Math.sin(z * pi2 * fre));
            positions[3 * k + 0] = x;
            positions[3 * k + 1] = y;
            positions[3 * k + 2] = z;
            
            // Utilisation de la couleur violet
            colors[3 * k + 0] = pointsColor.r;
            colors[3 * k + 1] = pointsColor.g;
            colors[3 * k + 2] = pointsColor.b;
            k++;
        }
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.computeBoundingBox();
    return geometry;
}


function animateGeometry(geometry, progress) {
    const space = 3, nb = 210, amp = 0.25, pi2 = Math.PI * 2;
    const fre = 0.8 + Math.cos(progress) / 2;
    const phase = progress;
    

    let k = 0;
    for (let i = 0; i < nb; i++) {
        for (let j = 0; j < nb; j++) {
            const x = i * (space / nb) - space / 2;
            const z = j * (space / nb) - space / 2;
            const y = amp * (Math.cos(x * pi2 * fre) +  Math.sin(z * pi2 * fre + phase));
            geometry.attributes.position.setY(k, y);

            // Utilisation de la couleur violet
            geometry.attributes.color.setX(k, pointsColor.r);
            geometry.attributes.color.setZ(k, pointsColor.b);
            k++;
        }
    }
    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.color.needsUpdate = true;
}

loop();







// SIDE BAR POUR DESKTOP
if (window.innerWidth > 768) {

    //long text break
    const longText = document.getElementsByClassName('long-text');
    for (let i = 0; i < longText.length; i++) {
        longText[i].innerHTML = longText[i].innerHTML.replace(/<br>/g, ' ');
    }
    



    // SIDE-BAR
    const sectionPropos = document.querySelector('#propos');
    const sectionCompetences = document.querySelector('#competences');
    const sectionExperiences = document.querySelector('#experiences');
    const sectionFormations = document.querySelector('#formations');
    const sectionprojets = document.querySelector('#projets');
    const sectionContact = document.querySelector('#contact');

    const sideBar = document.querySelector('.side-bar');


    const propos = document.querySelector('#side-bar-propos');
    const competences = document.querySelector('#side-bar-competences');
    const experiences = document.querySelector('#side-bar-experiences');
    const formations = document.querySelector('#side-bar-formations');
    const projets = document.querySelector('#side-bar-projets');
    const contact = document.querySelector('#side-bar-contact');



    function checkScrollPosition() {
        const scrollPosition = window.scrollY;

        const triggerPosition = 200;
        
        if (scrollPosition <= triggerPosition) {
            sideBar.classList.remove('show');
        } else {
            sideBar.classList.add('show');
        }
    }

    window.addEventListener('scroll', checkScrollPosition);




    // SELECTION BOULLE
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top > 0 &&
            rect.left >= 0 &&
            rect.bottom < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function scrollElementSelected(sectionElement, element) {
        if (isElementInViewport(sectionElement)) {
            element.style.color =  secondaryColor;
            element.style.background = primaryColor;
        } else {
            element.style.color = '#';
            element.style.background = '';
        }
    }

    window.addEventListener('scroll', () => {
        scrollElementSelected(sectionPropos, propos);
        scrollElementSelected(sectionCompetences, competences);
        scrollElementSelected(sectionExperiences, experiences);
        scrollElementSelected(sectionFormations, formations);
        scrollElementSelected(sectionprojets, projets); 
        scrollElementSelected(sectionContact, contact);
    });




    // SELECTION COULEUR REVERSIBLE AVEC SCROLLING
    function scrollElement(sectionElement, element) {
        const scrollPosition = window.scrollY;

        const sectionPosition = sectionElement.getBoundingClientRect().bottom + scrollPosition;

        const triggerPosition = sectionPosition - window.innerHeight;

        if (scrollPosition >= triggerPosition) {
            element.style.color = secondaryColor;
            element.style.background = primaryColor;
        } else {
            element.style.color = '';
            element.style.background = '#';
        }
    }

    window.addEventListener('scroll', () => {
        scrollElement(sectionPropos, propos);
        scrollElement(sectionCompetences, competences);
        scrollElement(sectionExperiences, experiences);
        scrollElement(sectionFormations, formations);
        scrollElement(sectionprojets, projets); 
        scrollElement(sectionContact, contact);
    });





    // SELECTION COULEUR LIGNE REVERSIBLE AVEC SCROLLING
    const sectionElements = [
        sectionPropos,
        sectionCompetences,
        sectionExperiences,
        sectionFormations,
        sectionprojets,
        sectionContact
    ];

    const lineElements = document.querySelectorAll('.vertical-line');

    function updateLineHeight() {
        sectionElements.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.bottom + 100 <= windowHeight) {
                const lineHeight = ((windowHeight - rect.bottom + 500) / windowHeight) * 100 + '%';
                
                for (let i = index; i < lineElements.length; i++) {
                    lineElements[index].style.height = lineHeight;
                }
            } else {
                for (let i = index; i < lineElements.length; i++) {
                    lineElements[index].style.height = '0';
                }
            }
        });
    }

    window.addEventListener('scroll', updateLineHeight);

    updateLineHeight();


} else if











// NAV BAR POUR SMARTPHONE

(window.innerWidth <= 768) {
    const script2 = document.createElement('script');
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    document.body.appendChild(script2);



    const sectionProposPhone = document.querySelector('#propos');
    const sectionCoordonneesPhone = document.querySelector('#coordonnees');
    const sectionCompetencesPhone = document.querySelector('#competences');
    const sectionLanguagePhone = document.querySelector('#language');
    const sectionExperiencesPhone = document.querySelector('#experiences');
    const sectionFormationsPhone = document.querySelector('#formations');
    const sectionprojetsPhone = document.querySelector('#projets');
    const sectionContactPhone = document.querySelector('#contact');
    
    const sideBarSmartphone = document.querySelector('#smartphone-bar');

    const proposSmartphone = document.querySelector('#smartphone-bar-propos');
    const coordonneesSmartphone = document.querySelector('#smartphone-bar-coordonnees');
    const competencesSmartphone = document.querySelector('#smartphone-bar-competences');
    const languageSmartphone = document.querySelector('#smartphone-bar-language');
    const experiencesSmartphone = document.querySelector('#smartphone-bar-experiences');
    const formationsSmartphone = document.querySelector('#smartphone-bar-formations');
    const projetsSmartphone = document.querySelector('#smartphone-bar-projets');
    const contactSmartphone = document.querySelector('#smartphone-bar-contact');

    const scrollTop = document.getElementById('scroll-top');
    
    

    function checkScrollPositionSmartphone() {
        const nav = document.querySelector('nav');
        nav.style.height = '0px';


        const scrollPosition = window.scrollY;
    
        const triggerPosition = 150;
    
        if (scrollPosition <= triggerPosition) {
            sideBarSmartphone.classList.remove('show');
            scrollTop.classList.remove('show');
        } else {
            sideBarSmartphone.classList.add('show');
            scrollTop.classList.add('show');
        }

        // Prolongation de la barre de navigation en height
        const triggerPosition2 = 100;

        if (scrollPosition <= triggerPosition2) {
            nav.style.height = '0px';
            nav.style.transition = 'height 0.15s ease-in-out';
        } else {
            nav.style.height = '35px';
            nav.style.transition = 'height 0.15s ease-in-out';
        }
    }
    
    window.addEventListener('scroll', checkScrollPositionSmartphone);
    




    // SELECTION BOULLE BACKGROUND COLORE AVEC SCROLLING
    function isElementInViewportSmartphone(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
        if (el === sectionCoordonneesPhone) {
            const offset = 100; // Ajustez le décalage ici (par exemple, 200 pixels)
            return (
                rect.top > + offset &&
                rect.left >= 0 &&
                rect.bottom < windowHeight &&
                rect.right <= windowWidth
            );
        } else if (el === sectionCompetencesPhone) {
            const offset = 100; // Ajustez le décalage ici (par exemple, 200 pixels)
            return (
                rect.top > - offset &&
                rect.left >= 0 &&
                rect.bottom < windowHeight &&
                rect.right <= windowWidth
            );
        } else if (el === sectionExperiencesPhone) {
            const offset = 600; // Ajustez le décalage ici (par exemple, 200 pixels)
            return (
                rect.top > - offset &&
                rect.left >= 0 &&
                rect.bottom < windowHeight &&
                rect.right <= windowWidth
            );
        } else if (el === sectionFormationsPhone) {
            const offset = 700; // Ajustez le décalage ici (par exemple, 200 pixels)
            return (
                rect.top > - offset &&
                rect.left >= 0 &&
                rect.bottom < windowHeight &&
                rect.right <= windowWidth
            );
        } else if (el === sectionLanguagePhone) {
            const offset = 500; // Ajustez le décalage ici (par exemple, 200 pixels)
            return (
                rect.top > - offset &&
                rect.left >= 0 &&
                rect.bottom < windowHeight &&
                rect.right <= windowWidth
            );
        } else if (el === sectionprojetsPhone) {
            const offset = 400; // Ajustez le décalage ici (par exemple, 200 pixels)
            return (
                rect.top > - offset &&
                rect.left >= 0 &&
                rect.bottom < windowHeight &&
                rect.right <= windowWidth
            );
        } else {
            return (
                rect.top > +100 &&
                rect.left >= 0 &&
                rect.bottom < windowHeight &&
                rect.right <= windowWidth
            );
        }
    }
    
    function scrollElementSelectedSmartphone(sectionElement, element) {
        if (isElementInViewportSmartphone(sectionElement)) {
            element.style.color = secondaryColor;
            element.style.background = primaryColor;
        } else {
            element.style.color = '';
            element.style.background = '';
        }
    }
    
    window.addEventListener('scroll', () => {
        scrollElementSelectedSmartphone(sectionProposPhone, proposSmartphone);
        scrollElementSelectedSmartphone(sectionCoordonneesPhone, coordonneesSmartphone);
        scrollElementSelectedSmartphone(sectionCompetencesPhone, competencesSmartphone);
        scrollElementSelectedSmartphone(sectionLanguagePhone, languageSmartphone);
        scrollElementSelectedSmartphone(sectionExperiencesPhone, experiencesSmartphone);
        scrollElementSelectedSmartphone(sectionFormationsPhone, formationsSmartphone);
        scrollElementSelectedSmartphone(sectionprojetsPhone, projetsSmartphone);
        scrollElementSelectedSmartphone(sectionContactPhone, contactSmartphone);
    });
    
    





    function scrollElementSmartphone(sectionElement, element) {
        const scrollPosition = window.scrollY;
    
        const sectionPosition = sectionElement.getBoundingClientRect().bottom + scrollPosition;
    
        let triggerPosition = sectionPosition - window.innerHeight;
    
        if (sectionElement === sectionCoordonneesPhone) {
            triggerPosition += 100; // Ajoutez le décalage ici (par exemple, 200 pixels) uniquement pour sectionProposPhone
        } else if (sectionElement === sectionCompetencesPhone) {
            triggerPosition -= 100; // Ajoutez le décalage ici (par exemple, 200 pixels) uniquement pour sectionCompetencesPhone
        } else if (sectionElement === sectionExperiencesPhone) {
            triggerPosition -= 600; // Ajoutez le décalage ici (par exemple, 200 pixels) uniquement pour sectionExperiencesPhone
        } else if (sectionElement === sectionFormationsPhone) {
            triggerPosition -= 700; // Ajoutez le décalage ici (par exemple, 200 pixels) uniquement pour sectionFormationsPhone
        } else if (sectionElement === sectionprojetsPhone) {
            triggerPosition -= 400; // Ajoutez le décalage ici (par exemple, 200 pixels) uniquement pour sectionprojetsPhone
        } else if (sectionElement === sectionContactPhone) {
            triggerPosition -= 500; // Ajoutez le décalage ici (par exemple, 200 pixels) uniquement pour sectionContactPhone
        }

    
        if (scrollPosition >= triggerPosition + 100) {
            element.style.color = secondaryColor;
            element.style.background = primaryColor;
        } else {
            element.style.color = '';
            element.style.background = '';
        }
    }
    
    window.addEventListener('scroll', () => {
        scrollElementSmartphone(sectionProposPhone, proposSmartphone);
        scrollElementSmartphone(sectionCoordonneesPhone, coordonneesSmartphone);
        scrollElementSmartphone(sectionCompetencesPhone, competencesSmartphone);
        scrollElementSmartphone(sectionLanguagePhone, languageSmartphone);
        scrollElementSmartphone(sectionExperiencesPhone, experiencesSmartphone);
        scrollElementSmartphone(sectionFormationsPhone, formationsSmartphone);
        scrollElementSmartphone(sectionprojetsPhone, projetsSmartphone);
        scrollElementSmartphone(sectionContactPhone, contactSmartphone);
    });
    



// PROGRESSION BARRE DE NAVIGATION
// Sélectionnez toutes les sections et les lignes de progression
const sectionElementsPhone = [
    sectionProposPhone,
    sectionCoordonneesPhone,
    sectionCompetencesPhone,
    sectionLanguagePhone,
    sectionExperiencesPhone,
    sectionFormationsPhone,
    sectionprojetsPhone,
    sectionContactPhone
];


const horizontalLine = document.querySelectorAll('.horizontal-line');

const delay = -400; // Ajustez cette valeur selon vos besoins

// Fonction pour mettre à jour la largeur des lignes de progression
function updateLineProgressSmartphone() {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    let previousSectionVisible = false;

    sectionElementsPhone.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollPosition;
        const sectionHeight = rect.height;

        // Calcul de la position de la ligne
        let linePosition = 0;

        if (scrollPosition + windowHeight >= sectionTop + sectionHeight / 2 - delay) {
            linePosition = 100;
        } else if (scrollPosition + windowHeight >= sectionTop - delay) {
            linePosition = ((scrollPosition + windowHeight - sectionTop + delay) / (sectionHeight / 2)) * 100;
        }

        // Mettre à jour la largeur de la ligne
        for (let i = index; i < horizontalLine.length; i++) {
            horizontalLine[index].style.width = linePosition + '%';
        }

        // Mettre en arrière-plan la ligne précédente
        if (previousSectionVisible) {
            for (let i = index + 1; i < horizontalLine.length; i++) {
                horizontalLine[index - 1].style.zIndex = '1';
                horizontalLine[index].style.zIndex = '2';
            }
        }

        if (linePosition > 0) {
            previousSectionVisible = true;
        }
    });
}

// Mettez à jour les lignes de progression lorsque la page est chargée et lors du défilement
window.addEventListener('load', updateLineProgressSmartphone);
window.addEventListener('scroll', updateLineProgressSmartphone);

// Éventuellement, vous pouvez également appeler updateLineProgressSmartphone lorsque la fenêtre est redimensionnée pour une mise à jour précise
window.addEventListener('resize', updateLineProgressSmartphone);



    
    


// SCROLLING  HORISONTALE DE LA NAV BAR SMARTPHONE AVEC LE SCROLLING
const navBar = document.getElementById('nav-bar-scroll');
const scrollSpeed = 0.23; // Ajustez cette valeur pour contrôler la vitesse.
let direction = 0;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY - 180; // Ajoutez le décalage initial de 160 pixels
    const targetX = scrollPosition * scrollSpeed * direction;
    const diff = (targetX - navBar.scrollLeft);
    navBar.scrollLeft += diff;

  // Mise à jour de la direction en fonction du défilement
    direction = scrollPosition > 0 ? 1 : -1;
});

}
