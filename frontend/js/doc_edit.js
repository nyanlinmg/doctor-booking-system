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
        const slide_adminPanel = document.querySelector("#slide #admin_panel");
        const slide_accbtn = document.querySelector("#slide #account");

        let isAdminLogin = localStorage.getItem('admin_login');

        if(isAdminLogin){
            nav_link.classList.remove('md:flex');
            nav_name.classList.remove('hidden');
            nav_name.classList.add('me-auto', 'ms-8', 'border', 'py-1', 'px-4', 'rounded-full');
            nav_name.textContent = "Admin";

            slide_nav_link.classList.remove('md:flex');
            slide_nav_name.classList.remove('hidden');
            slide_nav_name.classList.add('border', 'py-1', 'px-4', 'mb-5', 'text-center');
            slide_nav_name.textContent = "Admin";
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
            accountBtn.classList.add('hidden');
            profileSection.classList.remove('hidden');

             slideAccBtn.classList.add('hidden');
            slideProfileSection.classList.remove('hidden');
        }

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

const doc_api = "https://3748e8650932be77-210-14-107-177.serveusercontent.com/api/home";

const choose_doc = document.querySelector("#choose");
const form = document.querySelector('#chooseForm');
const box = document.querySelector("#edit_box");

fetch(doc_api, {method: 'GET'})
.then(response => response.json())
.then(data => {
    data.forEach(doc => {
        let opt = document.createElement('option');
        opt.textContent = doc.name;
        opt.setAttribute('value', doc.id);
        choose_doc.appendChild(opt);
    });
})
.catch(error => console.log(error));

form.addEventListener('submit', async e => {
    e.preventDefault();

    box.classList.remove('hidden');

    try {

        let response = await fetch(`${doc_api}/${choose_doc.value}`, {method: 'GET'});

        let data = await response.json();
        console.log(data);

        document.querySelector("#name").value = data.name;
        document.querySelector("#email").value = data.email;
        document.querySelector("#degree").value = data.degree;
        document.querySelector("#phone").value = data.phone;
        document.querySelector("#fees").value = data.fee;
        document.querySelector("#hospital").value = data.hospital;
        document.querySelector("#about").value = data.about;
 
    }catch(msg) {
        console.error(msg);
    }

})

const btn = document.querySelector("#editBtn");

btn.addEventListener('click', (e) => {
    e.preventDefault();

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

    editDoc(doc_api, name, speciality, email, degree, password, exp, fees, about, image, phone, hospital, available);

})

async function editDoc(doc_api, name, speciality, email, degree, password, exp, fees, about, image, phone, hospital, available) {
    
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

        formData.append('_method', 'PUT');

        let response = await fetch(`${doc_api}/${choose_doc.value}`, {
            method: 'POST',
            body: formData
        })

        let data = await response.json();
        window.alert("Successfully edited...");
        location.reload();
        
    } catch(msg){
        console.error(msg);
    }
}