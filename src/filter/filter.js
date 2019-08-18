let filterItems = document.querySelector('.filter').querySelectorAll('.filter__item');
let courses = document.querySelector('#courses').querySelectorAll('.block');
let params = [];
let rest = [];

showAll = () => {
    courses.forEach(course => course.style.display = 'block');
    filterItems.forEach(item => item.classList.remove('filter__item_disabled'));
};

disableInputs = () => {
    filterItems.forEach(item => {
        if (rest.includes(item.id) === false) {
            item.classList.add('filter__item_disabled');
        } else {
            item.classList.remove('filter__item_disabled');
        }
    })
};

removeFromArray = (array, element) => {
    array.forEach((arrayElem, i) => {
        if (arrayElem === element) {
            array.splice(i, 1);
        }
    })
};

intersectionLength = (firstArray, secondArray) => {
    return firstArray.filter(value => secondArray.includes(value)).length
};

doFilter = () => {
    if (params.length === 0) {
        showAll();
    } else {
        courses.forEach(course => {
            let languages = course.querySelector('input').value.split('#');

            if (intersectionLength(params, languages) === params.length) {
                course.style.display = 'block';
                languages.forEach((lang) => {
                    if (rest.includes(lang) === false) rest.push(lang);
                });
            } else {
                course.style.display = 'none';
                languages.forEach(lang => {
                    if (rest.includes(lang)) removeFromArray(rest, lang);
                });
            }
        });
        disableInputs();
    }
};

filterItems.forEach(item => {
    let self = item;
    item.onclick = () => {
        if (self.classList.contains('filter__item_disabled') === false) {
            if (self.classList.contains('filter__item_active') === false) {
                self.classList.add('filter__item_active');
                params.push(item.id);

                self.addEventListener('click', doFilter(), false);
            } else {
                self.classList.remove('filter__item_active');

                removeFromArray(params, item.id);
                self.addEventListener('click', doFilter(), false);
            }
        }
    }
});


