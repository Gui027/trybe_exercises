const header = document.getElementById('header-container');
header.style.backgroundColor = '#4CB16A';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = '#F89E84';

const emergencyTasksHeader = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeader.length; index++) {
emergencyTasksHeader[index].style.backgroundColor = '#AB6EF3';
}

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = '#F9DB5E';

const noemergencyTasksHeader = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noemergencyTasksHeader.length; index++) {
    noemergencyTasksHeader[index].style.backgroundColor = '#232525';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#0E3633';


