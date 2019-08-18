const blocks = document.querySelectorAll('.block');
let color;

blocks.forEach(block => {
    const divPrevBackgroundColor = getComputedStyle(block, null).backgroundColor;
    const textColor = getComputedStyle(block.querySelectorAll('.block__description, .block__name')[0], null).color;
    const children = block.querySelectorAll('.block__description, .block__name');

    block.onmouseover = () => {
        block.style.backgroundColor = 'blue';
        children.forEach(child => child.style.color = 'white')

    };
    block.onmouseout = () => {
        block.style.backgroundColor = divPrevBackgroundColor;
        children.forEach(child => child.style.color = textColor)
    };
});