
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
        const admin_panel = document.querySelector("#admin_panel");

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

const api = "http://127.0.0.1:8000/api/create";

const urlParams = new URLSearchParams(window.location.search);
const user_id = urlParams.get('id');

fetch(`${api}/${user_id}`, {method: 'GET'})
.then(response => response.json())
.then(
    data => {
        console.log(data);
        console.log(data.image_url);
        document.querySelector("#image").setAttribute('src', `http://127.0.0.1:8000${data.image_url}`);

        document.querySelector("#userName").textContent = data.user.name;
        document.querySelector("#email").innerHTML = `
            Email : <b style="color: gray;">${data.user.email}</b>
        `;
        document.querySelector("#phone").innerHTML = `
            Phone : <b style="color: gray;">${data.user.phone}</b>
        `;
        document.querySelector("#address").innerHTML = `
            Address : <b style="color: gray;">${data.user.address}</b>
        `;

        document.querySelector("#gender").innerHTML = `
            Gender : <b style="color: gray;">${data.user.gender}</b>
        `;
        document.querySelector("#birthday").innerHTML = `
            Birthday : <b style="color: gray;">${data.user.birthday}</b>
        `;
    }
)

const edit = document.querySelector("#edit_btn");

edit.onclick = () => {
    let userID = localStorage.getItem('id');
    edit.setAttribute('href', `../html/edit.html?id=${userID}`);
}

fetch('../html/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-box').innerHTML = data;
      });