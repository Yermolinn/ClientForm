        let driver = document.querySelector('.js-drive-licence');
        let driveCategory = document.querySelector('.drive-category');
        driver.addEventListener('click', function (e) {
            let element = e.target;

            if (element.type === 'radio') {
                if (element.id === 'drive') {
                    // listStudent.forEach(elem => console.log(elem))
                    driveCategory.style.display = 'block';
                } else {
                    driveCategory.style.display = 'none';
                }
            }
        });


        let speakEng = document.querySelector('.js-english-language');
        let engLevel = document.querySelector('.english-level');
        speakEng.addEventListener('click', function (e) {
            let element = e.target;

            if (element.type === 'radio') {
                if (element.id === 'english') {
                    // listStudent.forEach(elem => console.log(elem))
                    engLevel.style.display = 'block';
                } else {
                    engLevel.style.display = 'none';
                }
            }
        });




            let student = document.querySelector('.js-student');
            let listStudent = document.querySelector('.list-student');
            student.addEventListener('click', function (e) {
                let element = e.target;
                console.log(element);

                if (element.type === 'radio') {
                    if (element.id === 'student') {
                        // listStudent.forEach(elem => console.log(elem))
                        listStudent.style.display = 'block';
                    } else {
                        listStudent.style.display = 'none';
                    }
                }
            });
            
            
            let shelter = document.querySelector('.js-shelter');
            let countryShelter = document.querySelector('.country-shelter');
            shelter.addEventListener('click', function (e) {
                let element = e.target;
                console.log(element);

                if (element.type === 'radio') {
                    if (element.id === 'shelter') {
                        // listStudent.forEach(elem => console.log(elem))
                        countryShelter.style.display = 'block';
                    } else {
                        countryShelter.style.display = 'none';
                    }
                }
            });

    let together = document.querySelector('.js-together');
    let infoTogether = document.querySelector('.info-together');
    together.addEventListener('click', function (e) {
        let element = e.target;
        if (element.type === 'radio') {
            if (element.id === 'together') {
                infoTogether.style.display = 'block';
            } else {
                infoTogether.style.display = 'none';
            }
        }
    });