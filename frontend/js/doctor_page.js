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
        const accountBtn = document.getElementById('account');
        const slide_nav_link = document.querySelector("#slide #nav_link");
        const slide_nav_name = document.querySelector("#slide #nav_name");
        const slide_adminPanel = document.querySelector("#slide #admin_panel");
        const slide_accbtn = document.querySelector("#slide #account");


        let isDocLogin = localStorage.getItem('doctor_login');
        let logout = document.querySelector('#logout_btn');
        let slide_logout = document.querySelector("#slide #logout_btn");

        if(isDocLogin){
            nav_link.classList.remove('md:flex');
            nav_name.classList.remove('hidden');
            nav_name.classList.add('me-auto', 'ms-8', 'border', 'py-1', 'px-4', 'rounded-full', 'cursor-pointer');
            nav_name.textContent = "Doctor";
            nav_name.addEventListener('click', () => {
                window.location.href = "index.html";
            });

            slide_nav_link.classList.remove('md:flex');
            slide_nav_name.classList.remove('hidden');
            slide_nav_name.classList.add('border', 'py-1', 'px-4', 'cursor-pointer', 'text-center', 'mb-5');
            slide_nav_name.textContent = "Doctor";
            slide_nav_name.addEventListener('click', () => {
                window.location.href = "index.html";
            });

            admin_panel.classList.add('hidden');
            slide_adminPanel.classList.add('hidden');

            accountBtn.classList.add('hidden');
            slide_accbtn.classList.add('hidden');

            logout.classList.remove('hidden');
            slide_logout.classList.remove('hidden');

            logout.addEventListener('click', () => {
                localStorage.removeItem('doctor_login');
                window.location.href = "index.html";
            })

            slide_logout.addEventListener('click', () => {
                localStorage.removeItem('doctor_login');
                window.location.href = "index.html";
            })
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

        const profileSection = document.getElementById('profile-section');
        let isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
            admin_panel.classList.add('hidden');
            accountBtn.classList.add('hidden');
            profileSection.classList.remove('hidden');
        }

        const logoutBtn = document.getElementById('logout-btn');
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
        dropDown.addEventListener('click', () => {
            dropItem.classList.toggle('drop');
        })

        const profile_link = document.querySelector("#profile_link");
        if(localStorage.getItem('login')){
            let userID = localStorage.getItem('id');
            profile_link.removeAttribute('href');
            profile_link.setAttribute('href', `../html/profile.html?id=${userID}`);
        }

        const appointment_link = document.querySelector("#appointment_link");
        appointment_link.addEventListener('click', () => {
            let userID = localStorage.getItem('id');
            appointment_link.setAttribute('href', `../html/my_appointment.html?user_id=${userID}`);
        });

      });

const show_box = document.querySelector("#show_box");
const profile = document.querySelector("#profile");
const doc_api = "https://3ce353abbeccd1.lhr.life/api/home";
const available_api = "https://3ce353abbeccd1.lhr.life/api/change_available";

const urlParams = new URLSearchParams(window.location.search);
const doc_id = urlParams.get('id');

profile.addEventListener("click", () => {
    show_box.textContent = "";

    fetch(`${doc_api}/${doc_id}`, {method: 'GET'})
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let div = document.createElement('div');
        div.classList.add('px-4', 'py-2');
        let img = document.createElement('img');

        img.setAttribute('src', `https://3ce353abbeccd1.lhr.life${data.image}`);
        img.classList.add('rounded-lg', 'bg-blue-50', 'w-[250px]')

        let info_box = document.createElement('div');
        info_box.classList.add('bg-white', 'rounded-lg', 'w-[450px]', 'mt-5', 'p-3');

        info_box.innerHTML = `
            <h1 class="text-[20px] font-bold">${data.name}</h1>
            <p class="text-gray-600">${data.speciality.name} <small class="border rounded-full px-2 ms-2 mt-3 mb-3">${data.exp} years</small></p>
            <p class="text-[15px] text-gray-600 font-bold mb-2">${data.degree}</p>
            <p class="font-bold text-[15px]">About : </p>
            <div id="about" class="w-[350px] border p-2 my-2 border-gray-200 rounded-lg">
                ${data.about}
            </div>
            <p class="mb-2">Appointment fees : <span class="font-semibold">$ ${data.fee}</span></p>
            <p class="mb-2">Phone : <span class="font-semibold">${data.phone}</span></p>
            <input type="checkbox" id="check">
            <span class="ms-2">Available</span><br>
            <button type="button" id="btn" class="mt-3 bg-green-500 cursor-pointer rounded-lg text-white px-3">Save</button>
        `
        div.appendChild(img);
        show_box.appendChild(div);
        div.appendChild(info_box);

        const checkBox = div.querySelector("#check");
        const btn = div.querySelector("#btn");

        btn.addEventListener("click", () => {
            if(checkBox.checked){
                fetch(`${available_api}/${doc_id}`, {
                    method: 'PUT',
                    body: JSON.stringify(
                        {
                            'available': 1
                        }
                    ),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(data => {
                    window.alert('successfully saved...');
                    console.log(data);
                });
            }else {
                fetch(`${available_api}/${doc_id}`, {
                    method: 'PUT',
                    body: JSON.stringify(
                        {
                            'available': 0
                        }
                    ),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                });
            }
        });
    })
    .catch(msg => console.error(msg));
})

let appointments = document.querySelector("#appointments");
const doc_appointments_api = "https://3ce353abbeccd1.lhr.life/api/doc_appointments";
const action_api = "https://3ce353abbeccd1.lhr.life/api/make_action";
let btnBox;
let btnBox2;

appointments.addEventListener('click', () => {
    show_box.textContent = "";

    let div = document.createElement('div');
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let cardBox = document.createElement('div');
    let title = document.createElement('h1');
    title.textContent = "All Appointments";
    title.classList.add('font-bold', 'text-[20px]', 'mb-5')
    
    tbody.classList.add('divide-y');
    table.classList.add('w-[100%]', 'bg-white', 'overflow-x-auto');
    div.classList.add('overflow-scroll', 'h-[500px]', 'hidden', 'lg:block');
    cardBox.classList.add("lg:hidden");
    
    thead.innerHTML = `
        <tr class="text-left border-b border-gray-200">
            <th class="py-2 px-3">#</th>
            <th>Patient</th>
            <th>Payment</th>
            <th>Age</th>
            <th>Date&Time</th>
            <th>Fees</th>
            <th>Action</th>
        </tr>
    `
    fetch(`${doc_appointments_api}/${doc_id}`, {method: 'GET'})
    .then(res => res.json())
    .then(result => {
        console.log(result);
        let count = 1;
        
        result.data.forEach(element => {
            let card = document.createElement('div');
            card.classList.add('border-2', 'border-gray-500', 'shadow-lg', 'p-2', 'my-5', 'rounded-lg', 'flex')

            let tr = document.createElement('tr');
            tr.classList.add('border-b', 'border-gray-200',"odd:bg-gray-100",);
            let box1 = document.createElement('div');
            let box2 = document.createElement('div');
            box1.classList.add('w-[100%]','p-1');
            box2.classList.add('w-[100%]', 'p-1', 'text-end', 'text-green-600');

            if(element.action == null) {
                    box2.innerHTML = `
                            <div class="flex gap-4 items-center justify-end" id="btn_box2">
                                    <div>
                                        <button type="button" onclick="deny(${element.id})" class="w-[30px] h-[30px] outline-2 outline-red-600 cursor-pointer rounded-full hover:bg-red-600 hover:text-white text-red-500">
                                            <i class="fa-solid fa-xmark"></i>
                                        </button>
                                    </div>

                                    <div>
                                        <button type="button" onclick="accept(${element.id})" class="w-[30px] h-[30px] outline-2 outline-green-600 cursor-pointer rounded-full hover:bg-green-600 hover:text-white text-green-500">
                                            <i class="fa-solid fa-check"></i>
                                        </button>
                                    </div>
                            </div>
                        `
            }else if(element.action == 1) {
                box2.innerHTML = `
                    <div class="flex flex-row justify-end">
                        <div class="py-1 px-3 border rounded-lg outline-2 w-[80px] text-center outline-green-500 text-green-500">
                            <h1>accept</h1>
                        </div>
                    </div>
                `
            }else {
                box2.innerHTML = `
                    <div class="flex flex-row justify-end">
                        <div class="py-1 px-3 border rounded-lg outline-2 w-[80px] text-center outline-red-500 text-red-500">
                            <h1>cancel</h1>
                        </div>
                    </div>
                `
            }

            
            let age = getAge(element.user.birthday);

            let img = document.createElement('img');
            img.setAttribute('src', `https://3ce353abbeccd1.lhr.life${element.user.image}`);
            img.classList.add('w-[150px]', 'rounded-lg', 'h-[100px]');

            let name = document.createElement('div');
            name.classList.add('font-bold', 'text-[16px]');
            name.textContent = `Name : ${element.user.name}`;

            let userAge = document.createElement('div');
            userAge.classList.add('font-bold', 'text-[14px]');
            userAge.textContent = `Age : ${age}`;

            let paymentBox = document.createElement('div');
            paymentBox.classList.add('font-bold', 'text-[14px]')

            let payment = null;

            if(element.payment == null) {
                payment = " - - - ";
                paymentBox.textContent = `Payment : not chosen`;
            }else{
                payment = "Online";
                paymentBox.textContent = "Payment : online";
            }

            let date = document.createElement('div');
            date.classList.add('font-bold', 'text-[14px]')
            date.textContent = `Date & time : ${element.date} ${element.month} ${element.year}, ${element.time}`;

            let fees = document.createElement('div');
            fees.classList.add('font-bold', 'text-[14px]')
            fees.textContent = `Fees : $ ${element.doctor.fee}`;

            tr.innerHTML = 
            `
                <td class="py-4 ps-3">${count++}</td>
                <td>
                    <div class="flex items-center gap-3">
                            <img class="w-[40px] h-[40px] rounded-full" src="https://3ce353abbeccd1.lhr.life${element.user.image}" alt="image">
                            <small class="font-bold text-[13px]">${element.user.name}</small>
                    </div>
                </td>
                <td>${payment}</td>
                <td>${age}</td>
                <td>${element.date} ${element.month} ${element.year}, ${element.time}</td>
                <td>${element.doctor.fee}</td>
            `

            if(element.action == null){
                let td = document.createElement('td');
                td.innerHTML = `
                    <div class="flex gap-4 items-center" id="btn_box">
                        <div>
                            <button type="button" onclick="deny(${element.id})" class="w-[30px] h-[30px] outline-2 outline-red-600 cursor-pointer rounded-full hover:bg-red-600 hover:text-white text-red-500">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <div>
                            <button type="button" onclick="accept(${element.id})" class="w-[30px] h-[30px] outline-2 outline-green-600 cursor-pointer rounded-full hover:bg-green-600 hover:text-white text-green-500">
                                <i class="fa-solid fa-check"></i>
                            </button>
                        </div>
                    </div>
                `
                tr.appendChild(td);
            }else if(element.action == 1){
                let td = document.createElement('td');
                td.innerHTML = `
                    <div class="py-1 px-3 rounded-lg outline-2 w-[80px] text-center outline-green-500 text-green-500">
                        <h1>accept</h1>
                    </div>
                `
                tr.appendChild(td);
            }else {
                let td = document.createElement('td');
                td.innerHTML = `
                    <div class="py-1 px-3 rounded-lg outline-2 w-[80px] text-center outline-red-500 text-red-500">
                        <h1>cancel</h1>
                    </div>
                `
                tr.appendChild(td);
            }

            tbody.appendChild(tr);
            cardBox.appendChild(card);
            card.appendChild(box1);
            card.appendChild(box2);
            box1.appendChild(img);
            box1.appendChild(name);
            box1.appendChild(userAge);
            box1.appendChild(paymentBox);
            box1.appendChild(date);
            box1.appendChild(fees);
        });
    });

    show_box.appendChild(title);
    show_box.appendChild(div);
    div.appendChild(table);
    show_box.appendChild(cardBox);
    table.appendChild(thead);
    table.appendChild(tbody);
});

function getAge(birthday) {
    const birth = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();

    return age;
}

function deny(id) {
    change_action(id, 2, action_api);
    window.alert('you canceled the appointment.');
    location.reload();
}

function accept(id) {
    change_action(id, 1, action_api);
    window.alert('you accepted the appointment.');
    location.reload();
}

async function change_action(id, num , api) {
    try {

        let response = await fetch(`${api}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(
                {
                    'action' : num
                }
            ),
            headers: {
                "Content-Type": "application/json"
            }
        })

        let data = await response.json();
        console.log(data);

    }catch(msg){
        console.error(msg);
    }
}

window.onload = () => {
    dashboard.onclick();
}

const dashboard = document.querySelector("#dashboard");

dashboard.onclick = () => {
    show_box.textContent = "";
    let div = document.createElement("div");
    div.classList.add("flex", 'flex-wrap', 'gap-6', 'px-5', 'py-3')

    div.innerHTML = `
        <div class="p-4 bg-white w-[250px] flex gap-5">
            <i class="fa-solid fa-sack-dollar text-[70px]" style="color: rgb(8, 84, 208);" ></i>
            <div>
                <h1 class="text-gray-600 font-bold text-[18px]">Earnings</h1>
                <h1 id="total_earnings"></h1>
            </div>
        </div>

        <div class="p-4 bg-white w-[250px] flex gap-5">
            <i class="fa-solid fa-book text-[70px]" style="color: rgb(8, 84, 208);"></i>
            <div>
                <h1 class="text-gray-600 font-bold text-[18px]">Appointments</h1>
                <h1 id="total_appointment"></h1>
            </div>
        </div>

        <div class="p-4 bg-white w-[250px] flex gap-5">
            <i class="fa-solid fa-users text-[70px]" style="color: rgb(8, 84, 208);"></i>
            <div>
                <h1 class="text-gray-600 font-bold text-[18px]">Users</h1>
                <h1 id="total_users"></h1>
            </div>
        </div>
    `

    let latestBox = document.createElement('div');
    latestBox.innerHTML = `
        <div class=" bg-white sm:w-[60%] ms-5 mt-5 mb-5" id="home_page2">
            <div id="label" class="border-b-2 border-gray-300 py-3 px-5 flex items-center gap-4">
                <i class="fa-regular fa-calendar-days text-[50px]" style="color: rgb(8, 84, 208);"></i>
                 <h1 class="font-bold text-[18px] text-gray-600">Latest Bookings</h1>
            </div>

            <div id="latest"></div>
        </div>
    `

    loadAllData();
    show_box.appendChild(div);
    show_box.appendChild(latestBox);
}

const user_api = "https://3ce353abbeccd1.lhr.life/api/get_user";
const latest_api = "https://3ce353abbeccd1.lhr.life/api/latest_appointments";

async function loadAllData() {
    
    const [docEarnings, totalUsers] = await Promise.all([
        fetch(`${doc_api}/${doc_id}`, {method: 'GET'})
        .then(res => res.json()),
        fetch(`${user_api}/${doc_id}`, {method : 'GET'})
        .then(res => res.json())
    ]);
    console.log(docEarnings);
    console.log(totalUsers);

    const total_earnings = document.querySelector("#total_earnings");
    const total_appointment = document.querySelector("#total_appointment");
    const total_users = document.querySelector("#total_users");

    showEarnings(docEarnings.earnings,total_earnings);
    showAppointments(docEarnings.appointments, total_appointment);
    showUsers(totalUsers.user, total_users);

    const latest = document.querySelector("#latest");
    fetch(`${latest_api}/${doc_id}`, {method: 'GET'})
    .then(res => res.json())
    .then(data => latestAppointments(data, latest));
}

function latestAppointments(result,show) {
    console.log(result);

    result.data.forEach(element => {
        console.log(element);
        let div = document.createElement('div');
        let img = document.createElement('img');
        let info = document.createElement('div');
        let name = document.createElement('h1');
        let time = document.createElement('h1');
        let action = document.createElement('div');

        div.classList.add('py-4', 'px-5', 'item-center', 'gap-5', 'md:flex');
        img.setAttribute('src', `https://3ce353abbeccd1.lhr.life${element.user.image}`);
        img.setAttribute('width','50');
        img.classList.add('rounded-full','bg-blue-50');

        action.classList.add('text-end','flex-grow-1');
        let badge = document.createElement('span');

        if(element.action == 1) {
            badge.style.color = "green";
            badge.textContent = "Completed";
        }else if(element.action == 2) {
            badge.style.color = "red";
            badge.textContent = "Canceled";
        }
        
        name.textContent = element.user.name;
        time.textContent = `Booking on ${element.date} ${element.month} ${element.year}`

        div.appendChild(img);
        info.appendChild(name);
        info.appendChild(time);
        div.appendChild(info);
        show.appendChild(div);
        div.appendChild(action);
        action.appendChild(badge);
    });
}

function showEarnings(data, total_earnings) {
    animateEarningsCount(data, total_earnings);
}

function showAppointments(data, total_appointment){
    animateCount(data.length, total_appointment);
}

function showUsers(data, total_users) {
    animateCount(data, total_users);
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

function animateEarningsCount(total, element) {
    let count = 0;
    const interval = setInterval(() => {
        element.textContent = `$ ${count}`;
        element.classList.add('font-bold', 'text-[25px]', 'text-gray-500');
        count++;
        if(count > total) clearInterval(interval);
    }, 1);
}
