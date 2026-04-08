const list_group = document.querySelector(".list-group");
const check_available = document.querySelector("#available");
const text_availbale = document.querySelector("#available_text");
const doc_name = document.querySelector("#doc_name");
const doc_speciality = document.querySelector("#doc_speciality");

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
        const admin_panel = document.querySelector("#admin_panel");
        if (isLoggedIn) {
            accountBtn.classList.add('hidden');
            profileSection.classList.remove('hidden');
            admin_panel.classList.remove("hidden");

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

        slideDropDown.addEventListener('click', () => {
            slideDropItem.classList.toggle('slideDrop');
        })

        dropDown.addEventListener('click', () => {
            dropItem.classList.toggle('drop');
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

const del_api = "http://127.0.0.1:8000/api/delOldAppointments";

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
const api = "http://docbooking.infinityfreeapp.com//api/paginateDoc";

available();

const doc_list = document.querySelector("#doctors_list")

async function available() {
    try{

        let response = await fetch(api, {
            method: "GET"
        });

        if(!response.ok){
            throw new Error("You cann't fetch data");
        }

        let get = await response.json();
        // console.log(data);

        get.data.forEach(doc => {
            console.log(doc);
            let div = document.createElement('div');
            div.classList.add('border', 'border-blue-500','rounded-lg', 'cursor-pointer', 'overflow-hidden', 'hover:translate-y-[-8px]', 'transition', 'duration-100', 'shadow-lg', 'm-auto','sm:w-[100%]');

            if(doc.available == 1){
                div.innerHTML = `
                    <a href="../html/doc_detail.html?doc_id=${doc.id}">
                        <img src="http://127.0.0.1:8000${doc.image}" alt="doc-1" class="w-[100%] h-70 object-cover bg-blue-200">
                        <div class="flex justify-start items-center ms-2 mt-5 mb-2">
                            <i id="available" class="bi bi-circle-fill text-green-400 text-[10px]"></i>
                            <p id="available_text" class="text-[14px] ms-2 text-green-700">Available</p>
                        </div>
                        <p id="doc_name" class="text-left ms-2 font-bold text-[18px]">${doc.name}</p>
                        <p id="doc_speciality" class="mb-5 text-left ms-2 text-gray-500">${doc.speciality.name}</p>
                    </a>
                `
                doc_list.appendChild(div);
            }else{
                div.innerHTML = `
                    <a href="../html/doc_detail.html?doc_id=${doc.id}">
                        <img src="http://127.0.0.1:8000${doc.image}" alt="doc-1" class="w-[100%]">
                        <div class="flex justify-start items-center ms-2 mt-5 mb-2">
                            <i class="bi bi-circle-fill text-red-400 text-[10px]"></i>
                            <small class="text-[14px] ms-2 text-red-700">Unavailable</small>
                        </div>
                        <p id="doc_name" class="text-left ms-2 font-bold text-[18px]">${doc.name}</p>
                        <p id="doc_speciality" class="mb-5 text-left ms-2 text-gray-500">${doc.speciality.name}</p>
                    </a>
                `
                doc_list.appendChild(div);
            }
        });

    }catch(error){
        console.error(error);
    }
}

fetch('../html/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-box').innerHTML = data;
      });