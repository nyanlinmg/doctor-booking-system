const form = document.querySelector("form");
const show = document.querySelector(".show_after_create");

const api = "https://bd2c317f64074041-210-14-108-162.serveusercontent.com/api/create";

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
        const admin_panel = document.querySelector("#admin_panel");
        let isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
            accountBtn.classList.add('hidden');
            profileSection.classList.remove('hidden');
            admin_panel.classList.remove("hidden");
        }

        const logoutBtn = document.getElementById('logout-btn');
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
        dropDown.addEventListener('click', () => {
            dropItem.classList.toggle('drop');
        })

      });

form.onsubmit = e => {

    e.preventDefault();

    const fullName = document.querySelector("#fullName").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#pwd").value;
    const gender = document.querySelector("#gender").value;
    const address = document.querySelector("#address").value;
    const phone = document.querySelector("#phone").value;
    const date = document.querySelector("#date").value;
    const image = document.querySelector("#image").files[0];
    const role = Number(document.querySelector("#role").value);

    create(api,fullName,email,password,gender,address,phone,date,image,role);

    e.currentTarget.reset();
}

async function create(api, fullName, email, password, gender, address, phone, date, image,role) {
    
    try{

        const formData = new FormData();
        formData.append('name', fullName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('gender', gender);
        formData.append('address', address);
        formData.append('phone', phone);
        formData.append('birthday', date);
        formData.append('role',role);
        
        if (image) {
            formData.append('image', image);
        }

        let response = await fetch(api, {
            method: 'POST',
            body: formData
        });

        console.log(response);

        if(!response.ok && response.status == 422){
            const errorData = await response.json();
            console.log(errorData);
            throw errorData;
        }

        let data = await response.json();

        if(data.msg){
            show.classList.add('border', 'border-red-400', 'w-[400px]', 'm-auto', 'p-3', 'm-4', 'shadow-lg', 'rounded-lg', 'border-2', 'text-center', 'text-red-600', 'font-bold', 'bg-red-200');

            show.textContent = data.msg;
        }

        if(data.success){
            show.classList.add('border', 'border-green-400', 'w-[350px]', 'm-auto', 'p-3', 'm-4', 'shadow-lg', 'rounded-lg', 'border-2', 'text-center', 'text-green-600', 'font-bold', 'bg-green-200');

            localStorage.setItem('isLoggedIn', 'true');
            show.textContent = `${data.success} 💯🥳`;
            setTimeout(() => {
                location.reload();
                window.location.href = `login.html`;
            }, 4000)
        }

        console.log(data);

    }catch(msg){
        console.log(msg.errors.password);
        if(msg.errors.password){
            show.textContent = msg.errors.password[0];
            show.classList.add('border', 'border-red-400', 'w-[400px]', 'm-auto', 'p-3', 'm-4', 'shadow-lg', 'rounded-lg', 'border-2', 'text-center', 'text-red-600','font-bold', 'bg-red-200');
        }
    }
}

fetch('../html/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-box').innerHTML = data;
      });
