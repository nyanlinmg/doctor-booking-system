
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

const api = "http://127.0.0.1:8000/api/home";
const show_box = document.querySelector("#show_doc");
const speciality = document.querySelectorAll("#speciality");

fetch(api)
.then(response => response.json())
.then(data => create(data));

let doc_speciality_array = ["General physician","Gynecologist","Dermatologist","Pediatricians","Neurologist","Gastroenterologist"];

function create(data){

    const urlParams = new URLSearchParams(window.location.search);
    const doc_id = urlParams.get('id');

    if(doc_id){
        show(doc_id - 1);

        for(let i = 0; i < speciality.length; i++){
           if(i === doc_id - 1){
                speciality[i].classList.add('bg-blue-400','text-white');
           }
        }
        return;
    }

    for(let i = 0; i < data.length; i++){
            let card = document.createElement('div');
            let img = document.createElement('img');
            let h1 = document.createElement('h1');
            let name = document.createElement('h1');
            let doc_speciality = document.createElement('h1');
            console.log(data[i]);

            img.setAttribute('src', `http://127.0.0.1:8000${data[i].image}`);
            img.classList.add('w-[100%]', 'h-60' ,'object-cover' ,'bg-blue-200');
            card.classList.add('border', 'border-blue-500','rounded-lg', 'cursor-pointer', 'overflow-hidden', 'hover:translate-y-[-8px]', 'transition', 'duration-100', 'shadow-lg', 'm-auto','sm:w-[100%]');
            show_box.classList.add('grid', 'lg:grid-cols-4', 'gap-5', 'md:grid-cols-3', 'sm:grid-cols-2');
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

            show_box.appendChild(card);
            
    }
}

for(let i = 0; i < speciality.length; i++){
    speciality[i].addEventListener('click', () => {
        speciality.forEach(box => box.classList.remove('bg-blue-400', 'text-white'));

        speciality[i].classList.add('bg-blue-400', 'text-white');

        show_box.textContent = "";

        show(i);
     })
}

async function show(id) {
    const api = "http://127.0.0.1:8000/api/related_doctors";
    try{

        let response = await fetch(`${api}/${id+1}`, {method: "GET"});

        if(!response.ok){
            throw new Error("can't fetch data");
        }

        let data = await response.json();
        console.log(data);

        for(let i = 0; i < data.length; i++){
            let card = document.createElement('div');
            let img = document.createElement('img');
            let h1 = document.createElement('h1');
            let name = document.createElement('h1');
            let doc_speciality = document.createElement('h1');
            console.log(data[i]);

            img.setAttribute('src', `http://127.0.0.1:8000${data[i].image}`);
            img.classList.add('w-[100%]','h-60' ,'object-cover', 'bg-blue-200');
            card.classList.add('border', 'border-blue-500','rounded-lg', 'cursor-pointer', 'overflow-hidden', 'hover:translate-y-[-8px]', 'transition', 'duration-100', 'shadow-lg', 'w-[300px]', 'm-auto', 'sm:w-[100%]');
            show_box.classList.add('grid', 'lg:grid-cols-4', 'gap-5', 'md:grid-cols-3', 'sm:grid-cols-2');
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
            show_box.appendChild(card);
        }

    }catch(error){
        console.error(error);
    }
}

fetch('../html/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-box').innerHTML = data;
      });