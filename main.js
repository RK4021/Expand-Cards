let box = document.querySelector('.box');
let pic = document.querySelectorAll('.pic');



box.addEventListener('click', function (e) {
    if (e.target.classList.contains('pic')) {
        pic.forEach(el => el.classList.remove('active'));

        e.target.classList.add('active');

    }
})