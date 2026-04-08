const form = document.querySelector("form");
const show = document.querySelector("#show-box");
const loading = document.querySelector("#loader");

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

      });

const api = "https://3ce353abbeccd1.lhr.life/api/doctor_login";

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    e.currentTarget.reset();

    submit(api, email, password);
});

async function submit(api, email, password) {
    try {

        let response = await fetch(api, {
            method: 'POST',
            body: JSON.stringify(
                {
                    'email' : email,
                    'password' : password
                }
            ),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(!response.ok && response.status == 422) {
            const errorData = await response.json();
            console.log(errorData);
            throw errorData;
        }
        
        let data = await response.json();
        console.log(data);

        if(data.email_failed) {
            let li = document.createElement('li');

            show.classList.add('border', 'border-red-600', 'border-3', 'bg-red-200', 'text-red-700')
            li.classList.add('mx-5');
            li.textContent = data.email_failed;

            show.appendChild(li);
            setTimeout(() => {
                location.reload();
            }, 3000)
        }

        if(data.pwd_failed){
            let li = document.createElement('li');

            show.classList.add('border', 'border-red-600', 'border-3', 'bg-red-200', 'text-red-700')
            li.classList.add('mx-5');
            li.textContent = data.pwd_failed;

            show.appendChild(li);
            setTimeout(() => {
                location.reload();
            }, 3000)
        }

        if(data.login_failed){
            let li = document.createElement('li');

            show.classList.add('border', 'border-red-600', 'border-3', 'bg-red-200', 'text-red-700')
            li.classList.add('mx-5');
            li.textContent = data.login_failed;

            show.appendChild(li);
            setTimeout(() => {
                location.reload();
            }, 3000)
        }

        if(data.success){
            let li = document.createElement('li');

            show.classList.add('border', 'border-green-600', 'border-3', 'bg-green-200', 'text-green-700')
            li.classList.add('mx-5');
            li.textContent = " WELCOME Doctor 🔓🗝️";
            document.querySelector("#btn").textContent = "";
            document.querySelector("#btn").textContent = "Loading";
            
            loading.style.display = "block";
            show.appendChild(li);
            localStorage.setItem('doctor_login', 'true');

            setTimeout(() => {
                window.location.href = `doctor_page.html?id=${data.doctor.id}`;
            }, 3000)
        }

    }catch(msg){
        if(msg.errors.email){
            for(let i = 0; i < msg.errors.email.length; i++){
                let li = document.createElement('li');

                show.classList.add('border', 'border-red-600', 'border-3', 'bg-red-200', 'text-red-700')
                li.classList.add('mx-5');
                li.textContent = msg.errors.email[i];

                show.appendChild(li);
                setTimeout(() => {
                    location.reload();
                }, 3000)
            }
        }

        if(msg.errors.password){
            for(let i = 0; i < msg.errors.password.length; i++){
                let li = document.createElement('li');

                show.classList.add('border', 'border-red-600', 'border-3', 'bg-red-200', 'text-red-700')
                li.classList.add('mx-5');
                li.textContent = msg.errors.password[i];

                show.appendChild(li);
                setTimeout(() => {
                    location.reload();
                }, 3000)
            }
        }
    }
}