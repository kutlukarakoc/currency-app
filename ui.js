const container = document.querySelector('.container');
const header = document.querySelector('.header');
const toggle_container = document.querySelector('.toggle-container');
const toggle = document.querySelector('.toggle');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');

toggle.addEventListener('click', (e) => {
    toggle.classList.toggle('toggle-on');

    if(toggle.classList.contains('toggle-on')){
        // dark mode
        document.body.style.background = 'black';
        document.body.style.color = '#fff';
        container.style.border = '1px solid rgb(255, 255, 255, .5)';

    }else{
        // light mode
        document.body.style.background = '#fff';
        document.body.style.color = 'black';
        container.style.border = '1px solid black';
        document.querySelector('hr').style.backgroundColor = 'black';
    }
})

function headerAnim(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
};

window.addEventListener('load', () => {
    headerAnim(500)
        .then(() => {
            title.style.left = '50%';
            title.style.transform = 'translate(-50%, 0)';
            return headerAnim(500);
        })
        .then(() => {
            subtitle.style.right = '50%';
            subtitle.style.transform = 'translate(50%, 0)';
            return headerAnim(500);
        })
        .then(() => {
            header.style.margin = '20% auto';
            return headerAnim(500);
        })
        .then(() => {
            toggle_container.style.top = '5%';
            return headerAnim(500);
        })
        .then(() => {
            toggle.click();
            return headerAnim(1500);
        })
        .then(() => {
            header.style.opacity = '0';
            return headerAnim(500);
        })
        .then(() => {
            header.remove();
            container.style.display = 'block';
            return headerAnim(500);
        })
        .then(() => {
            container.style.opacity = '1';
        })
});