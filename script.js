var typed = new Typed(".text" , {
    strings: ["Frontend Developer", "Backed Developer", "FullStack Developer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
    });

//theme toggle
const themeBtn = document.getElementById('themeBtn');
const prefersLight = window.matchMedia('(prefers-color-scheme: light').matches;
const savedTheme = localStorage.getItem('theme');

if(savedTheme === 'light' || (!savedTheme && prefersLight)){
    document.body.classList.add('light')
}

themeBtn.addEventListener('click', () => {
     document.body.classList.toggle("light");
     localStorage.setItem('theme',document.body.classList.contains('light') ? 'light' : 'dark');
});


const themeBtn1 = document.getElementById('themeBtn1');
const prefersLight1 = window.matchMedia('(prefers-color-scheme: light').matches;
const savedTheme1 = localStorage.getItem('theme');

if(savedTheme === 'light' || (!savedTheme && prefersLight)){
    document.body.classList.add('light')
}

themeBtn1.addEventListener('click', () => {
     document.body.classList.toggle("light");
     localStorage.setItem('theme',document.body.classList.contains('light') ? 'light' : 'dark');
});

//year

document.getElementById('year').textContent = new Date().getFullYear();
