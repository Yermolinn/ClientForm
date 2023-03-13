
// document.querySelector('.js-client-form').addEventListener('submit', e => {
//     e.preventDefault();
//     const form = document.querySelector('form');

//     new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));

//     e.currentTarget.reset();
// });





let form = document.querySelector('form');
let sbm_btn = document.querySelector('button[type="submit"]');
let sendingForm = document.getElementById('sendingForm');
let noSendForm = document.getElementById('noSendForm');
let modal = new bootstrap.Modal(document.getElementById('modalSuccess'));




let newClient = {

name: form.name.value,
surname: form.surname.value,
phone: form.phone.value,
email: form.email.value,
// deal_name: Анкета з сайту uamf.com.ua
deal_cf_b322a776f61257a19915118c7269533e637d0e26: form.startWork.value,
deal_cf_aee886908bc4a731e6bbcd60ae56ded02f8fc584: form.term.value,
deal_cf_f0a4df0e430ed3fba8cb83a641e9d9ca6c27c4c7: form.together.value,
deal_cf_35c2cb99905d80bc2b762c6d1c94af914cab28ce: form.secPerson.value,
deal_cf_ea976f14a52c0b3887275e31d26f20d43aa60e6a: form.secPersonPhone.value,
deal_cf_52776727e9acc4774092471866457a39cea58481: form.comment.value,
// status_id: form.name.value,   id статусу угоди
contact_cf_928bc2731cc537869995ff7b92a28c154d3facb7: form.birthday.value,
contact_cf_9336cc571ed8dc9ca3fb592b955230f9fe23bcc1d: form.currentLocation.value,
contact_cf_c3b6ada731b6aa2ea42f73afe1141a9a89ff5be2: form.currentCountry.value,
contact_cf_262b8a394c1df1aa130ecabd8230c0733f4958ec: form.student.value,
contact_cf_ed56a5bcf85fc1b88d01ebb746d3a1f96640953e: form.university.value,
contact_cf_7c231d725c0d5cb4b2159cea6266128406139b42: form.faculty.value,
contact_cf_46b91c78ba6a3f9762f0fe1f2dc74238df90c289: form.formEducation.value,
    contact_cf_4080db556b5a90be9348711cf7a008001801b1f0: form.speciality.value,

// contact_cf_28b9916379c9f0c12da2996c4d6a9fb8d5a6c22d: form.name.value, дати навчання


contact_cf_42db67815b80356236935b0078219d2fcc5f348f: form.english.value,
contact_cf_0947666cbb4f7f4c68b45980111dad17b3f01133: form.languages.value,
contact_cf_ae959de70df5eb32679cf3ec56785f675d0c903c: form.licence.value,
contact_cf_31d23bd4be85682219f28cdca3277a7265812d07: form.driveExp.value,
contact_cf_081eb0276d10c1a19eb0c0f75c1eee113d560a13: form.technique.value,
contact_cf_c5382088dc764cbc864c17d7ea93aa3ec03c8542: form.skills.value,
contact_cf_752480a4a162adb19bf878c194511f508cdf6bb1: form.height.value,
contact_cf_06a21bd848cd3fff1fac7b126092c357dbcd708c: form.weight.value,
contact_cf_b803c51a4ee69f075f21f0fee2315d8229b6d94c: form.shoeSize.value,
contact_cf_70b1739ae530576ea874cd120fe02de21620a1a3: form.employer.value,
contact_cf_f04411c222d2940c9701175d53f76ac67dd45fe5: form.employerPhone.value,
contact_cf_62876f015bd25fbdbc65ebf428d948f85512a2db: form.employerContry.value,

contact_cf_9479d1fb5fd784da68ef849c9f6924002ce4b65a: form.typeJob.value,
contact_cf_642d5cf24aa07b20556839c602c42143c80904bb: form.recomendation.value,
contact_cf_8ef853915d0f93d9eeecce8c916c1019d59a7d46: form.biometricPassport.value,
contact_cf_4c6eb27c5bdcd561f145ac1d88f4cc42b5eaf802: form.shelter.value,
contact_cf_697d2f43d0cc2ee4fbf6d1272b4512d83d9a78cf: form.crossBorder.value,
contact_cf_03ed8d6d1d8dac626712180ddf276442c79a781f: form.crossBorderDoc.value
};








const BASE_URL = 'http://localhost:3000/clients';









function addClient(info) {
const options = {
    method: 'POST',
    headers: {
        "Content-Type": 'application/json',
    },
    body: JSON.stringify(info),
};
    
return   fetch(`${BASE_URL}`, options)
    .then(res => res.json())
    .then(console.log);
}


addClient(newClient);






// document.addEventListener('DOMContentLoaded', function () {
//     form.addEventListener('submit', formSend);


//     async function formSend(e) {
//         e.preventDefault();
//         form.classList.add('was-validated');
//         noSendForm.style.display = 'none';
//         form.classList.add('was-validated');
//         let invalid = document.querySelectorAll('form input:invalid, form textarea:invalid')

//         if (!invalid.length) {
//             sendingForm.style.display = 'flex';

//             let post = await fetch('${BASE_URL}', options)
//                 .then(response => response.json())
//                 .then((res) => {
//                     if (res['success']) {
//                         sendingForm.style.display = 'none';
//                         modal.show();
//                         form.reset();
//                     } else {
//                         sendingForm.style.display = 'none';
//                         noSendForm.style.display = 'block'
//                         sbm_btn.classList.remove('disabled')
//                     }
//                 }).catch((error) => {
//                     sendingForm.style.display = 'none';
//                     noSendForm.style.display = 'block'
//                     sbm_btn.classList.remove('disabled')
//                 });

         

//             // let invalid = document.querySelectorAll('form input:invalid, form textarea:invalid')

//             // let error = formValidate(form);



//         }






//             function formValidate(form) {
//                 let error = 0;
//                 let invalid = document.querySelectorAll('form input:invalid, form textarea:invalid')
//                 for (let index; index < formValidate.length; index++) {
//                     const index = formValidate[index];
//                     formRemoveErr(input);

//                     // Email validation
//                     if (input.classList.contains('_email')) {
//                         if (emailValid(input)) {
//                             formAddErr(input);
//                             error++;
//                         }
//                     // Checkbox validation 
//                         } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
//                             formAddErr(input);
//                             error++;
//                     //  Input empty validation
//                     } else {
//                         if (input.value === '') {
//                             formAddErr(input);
//                             error++;
//                         }
//                     }
//                 }
//         }

//             function formAddErr(input) {
//                 input.parentElement.classList.add('error');
//                 input.classList.add('error');
//         }
    
//             function formRemoveErr(input) {
//                 input.parentElement.classList.remove('error');
//                 input.classList.remove('error');
//         }
//             function emailValid(input) {
//                 return !/^\w+([\.-]?\w+)*@\+([\.-]?\w+)+(\.\w{2,8})+$/.test(input.value);
//             }




//     }
// })












// let form = document.querySelector('form');
// let sbm_btn = document.querySelector('button[type="submit"]');
// let sendingForm = document.getElementById('sendingForm');
// let noSendForm = document.getElementById('noSendForm');
// let modal = new bootstrap.Modal(document.getElementById('modalSuccess'));



// const formData = {

// name: form.name.value,
// surname: form.surname.value,
// phone: form.phone.value,
// email: form.email.value,
// };








// const BASE_URL = 'http://localhost:3000/clients';

// const options = {
//     method: 'POST',
//     headers: {
//         "Content-Type": 'application/json',
//     },
//     body: JSON.stringify(formData),
// };

// form.addEventListener('submit', function (e) {
//                 e.preventDefault();
//                 sbm_btn.classList.add('disabled')
//                 noSendForm.style.display = 'none';
//                 // let formData = new FormData(form);
//                 form.classList.add('was-validated');
//                 let invalid = document.querySelectorAll('form input:invalid, form textarea:invalid')
//                 if (!invalid.length) {
//                     sendingForm.style.display = 'flex';

//                     fetch(BASE_URL, options)
//                         .then(response => response.json())
//                         .then((res) => {
//                         if (res['success']) {
//                             sendingForm.style.display = 'none';
//                             modal.show();
//                         } else {
//                             sendingForm.style.display = 'none';
//                             noSendForm.style.display = 'block'
//                             sbm_btn.classList.remove('disabled')
//                         }
//                     }).catch((error) => {
//                         sendingForm.style.display = 'none';
//                         noSendForm.style.display = 'block'
//                         sbm_btn.classList.remove('disabled')
//                     });
//                 }
//             });