// Reveal sections on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.animate-on-scroll').forEach(section => {
    observer.observe(section);
});

// Auto-scroll carousel
const carousel = document.querySelector('.partners-carousel');
let scrollAmount = 0.2;

function autoScrollCarousel() {
    if (carousel) {
        carousel.scrollLeft += scrollAmount;
        // Loop back when reaching the end
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth || carousel.scrollLeft === 0) {
            scrollAmount = -scrollAmount;
        }
        requestAnimationFrame(autoScrollCarousel);
    }
}

requestAnimationFrame(autoScrollCarousel);

const bsfData = {
    B: {
        icon: "fas fa-tools",
        title: "Build",
        text: "We engineer digital solutions that serve as strong foundations for schools, students, and communities. Our platforms are built with scalability and reliability in mind — the kind that supports real growth and impact over time.",
        color: "#ed3935"
    },
    S: {
        icon: "fas fa-magic",
        title: "Simple",
        text: "We embrace simplicity in design and function. Our software is intuitive, clean, and user-first — reducing friction and making tech feel accessible for everyone, from students to administrators.",
        color: "#45a664"
    },
    F: {
        icon: "fas fa-rocket",
        title: "Future",
        text: "We think ahead — building with tomorrow’s challenges and innovations in mind. Whether it’s AI integration or cutting-edge infrastructure, we strive to future-proof education and community tech.",
        color: "#3693de"
    }
};

document.querySelectorAll(".bsf-pie path").forEach(path => {
    path.addEventListener("click", () => {
        const letter = path.dataset.letter;
        const data = bsfData[letter];
        const card = document.getElementById("bsf-desc");
        card.innerHTML = `
        <div class="bsf-icon" style="color: ${data.color}"><i class="${data.icon}"></i></div>
        <h3 style="color: ${data.color}">${data.title}</h3>
        <p>${data.text}</p>
      `;
    });
});

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

function showProject(tab, id) {
    document.querySelectorAll('.project-content').forEach(c => c.style.display = 'none');
    document.querySelectorAll('.project-tab').forEach(t => {
        t.classList.remove('active');
        t.style.border = 'none';
        t.style.background = '#eee';
    });
    document.getElementById(id).style.display = 'block';
    tab.classList.add('active');
    tab.style.border = '2px solid #1e88e5';
    tab.style.background = '#fff';
    document.getElementById('project-image').src = id === 'ranters' ? '/static/assets/img/demo-ranters.png' : '/static/assets/img/demo-unimates.png';
}