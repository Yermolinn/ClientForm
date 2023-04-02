// const BASE_URL = 'http://localhost:3000';
// const BASE_URL = 'https://hook.leadbox.com.ua/cc904e4803958b3781994bdc105eeeca ';
// const clientInfo = {};

let form = document.querySelector('form');
let sbm_btn = document.querySelector('button[type="submit"]');
let sendingForm = document.getElementById('sendingForm');
let noSendForm = document.getElementById('noSendForm');
let modal = new bootstrap.Modal(document.getElementById('modalSuccess'));
let checkboxes = document.querySelectorAll('.driveCat:checked');


// let checkboxes = document.querySelectorAll('.driveCat:checked');
// let values = [];
// for (let i = 0; i < checkboxes.length; i++) {
//   values.push(checkboxes[i].value);
// }
// for (var i = 0; i < checkboxes.length; i++) {
//   formData.append('categories[]', checkboxes[i].value);
// }




                    // Дополнительная валидация
// form.addEventListener('submit', onSubmit);
// async function onSubmit(e) {
//   e.preventDefault();
//   sbm_btn.classList.add('disabled');
//   noSendForm.style.display = 'none';
//   let error = formValidate(form);


//   let formData = new FormData(form);
//   form.classList.add('was-validated');
//   let invalid = document.querySelectorAll(
//     'form input:invalid, form textarea:invalid'
//   );
//     if (!invalid.length) {
//             sendingForm.style.display = 'flex';
//         let response = await fetch('./webhook.php', {
//             method: 'POST',
//             credentials: 'same-origin',
//             body: formData,
//         });
//         if (response.ok) {
//             // let result = await response.json();
//             sendingForm.style.display = 'none';
//             modal.show();
//         } else {
//             sendingForm.style.display = 'none';
//             noSendForm.style.display = 'block';
//             sbm_btn.classList.remove('disabled');
//         }
//     } else {
//             sendingForm.style.display = 'none';
//             noSendForm.style.display = 'block';
//             sbm_btn.classList.remove('disabled');
//         }
    
// }



// function emailValid(input) {
//   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);

// }








                                    // рабочий код!!!!!!!!!!


form.addEventListener('submit', onSubmit);
async function onSubmit(e) {
  e.preventDefault();
  sbm_btn.classList.add('disabled');
  noSendForm.style.display = 'none';
  let formData = new FormData(form);
  form.classList.add('was-validated');


            // если Не говорит по англ, удаляет из формы уровень языка
 if (document.getElementById('no-english').checked) {
    formData.delete('engLevel');
  }
            
            // если говорит по англ, добавляет уровень языка 
 if (document.getElementById('english').checked) {
    let engLevel = document.getElementById('engLevel').value;
    formData.set('contact_cf_42db67815b80356236935b0078219d2fcc5f348f', 'Володію, ' + engLevel);
  }


            //  имея водительские права, добавляет выбранные чекбоксы в одну переменную.
  let checkboxes = document.querySelectorAll('.driveCat:checked');
  let driveCategories = Array.from(checkboxes).map((checkbox) => checkbox.value);
  formData.append('driveCategories', driveCategories.join(', '));


  let invalid = document.querySelectorAll(
    'form input:invalid, form textarea:invalid'
  );
    if (!invalid.length) {
            sendingForm.style.display = 'flex';
        let response = await fetch('./webhook.php', {
            method: 'POST',
            credentials: 'same-origin',
            body: formData,
        });
        if (response.ok) {
            // let result = await response.json();
            sendingForm.style.display = 'none';
            modal.show();
        } else {
            sendingForm.style.display = 'none';
            noSendForm.style.display = 'block';
            sbm_btn.classList.remove('disabled');
        }
    } else {
            sendingForm.style.display = 'none';
            noSendForm.style.display = 'block';
            sbm_btn.classList.remove('disabled');
        }
    
}
