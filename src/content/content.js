import axios from 'axios';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const dateFormatter = dateTime => {
    return `${dateTime.getDay()} ${monthNames[dateTime.getMonth()]} ${dateTime.getFullYear()}, ${dateTime.getHours()}:${dateTime.getMinutes()}`
};

const allLessonsDraw = lessons => {
    lessons.forEach(lessonDraw);
};

const lessonDraw = lesson => {

    const blockDiv = document.createElement('div');
    blockDiv.className = 'block block_full_width';

    const title = document.createElement('h2');
    title.className = 'block__name';
    title.innerText = lesson.name;

    const date = document.createElement('div');
    date.className = 'block__date';
    const dateTime = new Date(lesson.date);

    date.innerText = dateFormatter(dateTime);

    const description = document.createElement('div');
    description.className = 'block__description';
    description.innerText = lesson.description;

    const lecturer = document.createElement('div');
    lecturer.className = 'block__lecturer';
    lecturer.innerText = lesson.lecturer.name;

    document.getElementById('lessons').appendChild(blockDiv);
    blockDiv.appendChild(title);
    blockDiv.appendChild(date);
    blockDiv.appendChild(description);
    blockDiv.appendChild(lecturer);

};

axios.get('/api/course/1/')
    .then(response => allLessonsDraw(response.data.lessons))
    .catch(error => {
        document.getElementById('lessons').innerHTML =
            `<div class='container__error'>
                    Failed loading lessons. Someshit happens
             </div>`;
        console.log(error);
    });



