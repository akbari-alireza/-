let form1 = document.getElementById('form1')
let note1 = document.getElementById('note1')
let btn1 = document.getElementById('btn1')
let form2 = document.getElementById('form2')
let note2 = document.getElementById('note2')
let btn2 = document.getElementById('btn2')
let log_email = document.getElementById('log_email')
let phone_num = document.getElementById('phone_num')
let email_log = document.getElementById('email_log')
let log_phone = document.getElementById('log_phone')
let cond = document.getElementById('cond')
let click_cpc = document.getElementById('click_cpc')

note1.addEventListener('click', function(){
    form1.style.display= 'none'
    form2.style.display= 'flex' 
    cond.style.display= 'block'



})
note2.addEventListener('click', function(){
    form2.style.display= 'none'
    form1.style.display= 'flex'
    cond.style.display= 'none'

})
log_email.addEventListener('click', function(){
    phone_num.style.display= 'none'
    email_log.style.display= 'flex'
    log_email.style.display= 'none'
    log_phone.style.display= 'flex'

})
log_phone.addEventListener('click', function(){
    phone_num.style.display= 'flex'
    email_log.style.display= 'none'
    log_phone.style.display= 'none'
    log_email.style.display= 'flex'

})
btn1.addEventListener('click', function(){
    alert ('Please be sure all the information is correct')

})
btn2.addEventListener('click', function(){
    alert ('Welcome to Scabzlearn.ir')

})
click_cpc.addEventListener('click', function(){
    alert ('Connect the Network')

})

