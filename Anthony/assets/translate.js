let language = document.getElementById('change-language');
let changeLanguageIcon = document.querySelector('.change-language-icon');

let lang = document.getElementById('lang'); // En haut du html

let titrePropos = document.getElementById('titre-propos');
let titreCompetences = document.getElementById('titre-competences');
let titreExperiences = document.getElementById('titre-experiences');
let titreFormations = document.getElementById('titre-formations');
let titreProjets = document.getElementById('titre-projets');
let titreContact = document.getElementById('titre-contact');

let smartphoneBarPropos = document.getElementById('smartphone-bar-propos');
let smartphoneBarCoordonnees = document.getElementById('smartphone-bar-coordonnees');
let smartphoneBarCompetences = document.getElementById('smartphone-bar-competences');
let smartphoneBarLanguage = document.getElementById('smartphone-bar-language');
let smartphoneBarExperiences = document.getElementById('smartphone-bar-experiences');
let smartphoneBarFormations = document.getElementById('smartphone-bar-formations');
let smartphoneBarProjets = document.getElementById('smartphone-bar-projets');
let smartphoneBarContact = document.getElementById('smartphone-bar-contact');

let sideBarPropos = document.getElementById('side-bar-propos');
let sideBarCompetences = document.getElementById('side-bar-competences');
let sideBarExperiences = document.getElementById('side-bar-experiences');
let sideBarFormations = document.getElementById('side-bar-formations');
let sideBarProjets = document.getElementById('side-bar-projets');
let sideBarContact = document.getElementById('side-bar-contact');

let jobTitle = document.querySelector('.job-title');
let downloadButton = document.querySelector('.downloadbutton');
let hireButton = document.querySelector('.hirebutton');

let titreSectionPropos = document.querySelector('.titreSectionPropos');
let bio = document.querySelector('.bio');

let titreSectionCoordonnees = document.querySelector('.titreSectionCoordonnées');
let coordonneesPhone = document.getElementById('coordonneesPhone');
let coordonneesAdresse = document.getElementById('coordonneesAdresse');

let titreSectionCompétences = document.querySelector('.titreSectionCompétences');
let comp1 = document.querySelector('.comp1');
let comp2 = document.querySelector('.comp2');
let comp3 = document.querySelector('.comp3');
let comp4 = document.querySelector('.comp4');
let comp5 = document.querySelector('.comp5');
let comp6 = document.querySelector('.comp6');
let comp7 = document.querySelector('.comp7');
let comp8 = document.querySelector('.comp8');
let comp9 = document.querySelector('.comp8');
let comp10 = document.querySelector('.comp8');
let comp11 = document.querySelector('.comp8');


let titreSectionLanguages = document.querySelector('.titreSectionLanguages');

let titreSectionExperiences = document.querySelector('.titreSectionExperiences');
let job1 = document.querySelector('.job1');
let job2 = document.querySelector('.job2');
let job3 = document.querySelector('.job3');
let job4 = document.querySelector('.job4');
let job5 = document.querySelector('.job5');
let descr1 = document.querySelector('.descr1');
let descr2 = document.querySelector('.descr2');
let descr3 = document.querySelector('.descr3');
let descr4 = document.querySelector('.descr4');
let descr5 = document.querySelector('.descr5');

let titreSectionFormations = document.querySelector('.titreSectionFormations');
let formation1 = document.querySelector('.formation1');
let formation2 = document.querySelector('.formation2');
let formation3 = document.querySelector('.formation3');
let formation4 = document.querySelector('.formation4');
let formationDescr1 = document.querySelector('.formationDescr1');
let formationDescr2 = document.querySelector('.formationDescr2');
let formationDescr3 = document.querySelector('.formationDescr3');
let formationDescr4 = document.querySelector('.formationDescr4');

let titresSectionProjets = document.querySelectorAll('.titreSectionProjets');

// let projectDescription1 = document.querySelector('.projectDescription1');
let projectDescription2 = document.querySelector('.projectDescription2');
let projectDescription3 = document.querySelector('.projectDescription3');
let projectDescription4 = document.querySelector('.projectDescription4');
let projectDescription5 = document.querySelector('.projectDescription5');
let projectDescription6 = document.querySelector('.projectDescription6');

let projectButtons = document.querySelectorAll('.projectButton');

let titreSectionContact = document.querySelector('.titreSectionContact');
let nom = document.getElementById('nom');
let email = document.getElementById('email-input');
let message = document.getElementById('message');
let contactButton = document.querySelector('.contactButton');





if (window.innerWidth <= 768) {
    job1.innerHTML = "Auto-entreprise";
    job3.innerHTML = "";
    job4.innerHTML = "Stage Développeur Full-Stack";
    job5.innerHTML = "";
} else {
    job1.innerHTML = "Auto-entreprise";
    job3.innerHTML = "";
    job4.innerHTML = "Stage Développeur Full-Stack";
    job5.innerHTML = "";
}

if (window.innerWidth <= 768) {
    formation1.innerHTML = "Développeur<br>Full-Stack";
} else {
    formation1.innerHTML = "Développeur Full-Stack";
}




language.addEventListener('click', () => {
    if (lang.lang === 'en') {
        lang.removeAttribute('lang');
        lang.lang = 'fr';

        changeLanguageIcon.innerHTML = '<i class="fa-solid fa-language"></i>fr';

        titrePropos.innerText = "À Propos";
        titreCompetences.innerText = "Compétences";
        titreExperiences.innerText = "Expériences";
        titreFormations.innerText = "Formations";
        titreProjets.innerText = "Projets";
        titreContact.innerText = "Contacte-moi";
    
        smartphoneBarPropos.innerText = "À Propos";
        smartphoneBarCoordonnees.innerText = "Coordonnées";
        smartphoneBarCompetences.innerText = "Compétences";
        smartphoneBarLanguage.innerText = "Langues";
        smartphoneBarExperiences.innerText = "Expériences";
        smartphoneBarFormations.innerText = "Formations";
        smartphoneBarProjets.innerText = "Projets";
        smartphoneBarContact.innerText = "Contacte-moi";

        sideBarPropos.innerText = "À Propos";
        sideBarCompetences.innerText = "Compétences";
        sideBarExperiences.innerText = "Expériences";
        sideBarFormations.innerText = "Formations";
        sideBarProjets.innerText = "Projets";
        sideBarContact.innerText = "Contacte-moi";

        jobTitle.innerText = "Développeur Full-Stack";
        downloadButton.innerHTML = '<i class="fa fa-arrow-circle-down" aria-hidden="true"></i>Télécharger CV';
        hireButton.innerHTML = '<i class="fa fa-user" aria-hidden="true"></i>Recrute-moi';
    
        titreSectionPropos.innerText = "_À Propos";
        bio.innerText = "Un développeur junior curieux, créatif et rigoureux, qui, après avoir développé des compétences en conception et en méthodologies agiles lors de ses expériences professionnelles passées, a fait du développement une passion dans sa nouvelle vie. Cela me permet d'exprimer ma créativité et ma technicité, tout en résolvant des problèmes de manière efficace et innovante, comme le montrent mon portfolio et les projets qu'il contient.";
    
        titreSectionCoordonnees.innerText = "_Coordonnées";
        coordonneesPhone.innerText = "Téléphone";
        coordonneesAdresse.innerText = "Localisation";
    
        titreSectionCompétences.innerText = "_Mes Compétences";
        comp1.innerHTML = "Développer le front-End";
        comp2.innerHTML = "Développer le back-End";
        comp3.innerHTML = "Programmation Orientée Objet";
        comp4.innerHTML = "Conception de base de données (Merise)";
        comp5.innerHTML = "Méthodologie SCRUM<";
        comp6.innerHTML = "Esprit analytique";
        comp7.innerHTML = "Travail d'équipe";
        comp8.innerHTML = "Analyse des besoins et problématiques";
        comp9.innerHTML = "Architecture MVC (Model View Controller)";
        comp10.innerHTML = "Conception de solutions";
        comp11.innerHTML = "Développement d'applications";
    
        titreSectionLanguages.innerText = "_Langages";

        titreSectionExperiences.innerText = "_Mes Expériences";

        if (window.innerWidth <= 768) {
            job1.innerHTML = "";
            job3.innerHTML = "";
            job4.innerHTML = "Développeur<br>Full-Stack";
            job5.innerHTML = "Développeur<br>Front-End";
        } else {
            job1.innerHTML = "";
            job3.innerHTML = "";
            job4.innerHTML = "Développeur Full-Stack";
            job5.innerHTML = "Développeur Front-End";
        }
        job2.innerHTML = "E-Commerce";


        descr1.innerText = "";
        descr2.innerText = "";
        descr3.innerText = "";
        descr4.innerText = "Développeur Symfony/Twig au sein d'une équipe de 4, utilisant SCRUM pour créer une app full-stack client/admin pour réparateurs d’électroniques. Permettant la création/gestion de devis et de stocks.";
        descr5.innerText = "";

        titreSectionFormations.innerText = "_Mes Formations";

        if (window.innerWidth <= 768) {
            formation1.innerHTML = "Développeur<br>Full-Stack";
        } else {
            formation1.innerHTML = "Développeur Full-Stack";
        }
        formation2.innerText = "";
        formation3.innerText = "";
        formation4.innerText = "";

        formationDescr1.innerText = "";
        formationDescr2.innerText = "";
        formationDescr3.innerText = "";
        formationDescr4.innerText = "";

        titresSectionProjets.forEach(titre => {
            titre.innerText = "_Projets";
        });

        // projectDescription1.innerText = "J'ai développé un site web dédié aux barbiers, offrant aux clients la possibilité de réserver facilement leurs rendez-vous en ligne. Cette plateforme simplifie la planification des visites tout en renforçant la présence en ligne des professionnels.";    
        projectDescription2.innerText = "J'ai conçu une application de gestion de films simplifiée, permettant de créer, modifier et supprimer des fiches de films. Les données des films, y compris les genres et les acteurs, sont stockées localement dans le navigateur, offrant une expérience simple pour gérer sa propre bibliothèque de films.";
        projectDescription3.innerText = "J'ai développé une application de conversion polyvalente qui permet de passer facilement d'un système numérique à un autre, y compris binaire, décimal, octal et hexadécimal. Cette application intuitive simplifie la conversion des nombres, quels que soient les formats, offrant une expérience utilisateur fluide et pratique.";
        projectDescription4.innerText = "Mon projet récent est une application météo détaillée couvrant 5 jours, avec des données sur la qualité de l'air et d'autres informations pertinentes, grâce à une API. Ce projet s'inspire d'un tutoriel YouTube.";    
        projectDescription5.innerText = "J'ai imaginé et conçu une application de gestion de comptes bancaires, incluant la création, la simulation de transactions et la manipulation des comptes, ainsi que la conception de la maquette et de l'expérience utilisateur. Le back-end agit comme une API, créant des comptes avec de la POO et des héritages de classes, à travers des requêtes HTTP. Le front-end communique avec cette API pour offrir une interface interactive, permettant la visualisation et la gestion des comptes bancaires.";
        projectDescription6.innerText = "En tant que développeur Symfony/Twig au sein d'une équipe de 4 personnes, nous avons utilisé la méthode agile SCRUM pour concevoir une application full-stack client/administrateur destinée aux réparateurs d'électronique. Cette application permettait la création et la gestion complète des devis et des stocks, offrant ainsi une solution complète aux professionnels du secteur.";

        projectButtons.forEach(button => {
            button.innerText = "Voir";
        });

        titreSectionContact.innerText = "_Contacte-moi!";
        nom.placeholder = "Saisissez votre nom";
        email.placeholder = "Saisissez votre email";
        message.placeholder = "Saisissez votre message";
        contactButton.innerHTML = 'Envoyer<i class="fa fa-paper-plane" aria-hidden="true"></i>';

    } else if (lang.lang === 'fr') {
        lang.removeAttribute('lang');
        lang.lang = 'en';

        changeLanguageIcon.innerHTML = '<i class="fa-solid fa-language"></i>en';
        
        titrePropos.innerText = "About";
        titreCompetences.innerText = "Skills";
        titreExperiences.innerText = "Experiences";
        titreFormations.innerText = "Education";
        titreProjets.innerText = "Projects";
        titreContact.innerText = "Contact Me";
    
        smartphoneBarPropos.innerText = "About";
        smartphoneBarCoordonnees.innerText = "Contact Info";
        smartphoneBarCompetences.innerText = "Skills";
        smartphoneBarLanguage.innerText = "Languages";
        smartphoneBarExperiences.innerText = "Experiences";
        smartphoneBarFormations.innerText = "Education";
        smartphoneBarProjets.innerText = "Projects";
        smartphoneBarContact.innerText = "Contact Me";

        sideBarPropos.innerText = "About";
        sideBarCompetences.innerText = "Skills";
        sideBarExperiences.innerText = "Experiences";
        sideBarFormations.innerText = "Education";
        sideBarProjets.innerText = "Projects";
        sideBarContact.innerText = "Contact Me";

        jobTitle.innerText = "Full-Stack Developer";
        downloadButton.innerHTML = '<i class="fa fa-arrow-circle-down" aria-hidden="true"></i>Download CV';
        hireButton.innerHTML = '<i class="fa fa-user" aria-hidden="true"></i>Hire me';
    
        titreSectionPropos.innerText = "_About";
        bio.innerText = "A curious, creative, and meticulous junior developer, who, after developing skills in design and agile methodologies during past professional experiences, has made development a passion in his new life. This allows me to express my creativity and technical skills while solving problems effectively and innovatively, as demonstrated by my portfolio and the projects it contains.";
    
        titreSectionCoordonnees.innerText = "_Contact Info";
        coordonneesPhone.innerText = "Phone";
        coordonneesAdresse.innerText = "Location";
    
        titreSectionCompétences.innerText = "_My Skills";
        comp1.innerHTML = "Front-End Development";
        comp2.innerHTML = "Back-End Development";
        comp3.innerHTML = "Object-Oriented Programming";
        comp4.innerHTML = "Database Design (Merise)";
        comp5.innerHTML = "SCRUM Methodology";
        comp6.innerHTML = "Analytical Mindset";
        comp7.innerHTML = "Teamwork";
        comp8.innerHTML = "Needs and Problem Analysis";
        comp9.innerHTML = "MVC Architecture (Model View Controller)";
        comp10.innerHTML = "Designing Solutions";
        comp11.innerHTML = "Application Development";
    
        titreSectionLanguages.innerText = "_Languages";

        titreSectionExperiences.innerText = "_My Experiences";

        if (window.innerWidth <= 768) {
            job1.innerHTML = "";
            job3.innerHTML = "";
            job4.innerHTML = "";
            job5.innerHTML = "Front-End<br>Developer";
        } else {
            job1.innerHTML = "x";
            job3.innerHTML = "";
            job4.innerHTML = "Full-Stack Developer";
            job5.innerHTML = "Front-End Developer";
        }
        job2.innerHTML = "E-Commerce";


        descr1.innerText = "";
        descr2.innerText = "";
        descr3.innerText = "";
        descr4.innerText = "Symfony/Twig Developer within a team of 4, using SCRUM to develop a full-stack client/admin app for electronic repair technicians. This app enables the creation and management of quotes and inventory.";
        descr5.innerText = "";

        titreSectionFormations.innerText = "_My Education";

        if (window.innerWidth <= 768) {
            formation1.innerHTML = "Full-Stack<br>Developer";
        } else {
            formation1.innerHTML = "Full-Stack Developer";
        }
        formation2.innerText = "E-Commerce";
        formation3.innerText = "CAD/CAM Degree";
        formation4.innerText = "CPRP BTS";

        formationDescr1.innerText = "Having completed my training as a Web/Mobile Web Developer, this experience has provided me with a solid foundation and essential skills in web design and development, as well as mobile application creation. My goal now is to apply these skills in professional projects and continue to expand my knowledge in this constantly evolving field.";
        formationDescr2.innerText = "";
        formationDescr3.innerText = "";
        formationDescr4.innerText = "";

        titresSectionProjets.forEach(titre => {
            titre.innerText = "_Projects";
        });

        // projectDescription1.innerText = "I developed a website dedicated to barbers, offering clients the ability to easily book their appointments online. This platform streamlines visit scheduling while enhancing the online presence of professionals.";    
        projectDescription2.innerText = "I designed a simplified movie management application, allowing users to create, edit, and delete movie cards. Movie data, including genres and actors, is stored locally in the browser, providing an easy experience for managing one's movie library.";
        projectDescription3.innerText = "I developed a versatile conversion application that allows easy transitioning between different numerical systems, including binary, decimal, octal, and hexadecimal. This intuitive application simplifies number conversion, regardless of the formats, offering a smooth and convenient user experience.";
        projectDescription4.innerText = "My recent project is a detailed weather application covering 5 days, including air quality data and other relevant information, all powered by an API. This project was inspired by a YouTube tutorial.";    
        projectDescription5.innerText = "I envisioned and designed a banking account management application, encompassing account creation, transaction simulation, and account manipulation, along with the mockup and user experience design. The back-end functions as an API, creating accounts using OOP and class inheritances through HTTP requests. The front-end communicates with this API, providing an interactive interface for viewing and managing banking accounts.";
        projectDescription6.innerText = "As a Symfony/Twig developer within a team of 4, we used the SCRUM agile method to develop a full-stack client/admin app for electronics repairers. This app enabled the creation and management of quotes and inventory, providing a comprehensive solution for industry professionals.";

        projectButtons.forEach(button => {
            button.innerText = "Check";
        });

        titreSectionContact.innerText = "_Contact me!";
        nom.placeholder = "Enter your name";
        email.placeholder = "Enter your email";
        message.placeholder = "Enter your message";
        contactButton.innerHTML = 'Send<i class="fa fa-paper-plane" aria-hidden="true"></i>';
    }
});
