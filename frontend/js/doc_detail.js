const doc_img = document.querySelector("#doc_img");
const doc_name = document.querySelector("#doc_name");
const doc_degree = document.querySelector("#degree");
const year = document.querySelector("#exp_year");
const about = document.querySelector("#about");
const fee = document.querySelector("#fee");
const dayId = document.querySelectorAll("#day");
const dateId = document.querySelectorAll("#date");
const timeTable = document.querySelector(".timeTableBox");
const dateBox = document.querySelectorAll("#date_box");
const related_box = document.querySelector(".related_box");
let specialityId = null;

fetch('../html/navBar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
        const menu_icon = document.querySelector("#menu");
        const close_icon = document.querySelector("#close");
        const slide = document.querySelector("#slide");
        
        menu_icon.onclick = function(){
            slide.style.left = "0px";
            slide.style.transition = "all 0.8s";
            menu_icon.style.display = "none";
            close_icon.style.display = "block";
        }
        
        close_icon.onclick = function(){
            menu_icon.style.display = "block";
            close_icon.style.display = "none";
            slide.style.left = "-500px";
            slide.style.transition = "all 0.8s";
        }

        const accountBtn = document.getElementById('account');
        const profileSection = document.getElementById('profile-section');
        const slideAccBtn = document.querySelector('#slide #account');
        const slideProfileSection = document.querySelector("#slide #profile-section");

        let isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
            accountBtn.classList.add('hidden');
            profileSection.classList.remove('hidden');

            slideAccBtn.classList.add('hidden');
            slideProfileSection.classList.remove('hidden');
        }

        let isAdminLogin = localStorage.getItem('admin_login');
        if(isAdminLogin){
            document.querySelector("#admin_link").classList.remove('hidden');
            document.querySelector("#slide #admin_link").classList.remove('hidden');
        }

        const logoutBtn = document.getElementById('logout-btn');
        const slide_logout = document.querySelector("#slide #logout-btn");

        slide_logout.onclick = () => {
            slideProfileSection.classList.add('hidden');
            slideAccBtn.classList.remove('hidden');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('login');
            localStorage.removeItem('admin_login');
            localStorage.removeItem('id');
        }

        logoutBtn.addEventListener('click', () => {
            profileSection.classList.add('hidden');
            accountBtn.classList.remove('hidden');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('login');
            localStorage.removeItem('admin_login');
            localStorage.removeItem('id');
        })

        const dropDown = document.querySelector("#dropdown");
        const dropItem = document.querySelector("#dropItem");

        const slideDropDown = document.querySelector("#slide #dropdown");
        const slideDropItem = document.querySelector("#slide #dropItem");

        dropDown.addEventListener('click', () => {
            dropItem.classList.toggle('drop');
        })

        slideDropDown.addEventListener('click', () => {
            slideDropItem.classList.toggle('slideDrop');
        })

        const profile_link = document.querySelector("#profile_link");
        const slide_profileLink = document.querySelector("#slide #profile_link");

        if(localStorage.getItem('login')){
            let userID = localStorage.getItem('id');
            profile_link.removeAttribute('href');
            profile_link.setAttribute('href', `../html/profile.html?id=${userID}`);

            slide_profileLink.removeAttribute('href');
            slide_profileLink.setAttribute('href', `../html/profile.html?id=${userID}`);
        }

        const appointment_link = document.querySelector("#appointment_link");
        const slide_appointmentLink = document.querySelector("#slide #appointment_link");

        appointment_link.addEventListener('click', () => {
            let userID = localStorage.getItem('id');
            appointment_link.setAttribute('href', `../html/my_appointment.html?user_id=${userID}`);
        });

        slide_appointmentLink.addEventListener('click', () => {
            let userID = localStorage.getItem('id');
            slide_appointmentLink.setAttribute('href', `../html/my_appointment.html?user_id=${userID}`);
        });

      });

const urlParams = new URLSearchParams(window.location.search);
const doc_id = urlParams.get('doc_id');

const api = "https://3748e8650932be77-210-14-107-177.serveusercontent.com/api/home";
const related_doc_api = "https://3748e8650932be77-210-14-107-177.serveusercontent.com/api/related_doctors";

if(doc_id){
     receive_docData(api, doc_id);
     receive_day(doc_id);
}

async function receive_docData(api , doc_id) {
    try{
        let response = await fetch(`${api}/${doc_id}`, {
            method: 'GET'
        });
        let data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }
        
        specialityId = data.speciality_id;
        related_doc(specialityId);

        doc_img.setAttribute('src', `https://3748e8650932be77-210-14-107-177.serveusercontent.com${data.image}`);
        doc_img.classList.add('w-80', 'rounded-lg')
        doc_name.textContent = data.name;
        doc_name.classList.add("text-[25px]", "font-bold");
        doc_degree.textContent = `${data.degree} - ${data.speciality.name}`;
        
        if(data.exp > 10){
            year.textContent = `${data.exp - 1} + years`;
        } else {
            year.textContent = `${data.exp} years`;
        }

        year.classList.add('border', 'rounded-lg', 'px-2', 'border-gray-300', 'text-gray-700')
        about.textContent = data.about;
        fee.textContent = `$ ${data.fee}`;

    }catch(error){
        console.error('Error: ', error);
    }
}

function receive_day(doc_id) {
        const schedule_api = "https://3748e8650932be77-210-14-107-177.serveusercontent.com/api/getSchedule";

        const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        // const todayIndex = new Date().getDay();
        // const date = new Date();

        for(let i = 0; i < dayId.length; i++){
            const futureDate = new Date();
            futureDate.setDate(futureDate.getDate() + i); // adds days properly
            const month = futureDate.toLocaleString('default', { month: 'short' });

            const dayIndex = futureDate.getDay(); // 0=Sun, 1=Mon, etc.

            dayId[i].textContent = days[dayIndex];
            dateId[i].textContent = futureDate.getDate(); // correct date (wraps months)

            let day_text = dayId[i].textContent;
            let date_text = dateId[i].textContent;

            dateBox[i].addEventListener('click', () => {
                dateBox.forEach(box => box.classList.remove('bg-blue-600', 'text-white'));

                dateBox[i].classList.add('bg-blue-600', 'text-white');
                show_time(i, schedule_api,day_text, date_text,doc_id, month);
            });

        } 
}

async function show_time(id, api,day_text, date_text, doc_id, month) {
    try{

        let response = await fetch(`${api}/${doc_id}/${day_text}`,{
            method: 'GET'
        });

        if(!response.ok){
            throw new Error("You can't fetch data");
        }

        let data = await response.json();
        console.log(data);

        timeTable.textContent = "";
        const book_btn = document.querySelector("#book_btn");

        for(let i = 0; i < 5; i++){
            let timeProperty = 'time' + (i + 1);
            console.log(data[0][timeProperty]);

            const allNull = !data[0].time1 && !data[0].time2 && !data[0].time3 && !data[0].time4 && !data[0].time5;

            if(allNull){
                timeTable.classList.add('text-red-500', 'font-bold');
                timeTable.textContent = "No schedules for this day...!!!";
                return;
            }

            if(data[0][timeProperty]){
                let div = document.createElement('div');
                div.classList.add('border', 'px-3', 'py-1'  ,'rounded-lg', 'w-20', 'text-center');
                
                div.textContent = data[0][timeProperty];
                let time = div.textContent;

                 div.addEventListener('click', () => {
                    let allTimeDivs = timeTable.querySelectorAll('div');
                    allTimeDivs.forEach(timeDiv => {
                        timeDiv.classList.remove('bg-blue-500', 'text-white');
                    })

                    div.classList.add('bg-blue-500', 'text-white');

                    let isLoggedIn = localStorage.getItem('isLoggedIn');

                    if(isLoggedIn){
                        book_btn.classList.remove('hidden');
                        book_btn.classList.add('block', 'mt-10', 'hover:shadow-lg', 'cursor-pointer');

                        book_btn.addEventListener('click', () => {
                            let id = localStorage.getItem('id');
                            const make_api = "https://3748e8650932be77-210-14-107-177.serveusercontent.com/api/make";
                            
                            make_appointment(id,doc_id,day_text,date_text,make_api,time, month);
                        });

                    }else{
                        book_btn.classList.remove('hidden');
                        book_btn.classList.add('block', 'mt-10', 'hover:shadow-lg', 'cursor-pointer','w-[250px]', 'bg-red-500');
                        book_btn.textContent = "";

                        book_btn.textContent = "Login first before booking...";
                    }
                });

                timeTable.classList.add('flex', 'gap-5');
                timeTable.classList.remove('text-red-500', 'font-bold');
                timeTable.appendChild(div);

            }
        }

    }catch(msg){
        console.error(msg);
    }
}

async function make_appointment(id,doc_id,day_text,date_text,api,time, month) {
    try{

        const now = new Date();
        // const month = now.toLocaleString('default', { month: 'short' });
        const year = now.getFullYear();

        let response = await fetch(api, {
            method: 'POST',
            body: JSON.stringify(
                {
                    'user_id': id,
                    'doc_id': doc_id,
                    'day': day_text,
                    'date': date_text,
                    'time': time,
                    'month': month,
                    'year': year
                }
            ),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(!response.ok){
            throw new Error("You can't fetch data");
        }

        let data = await response.json();

        console.log(data);

        if(data.success){
            window.alert("Appointment Booked...!!");
            let id = localStorage.getItem('id');

            window.location.href = `my_appointment.html?user_id=${id}`;
        }

    }catch(msg){
        console.log(msg);
    }
}

async function related_doc(speciality_id) {
    try {
        let response = await fetch(`${related_doc_api}/${speciality_id}`);

        if(!response.ok){
            throw new Error("you can't fetch the data");
        }

        let data = await response.json()
        let length = data.length;
        console.log(data);
        
        for(let i = 0; i < length; i++){
            if(data[i].id != doc_id){
                let div = document.createElement('a');
                div.classList.add('rounded-lg', 'overflow-hidden', 'hover:translate-y-[-10px]', 'hover:transition-all', 'hover:duration-500');

                let img = document.createElement('img');
                
                img.setAttribute('src', `https://3748e8650932be77-210-14-107-177.serveusercontent.com${data[i].image}`);
                img.setAttribute('alt', `img${i+1}`);
                img.classList.add('w-[250px]', 'bg-blue-200');

                let available_div = document.createElement('div');
                let full_circle = document.createElement('i');
                let available_box = document.createElement('p');
                let name_box = document.createElement('h1');
                let speciality = document.createElement('h1');

                if(data[i].available === 1){
                    div.classList.add('border', 'border-blue-300', 'cursor-pointer');
                    console.log(data[i].id);

                    div.addEventListener('click', () => {
                        div.setAttribute('href', `../html/doc_detail.html?doc_id=${data[i].id}`);
                    });

                    available_div.classList.add('flex', 'items-center', 'ms-2', 'gap-2', 'mt-1');
                    full_circle.classList.add("bi" ,"bi-circle-fill", 'text-green-600', 'text-[10px]');
                    available_box.textContent = "available";
                    available_box.classList.add('text-start', 'text-green-600', 'text-[15px]');
                    name_box.textContent = data[i].name;
                    name_box.classList.add('text-start', 'ms-2', 'font-bold');
                    speciality.textContent = data[i].speciality.name;
                    speciality.classList.add('text-start', 'ms-2', 'mb-3');
                }

                div.appendChild(img);
                div.appendChild(available_div);
                div.appendChild(name_box);
                div.appendChild(speciality);
                available_div.appendChild(full_circle);
                available_div.appendChild(available_box);
                related_box.appendChild(div);
            }
        }

    }catch(error) {
        console.error(error);
    }
}

fetch('../html/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-box').innerHTML = data;
      });