document.addEventListener('DOMContentLoaded', function() {
    const anyoneLink = document.getElementById('anyone-link');
    const recruitersLink = document.getElementById('recruiters-link');
    const instructorsLink = document.getElementById('instructors-link');
    const introductionText = document.getElementById('introduction-text');

    if (!anyoneLink || !recruitersLink || !instructorsLink || !introductionText) {
        console.error("Erreur ID HTML");
        return;
    }


    const lang = document.documentElement.lang || getLanguageFromPath();
    console.log("Langue détectée :", lang);


    const translations = {
        en: {
            anyone: "<h1>Hello there, I'm Quentin Larue — a web design & development student who's here to make your web experience more enjoyable.</h1>",
            recruiters: "<h1>I’m a web design & development student. Passionate about creating seamless and engaging digital experiences, I specialize in user-centered design and efficient development. I'm eager to apply my skills in a professional setting and contribute effectively to your team.</h1>",
            instructors: "<h1>I sincerely appreciate your guidance and support in helping me reach this level. Your teaching has been invaluable, and I hope to live up to the knowledge and skills you've shared.</h1>"
        },
        fr: {
            anyone: "<h1>Bonjour, je suis Quentin Larue, étudiant en design et développement web, et je suis là pour rendre votre expérience en ligne plus agréable.</h1>",
            recruiters: "<h1>Je suis étudiant en design et développement web. Passionné par la création d'expériences numériques fluides et engageantes, je me spécialise dans le design centré utilisateur et le développement efficace. J’ai hâte d’appliquer mes compétences en milieu professionnel et de contribuer concrètement à votre équipe.</h1>",
            instructors: "<h1>Je vous remercie sincèrement pour vos enseignements et votre soutien qui m'ont permis d'atteindre ce niveau. Votre enseignement a été précieux, et j’espère être à la hauteur des connaissances et compétences que vous m’avez transmises.</h1>"
        },
        ja: {
            anyone: "<h1>こんにちは、Quentin Larue です。ウェブデザインと開発を学んでおり、あなたのウェブ体験をより快適にするためにここにいます。</h1>",
            recruiters: "<h1>私はウェブデザインと開発を学んでいる学生です。スムーズで魅力的なデジタル体験を作ることに情熱を持ち、ユーザー中心のデザインと効率的な開発を専門としています。実務でスキルを活かし、貴社に貢献できることを楽しみにしています。</h1>",
            instructors: "<h1>ご指導とサポートに心から感謝しています。あなたの教えはとても貴重で、教わった知識とスキルに応えられるよう努力していきます。</h1>"
        }
    };

    function getLanguageFromPath() {
        const path = window.location.pathname;
        if (path.includes("/fr/")) return "fr";
        if (path.includes("/ja/")) return "ja";
        return "en"; // Par défaut
    }

    function updateText(key) {
        if (translations[lang] && translations[lang][key]) {
            introductionText.innerHTML = translations[lang][key];
        } else {
            console.error("Traduction manquante pour :", lang, key);
        }
    }

    function setActiveLink(activeLink) {
        [anyoneLink, recruitersLink, instructorsLink].forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    anyoneLink.addEventListener('click', function(event) {
        event.preventDefault();
        updateText("anyone");
        setActiveLink(anyoneLink);
    });

    recruitersLink.addEventListener('click', function(event) {
        event.preventDefault();
        updateText("recruiters");
        setActiveLink(recruitersLink);
    });

    instructorsLink.addEventListener('click', function(event) {
        event.preventDefault();
        updateText("instructors");
        setActiveLink(instructorsLink);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-list li');

    function onScroll() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('data-section') === currentSection) {
                li.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
});

function changeLanguage() {
    const select = document.getElementById('language-select');
    const selectedValue = select.value;
    window.location.href = selectedValue;
}


const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
  navList.classList.toggle('active');
});