let pass = document.getElementById('password')
let msg = document.getElementById('message')
let str = document.getElementById('strength')

// Предотвращаем пробел в вводе пароля
function preventSpaceInInput(){
    pass.addEventListener('keydown', (e) => {
        if(e.key === ' ' || e.key === 'Spacebar'){
            e.preventDefault() 
        }
    })
}


pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = 'block'
    } else {
        msg.style.display = 'none' 
    }

    if(pass.value.length < 4){
        str.innerHTML = 'weak'
        str.style.color = 'red'
        pass.style.borderColor = '#ff5925'
    } else if(pass.value.length >= 4 && pass.value.length < 8){
        str.innerHTML = 'medium'
        str.style.color = 'yellow'
        pass.style.borderColor = 'yellow'

    }else if(pass.value.length >= 8){
        str.innerHTML = 'strong'
        str.style.color = 'green'
        pass.style.borderColor = '#26d730'

    } 
    preventSpaceInInput()
})


