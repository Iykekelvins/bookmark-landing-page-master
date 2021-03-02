const faqHead = document.querySelectorAll('.faq-head');
const answer = document.querySelectorAll('.answer');
const question = document.querySelectorAll('.faq-head h4');
const toggleBtns = document.querySelectorAll('.toggle-btn');
const closeBtn = document.querySelector('.close-icon');
const phoneNav = document.querySelector('.phone-nav');
const form = document.querySelector('form');
const email = document.getElementById('email');
const tabs = document.querySelectorAll('.tabs')


const features = {
    first: {
        img:'./images/illustration-features-tab-1.svg',
        header: 'Bookmark in one click',
        text: `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`
    },
    second: {
        img:'./images/illustration-features-tab-2.svg',
        header: 'Intelligent search',
        text:`  Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`
    },
    third: {
        img:'./images/illustration-features-tab-3.svg',
        header: 'Share your bookmarks',
        text:`Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`
    },
  }

window.addEventListener('DOMContentLoaded', function(){
    loadTab()
})


function loadTab(){
    const tabText = document.querySelector('.tab-text');
    const header = tabText.firstElementChild;
    const paragraph = header.nextElementSibling;
    const image = document.querySelector('.tab-info img')

    header.innerText = features.first.header;
    paragraph.innerText = features.first.text;
    image.src = features.first.img;

    tabs.forEach(function(tab){
        tab.addEventListener('click', function() {      
            if(tab.classList.contains('tab-2')){
               header.innerText = features.second.header;
               paragraph.innerText = features.second.text;
               image.src = features.second.img;             
           } 
           
           else if(tab.classList.contains('tab-3')){
               header.innerText = features.third.header;
               paragraph.innerText = features.third.text;
               image.src = features.third.img;
           }
    
           else{
            header.innerText = features.first.header;
            paragraph.innerText = features.first.text;
            image.src = features.first.img;
           }
    })
 })    
}

// Add and remove active class
const featuresDiv = document.querySelector('.feature-tabs')
const activeTabs = featuresDiv.getElementsByClassName('tabs');
for(var i = 0; i < activeTabs.length; i++){
    activeTabs[i].addEventListener('click', function(){
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active'
    })
}



// Accordion 
faqHead.forEach((faq) => {
    faq.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const arrow = this.lastElementChild;
        if(answer.style.maxHeight) {
            answer.style.maxHeight = null;
            arrow.style.transform = 'rotate(-0deg)';
            arrow.style.transition = 'all ease-out 0.4s';
            
        } else{
            answer.style.maxHeight = answer.scrollHeight + 'px';
            arrow.style.transform = 'rotate(180deg)';
            arrow.style.transition = 'all ease-out 0.4s';
        }
    })

})

// Toggle Menu
toggleBtns.forEach(toggle => {
    toggle.addEventListener('click', () => {
        if(toggle.classList.contains('bars-icon')){
            phoneNav.classList.add('show-nav');
            closeBtn.classList.add('spin-btn')

            document.body.style.position = 'fixed';
            document.body.style.transition = 'all ease-out 0.4s';
        } else{
            phoneNav.classList.remove('show-nav')

            document.body.style.position = 'unset'
        }
    })
})

// Form Validation
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkEmail();
})

function checkEmail(){
    const emailValue = email.value;

    if(emailValue === ''){
        checkErrorFor(email, 'Email field cannot be empty.')
    }

    else if(!validateEmail(emailValue)){
        checkErrorFor(email, "Whoops, make sure it's an email")
    }

    else{
        success(email)
    }
}

function checkErrorFor(input, message){
    const formInput = input.parentElement;
    const small = input.nextElementSibling;

    small.innerText = message;
    formInput.className = 'form-input error';

}

function success(input){
    const formInput = input.parentElement;
    formInput.className = 'form-input success';
}

function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}