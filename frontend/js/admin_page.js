
fetch('../html/navBar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
        const menu_icon = document.querySelector("#menu");
        const close_icon = document.querySelector("#close");
        const slide = document.querySelector("#slide");
        const admin_panel = document.querySelector("#admin_panel");
        const nav_link = document.querySelector("#nav_link");
        const nav_name = document.querySelector("#nav_name");
        const slide_nav_link = document.querySelector("#slide #nav_link");
        const slide_nav_name = document.querySelector("#slide #nav_name");

        let isAdminLogin = localStorage.getItem('admin_login');

        if(isAdminLogin){
            nav_link.classList.remove('md:flex');
            nav_name.classList.remove('hidden');
            nav_name.classList.add('me-auto', 'ms-8', 'border', 'py-1', 'px-4', 'rounded-full', 'cursor-pointer', );
            nav_name.textContent = "Admin";
            nav_name.addEventListener('click', () => {
                window.location.href = "index.html";
            });

            slide_nav_link.classList.remove('md:flex');
            slide_nav_name.classList.remove('hidden');
            slide_nav_name.classList.add('border', 'py-1', 'px-4', 'cursor-pointer', 'text-center', 'mb-5');
            slide_nav_name.textContent = "Admin";
            slide_nav_name.addEventListener('click', () => {
                window.location.href = "index.html";
            });
        }
        
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
            admin_panel.classList.add('hidden');
            accountBtn.classList.add('hidden');
            profileSection.classList.remove('hidden');

            slideAccBtn.classList.add('hidden');
            slideProfileSection.classList.remove('hidden');
        }

        if(isAdminLogin){
            document.querySelector("#admin_link").classList.remove('hidden');
            admin_panel.classList.add('hidden');
            accountBtn.classList.add('hidden');
            profileSection.classList.remove('hidden');

            document.querySelector("#slide #admin_link").classList.remove('hidden');
            slideAccBtn.classList.add('hidden');
            slideProfileSection.classList.remove('hidden');
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
            admin_panel.classList.remove('hidden');
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

const doc_api = "http://127.0.0.1:8000/api/home";
const app_api = "http://127.0.0.1:8000/api/make";
const user_api = "http://127.0.0.1:8000/api/create";
const latest_api = "http://127.0.0.1:8000/api/getLatestAppointments";
const del_api = "http://127.0.0.1:8000/api/delOldAppointments";

const total_doc = document.querySelector("#total_doc");
const total_app = document.querySelector("#total_appointment");
const total_user = document.querySelector("#total_patients");
const latest = document.querySelector("#latest");

window.onload = async function() {
    await deleteOldAppointments(del_api);
}

async function deleteOldAppointments(api) {
    try {
        let response = await fetch(`${api}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data = await response.json();
        console.log("Old appointments cleaned:", data);
    } catch (msg) {
        console.log(msg);
    }
}

async function loadAllData() {

    const [userData, docData, appData] = await Promise.all([
        fetch(user_api).then(res => res.json()),
        fetch(doc_api).then(res => res.json()),
        fetch(app_api).then(res => res.json()),
    ]);
    
    showUser(userData, total_user);
    showDoc(docData, total_doc);
    showApp(appData, total_app);

    fetch(latest_api)
    .then(res => res.json())
    .then(data => latestBooking(data,latest));
}

let docEditBtn = document.querySelector("#doc_edit");

docEditBtn.addEventListener('click', () => {
    window.location.href = `doc_edit.html`;
})

function latestBooking(data,show){
   
     data.forEach(element => {
        let div = document.createElement('div');
        let img = document.createElement('img');
        let info = document.createElement('div');
        let name = document.createElement('h1');
        let time = document.createElement('h1');

        div.classList.add('py-4', 'px-5', 'item-center', 'gap-5', 'md:flex');
        img.setAttribute('src', `http://127.0.0.1:8000${element.doctor.image}`);
        img.setAttribute('width','50');
        img.classList.add('rounded-full','bg-blue-50');

        name.textContent = element.doctor.name;
        time.textContent = `Booking on ${element.date} ${element.month} ${element.year}`

        div.appendChild(img);
        info.appendChild(name);
        info.appendChild(time);
        div.appendChild(info);
        show.appendChild(div);
    });
}


function showUser(data, total_user) {
    animateCount(data.length, total_user);
}

function showDoc(data, total_doc) {
    animateCount(data.length, total_doc);
}

function showApp(data, total_app) {
    animateCount(data.length, total_app);
}

function animateCount(total, element) {
    let count = 0;
    const interval = setInterval(() => {
        element.textContent = count;
        element.classList.add('font-bold', 'text-[25px]', 'text-gray-500');
        count++;
        if(count > total) clearInterval(interval);
    }, 50);
}

loadAllData();

const show = document.querySelector("#show_box");
const dashboard = document.querySelector("#dashboard");
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");
const page4 = document.querySelector("#page4");
const page5 = document.querySelector("#page5");
const page6 = document.querySelector("#page6");

dashboard.onclick = () => {
    location.reload();
}

const appointment_link = document.querySelector("#appointment");
const main = document.querySelector("#main_box");

appointment_link.addEventListener('click', () => {
    main.classList.remove('h-full');
    main.classList.add('h-max');
    page1.classList.add('hidden');
    page2.classList.remove('hidden');
    page3.classList.add('hidden');
    page4.classList.add('hidden');
    page5.classList.add('hidden');
    page6.classList.add('hidden');
    page2.textContent = "";

    let label = document.createElement('h1');
    label.classList.add('text-[18px]', 'p-3')
    label.textContent = "All Appointments";

    let div = document.createElement('div');
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let cardBox = document.createElement('div');
    
    tbody.classList.add('divide-y');
    table.classList.add('w-[100%]', 'bg-white', 'overflow-x-auto');
    div.classList.add('overflow-scroll', 'h-[500px]', 'hidden', 'lg:block')
    cardBox.classList.add('lg:hidden');
    
    thead.innerHTML = `
        <tr class="text-left border-b border-gray-200">
            <th class="py-2 px-3">No</th>
            <th>Patient</th>
            <th>Birthday</th>
            <th>Date&Time</th>
            <th>Doctor</th>
            <th>Fees</th>
        </tr>
    `
    fetch(app_api, {method: 'GET'})
    .then(res => res.json())
    .then(data => {
        let count = 1;
        console.log(data);

        for(let i = 0; i < data.length; i++){
            let tr = document.createElement('tr');
            tr.classList.add('border-b', 'border-gray-200',"odd:bg-gray-100");
            let card = document.createElement('div');
            card.classList.add('border-2', 'border-gray-500', 'shadow-lg', 'p-2', 'my-5', 'rounded-lg', 'flex')
            let box1 = document.createElement('div');
            let box2 = document.createElement('div');
            box1.classList.add('w-[100%]','p-1');
            box2.classList.add('w-[100%]', 'p-1', 'text-end', 'text-green-600');

            box2.textContent = `$ ${data[i].doctor.fee}`;

            let name = document.createElement('div');
            name.classList.add('font-bold', 'text-[16px]');
            name.textContent = data[i].user.name;

            let birth = document.createElement('div');
            birth.classList.add('text-gray-600', 'text-[14px]');
            birth.textContent = data[i].user.birthday;

            let date = document.createElement('div');
            date.classList.add('text-[15px]')
            date.textContent = `Date : ${data[i].date} ${data[i].month} ${data[i].year}`;

            let docName = document.createElement('div');
            docName.classList.add('text-[15px]');
            docName.textContent =  `Doctor : ${data[i].doctor.name}`;

            tr.innerHTML = `
                <td class="py-2 px-3">${count++}</td>
                <td>${data[i].user.name}</td>
                <td>${data[i].user.birthday}</td>
                <td>${data[i].date} ${data[i].month} ${data[i].year}</td>
                <td>${data[i].doctor.name}</td>
                <td>$ ${data[i].doctor.fee}</td>
            `

            tbody.appendChild(tr);
            cardBox.appendChild(card);
            card.appendChild(box1);
            card.appendChild(box2);
            box1.appendChild(name);
            box1.appendChild(birth);
            box1.appendChild(date);
            box1.appendChild(docName);
        }

        page2.appendChild(label);
        page2.appendChild(div);
        page2.appendChild(cardBox);
        div.appendChild(table);
        table.appendChild(thead);
        table.appendChild(tbody);
    })

});

const add = document.querySelector("#add");

add.addEventListener('click', () => {
    page1.classList.add('hidden');
    page2.classList.add('hidden');
    page4.classList.add('hidden');
    page3.classList.remove('hidden');
    page5.classList.add('hidden');
    page6.classList.add('hidden');

    const form = document.querySelector("#page3 form");

    form.addEventListener('submit', async e => {

        e.preventDefault();
        console.log("form submitted!");

        const name = document.querySelector("#name").value;
        const speciality = Number(document.querySelector("#speciality").value);
        const email = document.querySelector("#email").value;
        const degree = document.querySelector("#degree").value;
        const password  = document.querySelector("#password").value;
        const exp = Number(document.querySelector("#exp").value);
        const fees = document.querySelector("#fees").value;
        const about = document.querySelector("#about").value;
        const image = document.querySelector("#image").files[0];
        const phone = document.querySelector("#phone").value;
        const hospital = document.querySelector("#hospital").value;
        const available = Number(document.querySelector("#available").value);

        await createNewDoc(doc_api, name, speciality, email, degree, password, exp, fees, about, image, phone, hospital, available);

    });
});

async function createNewDoc(doc_api, name, speciality, email, degree, password, exp, fees, about, image, phone, hospital, available) {
    
    try{

        const formData = new FormData();
        formData.append('name', name);
        formData.append('speciality', speciality);
        formData.append('email', email);
        formData.append('degree', degree);
        formData.append('password', password);
        formData.append('exp', exp);
        formData.append('fees', fees);
        formData.append('about', about);
        formData.append('phone', phone);
        formData.append('hospital', hospital);
        formData.append('available', available);
        
        if(image){
            formData.append('image', image);
        }

        let response = await fetch(doc_api, {
            method: 'POST',
            body: formData
        })

        let data = await response.json();
        window.alert("Doctor added...");
        location.reload();

    } catch(msg){
        console.error(msg);
    }
}

const doc_list = document.querySelector("#doc_list");

doc_list.addEventListener('click', () => {
    page1.classList.add('hidden');
    page2.classList.add('hidden');
    page3.classList.add('hidden');
    page4.classList.remove('hidden');
    page5.classList.add('hidden');
    main.classList.remove('h-screen');
    main.classList.add('h-full');
    page6.classList.add('hidden');

    page4.textContent = "";
    page4.classList.add('gap-6','py-6', 'px-5' ,'flex', 'flex-wrap');

    const api = "http://127.0.0.1:8000/api/home";

    fetch(api, {method: 'GET'})
    .then(response => response.json())
    .then(data => create(data));

});

function create(data){
    console.log(data.length);

    for(let i = 0; i < data.length; i++){
            let card = document.createElement('div');
            let img = document.createElement('img');
            let h1 = document.createElement('h1');
            let name = document.createElement('h1');
            let doc_speciality = document.createElement('h1');
            card.classList.add('border');

            img.setAttribute('src', `http://127.0.0.1:8000${data[i].image}`);
            img.classList.add('w-[100%]', 'h-60' ,'bg-blue-200', 'object-cover');
            card.classList.add('border', 'border-blue-500','rounded-lg', 'cursor-pointer', 'overflow-hidden', 'hover:translate-y-[-8px]', 'transition', 'duration-100', 'shadow-lg', 'w-[280px]');

            name.textContent = `${data[i].name}`;
            name.classList.add('px-3', 'font-bold', 'text-[18px]', 'font-serif', 'mt-1')
            doc_speciality.textContent = `${data[i].speciality.name}`;
            doc_speciality.classList.add('px-3','text-[16px]', 'mb-4', 'text-gray-500')

            if(data[i].available == 1){
                h1.classList.add('px-3', 'mt-2');
                h1.innerHTML = `
                <i class="bi bi-circle-fill text-green-400 text-[10px]"></i>
                <small class="text-[14px] ms-1 text-green-700">Available</small>
                `;
            }else{
                h1.classList.add('px-3', 'mt-2');
                h1.innerHTML = `
                <i class="bi bi-circle-fill text-red-400 text-[10px]"></i>
                <small class="text-[14px] ms-1 text-red-700">Unavailable</small>
                `;
            }

            card.addEventListener('click', () => {
                window.location.href = `doc_detail.html?doc_id=${data[i].id}`;
            });

            card.appendChild(img);
            card.appendChild(h1);
            card.appendChild(name);
            card.appendChild(doc_speciality);
            page4.appendChild(card);
            
    }
}

const add_schedule = document.querySelector("#add_schedule");
const choose_doc = document.querySelector("#choose");
const schedule_btn = document.querySelector("#schedule_btn");

add_schedule.addEventListener('click', () => {
    page1.classList.add('hidden');
    page2.classList.add('hidden');
    page3.classList.add('hidden');
    page4.classList.add('hidden');
    page5.classList.remove('hidden');
    page6.classList.add('hidden');

    fetch(doc_api, {method: 'GET'})
    .then(response => response.json())
    .then(data => choose(data))
    .catch(error => console.log(error));

    schedule_btn.addEventListener('click', (e) => {
        e.preventDefault();

        const schedules = [
            { day: 'Mon', time1: document.getElementById('mon_time1').value, time2: document.getElementById('mon_time2').value, time3: document.getElementById('mon_time3').value },
            { day: 'Tue', time1: document.getElementById('tue_time1').value, time2: document.getElementById('tue_time2').value, time3: document.getElementById('tue_time3').value },
            { day: 'Wed', time1: document.getElementById('wed_time1').value, time2: document.getElementById('wed_time2').value, time3: document.getElementById('wed_time3').value },
            { day: 'Thu', time1: document.getElementById('thu_time1').value, time2: document.getElementById('thu_time2').value, time3: document.getElementById('thu_time3').value },
            { day: 'Fri', time1: document.getElementById('fri_time1').value, time2: document.getElementById('fri_time2').value, time3: document.getElementById('fri_time3').value },
            { day: 'Sat', time1: document.getElementById('sat_time1').value, time2: document.getElementById('sat_time2').value, time3: document.getElementById('sat_time3').value },
            { day: 'Sun', time1: document.getElementById('sun_time1').value, time2: document.getElementById('sun_time2').value, time3: document.getElementById('sun_time3').value },
        ];

        addDoctorSchedule(choose_doc.value, schedules);
        
        e.currentTarget.reset();
    })
})

async function addDoctorSchedule(value, schedules) {
    console.log(value);
    console.log(schedules);

    const book_api = "http://127.0.0.1:8000/api/bookingSlot";

    try{

        let response = await fetch(book_api, {
            method: 'POST',
            body: JSON.stringify({
                'doc_id': value,
                'schedules': schedules
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        let data = await response.json();

        console.log(data);
        window.alert("Schedules added...");
        location.reload();

    }catch(msg){
        console.error(msg);
    }
}

function choose(data) {
    
    data.forEach(doc => {
        let opt = document.createElement('option');
        opt.textContent = doc.name;
        opt.setAttribute('value', doc.id);
        choose_doc.appendChild(opt);
    })
}

const user_list = document.querySelector("#user_list");
const paginateApi = "http://127.0.0.1:8000/api/paginateUser";
let currentPage = 1;
let lastPage = 1;
let prevBtn, nextBtn, span;

user_list.addEventListener('click', () => {
    page1.classList.add('hidden');
    page2.classList.add('hidden');
    page3.classList.add('hidden');
    page4.classList.add('hidden');
    page5.classList.add('hidden');
    page6.classList.remove('hidden');
    page6.textContent = "";

    let navigateBox = document.createElement('div');
    navigateBox.classList.add('mt-2', 'ms-2');
    let title = document.createElement('h1');
    title.textContent = "All Users"
    title.classList.add('text-[25px]', 'font-bold', 'ms-2');

    prevBtn = document.createElement('button');
    prevBtn.classList.add('bg-gray-500', 'px-5', 'py-1' ,'border-2', 'text-white', 'outline-2' ,'outline-gray-600', 'cursor-pointer');
    prevBtn.textContent = 'prev'
    prevBtn.addEventListener('click', prevPage);

    span = document.createElement('span');
    span.classList.add('px-3', 'mx-1', 'py-1',)
    span.id = 'page-info';

    nextBtn = document.createElement('button');
    nextBtn.classList.add('bg-gray-500', 'px-5', 'py-1' ,'border-2', 'text-white', 'outline-2' ,'outline-gray-600', 'cursor-pointer');
    nextBtn.textContent = 'next'
    nextBtn.addEventListener('click', nextPage);

    fetchUsers(1);

    page6.appendChild(title);
    page6.appendChild(navigateBox);
    navigateBox.appendChild(prevBtn);
    navigateBox.appendChild(span);
    navigateBox.appendChild(nextBtn);
})

async function fetchUsers(page){
    const response = await fetch(`${paginateApi}?page=${page}`);
    const result = await response.json();

    let existingCard = document.getElementById('user-card');
    if(existingCard) existingCard.remove();

    let card = document.createElement('div');
    card.id = 'user-card';
    card.classList.add('mt-4','p-1', 'w-[100%]', 'lg:w-[60%]');
    console.log(result.data);

    result.data.forEach(user => {
        let cardBox = document.createElement('div');
        cardBox.classList.add('border-2', 'shadow-xl', 'my-5', 'py-3', 'sm:flex', 'border-gray-500', 'rounded-lg', 'px-2' ,'w-[100%]');
        let box1 = document.createElement('div');
        box1.classList.add('w-[100%]', 'p-1');
        let box2 = document.createElement('div');
        box2.classList.add('w-[100%]', 'p-1');

        if(user.role_id === 1) {
            box2.innerHTML = `<div class="bg-blue-400 text-white px-3 rounded-lg py-1 w-[80px] text-center sm:ms-auto">user</div>`;
        }else{
            box2.innerHTML = `<div class="bg-green-400 text-white px-3 rounded-lg py-1 w-[80px] text-center sm:ms-auto">admin</div>`;
        }

        let age = getAge(user.birthday);

        box1.innerHTML = `
            <div class="flex flex-wrap gap-6 ms-2">
                <img class="w-[80px] h-[80px] rounded-full" src="http://127.0.0.1:8000${user.image}"></img>
                <div>   
                    <div>#${user.id}. <b class="text-[15px]">${user.name}</b></div>
                    <div class="text-[15px]">age : ${age}</div>
                    <div class="text-[15px]">${user.email}</div>
                    <div class="text-[15px]">${user.phone}</div>
                </div>
            </div>
            
        `;

        card.appendChild(cardBox);
        cardBox.appendChild(box1);
        cardBox.appendChild(box2);
    });

    currentPage = result.current_page;
    lastPage = result.last_page;

    span.textContent = ` Page ${currentPage} of ${lastPage} `;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === lastPage;

    page6.appendChild(card);
}

function getAge(birthday) {
    const birth = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();

    return age;
}

function nextPage() { fetchUsers(currentPage + 1); }
function prevPage() { fetchUsers(currentPage - 1); }