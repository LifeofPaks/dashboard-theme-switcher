const toggleDisplayWrapper = document.querySelector('.toggle-display-wrapper')
const toggleThumb  = document.querySelector('.toggle-thumb')
const toggleDisplayText = document.querySelector('.toggle-display-text')
const body  = document.querySelector('body')
const overviewTitle  = document.querySelector('.overview-title')
const title  = document.querySelector('.title')
const number  = document.querySelectorAll('.number')
const followersCount  = document.querySelectorAll('.followers-count')
const overviewBox  = document.querySelectorAll('.overview-box')
const socialBox  = document.querySelectorAll('.social-box')



// ================================TOGGLE LIGHT OR DARK MODE===============================


toggleDisplayWrapper.addEventListener('click', ()=>{
    toggleDisplayWrapper.classList.toggle('dark-mode')
    if(toggleDisplayWrapper.classList.contains('dark-mode')){
        toggleDisplayText.innerHTML = 'Light Mode'
        toggleThumb.classList.add('dark-mode')
        body.classList.add('dark-mode')
        overviewTitle.classList.add('dark-mode')
        title.classList.add('dark-mode')

        number.forEach(item=>{
            item.classList.add('dark-mode')
        })

        followersCount.forEach(item=>{
            item.classList.add('dark-mode')
        })

        overviewBox.forEach(item =>{
            item.classList.add('dark-mode')
        })

        socialBox.forEach(item =>{
            item.classList.add('dark-mode')
        })
    } 
    else{
        toggleThumb.classList.remove('dark-mode')
        toggleDisplayText.innerHTML = 'Dark Mode'
        body.classList.remove('dark-mode')
        overviewTitle.classList.remove('dark-mode')
        title.classList.remove('dark-mode')

        number.forEach(item=>{
            item.classList.remove('dark-mode')
        })

        followersCount.forEach(item=>{
            item.classList.remove('dark-mode')
        })


        overviewBox.forEach(item =>{
            item.classList.remove('dark-mode')
        })

        socialBox.forEach(item =>{
            item.classList.remove('dark-mode')
        })
    }
})




