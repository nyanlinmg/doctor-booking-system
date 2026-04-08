const form = document.querySelector("form");
const btn = document.querySelector("#edit_btn");

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

        const slideAccBtn = document.querySelector('#slide #account');
        const slideProfileSection = document.querySelector("#slide #profile-section");
        const admin_panel = document.querySelector("#admin_panel");

        const accountBtn = document.getElementById('account');
        const profileSection = document.getElementById('profile-section');
        let isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
            accountBtn.classList.add('hidden');
            profileSection.classList.remove('hidden');
            admin_panel.classList.remove("hidden");

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

const api = "https://3ce353abbeccd1.lhr.life/api/create";

const urlParams = new URLSearchParams(window.location.search);
const user_id = urlParams.get('id');

fetch(`${api}/${user_id}`,{method: 'GET'})
.then(response => response.json())
.then(
    data => {
        document.querySelector("#fullName").value = data.user.name;
        document.querySelector("#email").value = data.user.email;
        document.querySelector("#address").value = data.user.address;
        document.querySelector("#phone").value = data.user.phone;
    }
)

btn.addEventListener('click', e => {
    e.preventDefault();

    const fullName = document.querySelector("#fullName").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const gender = document.querySelector("#gender").value;
    const address = document.querySelector("#address").value;
    const phone = document.querySelector("#phone").value;
    const date = document.querySelector("#date").value;
    const image = document.querySelector("#image").files[0];

    edit_user(api,fullName,email,password,gender,address,phone,date,image,user_id);
})

async function edit_user(api,fullName,email,password,gender,address,phone,date,image,user_id) {
    
    try{

        const formData = new FormData();
        formData.append('name', fullName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('gender', gender);
        formData.append('address', address);
        formData.append('phone', phone);
        formData.append('birthday', date);
        
        if (image) {
            formData.append('image', image);
        }

        formData.append('_method', 'PUT');

        let response = await fetch(`${api}/${user_id}`, {
            method: 'POST',
            body: formData
        });

        console.log(response);

        if(!response.ok && response.status == 422){
            const errorData = await response.json();
            throw errorData;
        }

        let data = await response.json();

        console.log(data);

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('login', 'true');
        localStorage.setItem('id', data.user.id);

        window.alert("Successfully edited");
        window.location.href = `profile.html?id=${data.user.id}`;

    }catch(msg){
        window.alert(msg.errors.password[0]);
    }
}

fetch('../html/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-box').innerHTML = data;
      });