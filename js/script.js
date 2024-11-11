//Array of projects
const projects = [
    {
        title : 'portfolio',
        description : "A showcase of Quinton personal portfolio and projects. ",
        url:'https://quinton161.github.io/portfolio/'
    },
    {
        title : ' persnoal portfolio',
        description : "A showcase of Quinton personal portfolio and projects. ",
        url:'https://quinton161.github.io/portfolio/'
    },
    {
        title : ' persnoal portfolio',
        description : "A showcase of Quinton personal portfolio and projects. ",
        url:'https://quinton161.github.io/portfolio/'
    },
    {
        title : ' persnoal portfolio',
        description : "A showcase of Quinton personal portfolio and projects. ",
        url:'https://quinton161.github.io/portfolio/'
    },
    {
        title : ' persnoal portfolio',
        description : "A showcase of Quinton personal portfolio and projects. ",
        url:'https://quinton161.github.io/portfolio/'
    },

];
// Fuction to load projects
function loadprojects() {
    const projectsList = document.getElementById('project-list');

    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <iframe src="${project.url}" title="${project.title}" class="project-iframe"></iframe>
        `;

        projectsList.appendChild(projectCard);

    });
}

// Load projects when DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadprojects);