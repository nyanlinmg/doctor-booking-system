
const urlParams = new URLSearchParams(window.location.search);
const user_id = urlParams.get('user_id');

const api = "https://3748e8650932be77-210-14-107-177.serveusercontent.com/api/make";
if(user_id){
    get_appointment(user_id,api);
}

async function get_appointment(id,api) {
    try{
        const show = document.querySelector("#show_appointment");

        let response = await fetch(`${api}/${id}`, {method: 'GET'});

        if(!response.ok){
            throw new Error("You can't fetch data..");
        }

        let getData = await response.json();
        console.log(getData);

        if(getData.no_data){
            show.textContent = getData.no_data;
            show.classList.add('mt-4','text-[18px]', 'text-red-400')
            return;
        }

        getData.data.forEach(element => {
            let div = document.createElement('div');
            let img = document.createElement('img');
            let doc_info = document.createElement('div');
            let name = document.createElement('h1');
            let degree = document.createElement('h1');
            let speciality = document.createElement('h1');
            let email = document.createElement('h1');
            let phone = document.createElement('h1');
            let fee = document.createElement('h1');
            let time = document.createElement('h1');
            let div2 = document.createElement('div');
            let del_btn = document.createElement('button');
            let waitingBox = document.createElement('div');
            let loader = document.createElement('span');
            let error;


            if(element.action == null){
                waitingBox.classList.add('border','p-1', 'justify-center', 'text-center', 'text-white', 'rounded-lg', 'mb-3', 'flex', 'items-center', 'bg-blue-500');
                waitingBox.innerHTML = `
                    <h1 class="text-white">Waiting response...</h1>
                    <div id="loader" class="loader mb-2 ms-2"></div>
                `;
            }else if(element.action == 1) {
                waitingBox.classList.add('border','p-1', 'justify-center', 'text-center', 'text-blue-600', 'rounded-lg', 'mb-3', 'flex', 'items-center', 'bg-white', 'cursor-pointer', 'border-2', 'border-blue-500', 'hover:bg-blue-500', 'hover:text-white', 'transition', 'duration-500', 'hover:shadow-lg', 'hover:shadow-blue-500');
                waitingBox.innerHTML = `
                    <h1>Pay Online</h1>
                `;
                waitingBox.onclick = function hello() {
                    console.log("hello");
                    document.querySelector("#backDrop").classList.remove('hidden');
                    
                    let modal = document.querySelector("#modal");
                    modal.classList.add('w-[300px]', 'sm:w-[500px]', 'md:w-[600px]')
                    modal.style.visibility = "visible";
                    modal.style.opacity = "1";
                    modal.style.top = "30%";

                    document.querySelector("#backDrop").addEventListener('click', () => {
                        document.querySelector("#backDrop").classList.add('hidden');
                        modal.style.visibility = "hidden";
                        modal.style.opacity = "0";
                        modal.style.top = "-130%";
                    });

                    modal.innerHTML = `
                        <h1 class="font-bold text-[18px] border-b border-black pb-4">Payment Section
                            <span id="remove" class="float-end text-red-600 border-1 cursor-pointer transition-all duration-300 hover:bg-red-600 hover:border-0 hover:text-white border-r-red-600 px-1">
                                <i class="fa-solid fa-xmark"></i>
                            </span>
                        </h1>
                        <div class="mt-4 mb-5 flex gap-5 flex-wrap">
                            <img onclick="showPayBox()" src="../images/kpay.jpeg" alt="kpay" class="w-[30px] hover:translate-y-[-5px] transition-all duration-150 cursor-pointer">
                            <img onclick="showPayBox()" src="../images/wave_pay.png" alt="kapy" class="w-[100px] hover:translate-y-[-5px] transition-all duration-150 cursor-pointer">
                            <img onclick="showPayBox()" src="../images/aya.png" alt="kapy" class="w-[100px] hover:translate-y-[-5px] transition-all duration-150 cursor-pointer">
                            <img onclick="showPayBox()" src="../images/uab.jpeg" alt="kapy" class="w-[50px] h-[30px] object-cover hover:translate-y-[-5px] transition-all duration-150 cursor-pointer">
                            <img onclick="showPayBox()" src="../images/cb.png" alt="kapy" class="w-[50px] hover:translate-y-[-5px] transition-all duration-150 cursor-pointer">
                        </div>
                        <div class="hidden" id="payBox">
                            <h1 id="show_fees" class="mb-3 font-bold">Fees : $ ${element.doctor.fee}</h1>
                            <label for="amount" class="text-black font-bold w-[100%]">Enter amount :</label><br>
                            <input type="number" id="amount" name="number" class="border rounded-lg w-[80%] sm:w-[60%] md:w-[50%] p-1 mt-2"><br>
                            <button type="button" onclick="payAmount(${element.id}, ${element.doctor.fee}, ${element.doctor.id})" class="bg-blue-500 px-3 py-2 mt-3 rounded-xl w-[100px] cursor-pointer text-white">Send</button>
                        </div>
                    `
                    document.querySelector("#remove").addEventListener('click', () => {
                        document.querySelector("#backDrop").classList.add('hidden');
                        modal.style.visibility = "hidden";
                        modal.style.opacity = "0";
                        modal.style.top = "-130%";
                    });
                }
            }else {
                waitingBox.classList.add('bg-red-500', 'text-center', 'text-white', 'p-2', 'text-[18px]', 'mb-3', 'rounded-lg');
                waitingBox.innerHTML = `
                    <h1>Denied</h1>
                `;
                error = document.createElement('h1');
                error.classList.add('text-red-600', 'mb-2')
                error.textContent = "Your appointment has been denied by doctor , so this appointment will be deleted in 5 minutes....(Don't forget to refresh the page)";

                setTimeout(() => {
                    del(element.id,api)
                }, 300000);

                doc_info.appendChild(error);
            }

            div2.classList.add('p-3', 'w-[300px]', 'md:w-[500px]', 'lg:w-[360px]' , 'flex', 'flex-col', 'justify-end');
            del_btn.classList.add('border-2','border-red-500', 'w-[100%]', 'p-2' ,'rounded-lg', 'text-center', 'text-red-500', 'cursor-pointer', 'font-bold', 'hover:border-0', 'hover:bg-red-500', 'hover:text-white', 'transition', 'duration-500', 'hover:shadow-red-400', 'hover:shadow-lg');
            del_btn.textContent = "Delete Appointment";
            del_btn.setAttribute('type', 'button');

            del_btn.addEventListener('click', () => {
                let confirm = window.confirm("Are u sure ?");
                
                if(confirm){
                    del(element.id,api);
                }
            });

            div.classList.add('border-b-gray-400', 'border-b-2', 'py-4', 'block', 'gap-3' ,'md:flex')

            img.setAttribute('src', `https://3748e8650932be77-210-14-107-177.serveusercontent.com${element.doctor.image}`);
            img.classList.add('w-[200px]', 'bg-blue-100',)
            doc_info.classList.add('w-[100%]', 'py-1');
            name.textContent = element.doctor.name;
            name.classList.add('font-bold', 'text-[18px]')
            degree.textContent = element.doctor.degree;
            degree.classList.add('font-semibold');
            speciality.textContent = element.doctor.speciality.name;
            speciality.classList.add('font-bold', 'text-gray-600');
            email.textContent = element.doctor.email;
            email.classList.add('mt-1');
            phone.textContent = element.doctor.phone;
            phone.classList.add('mt-1');
            fee.textContent = `fee : $ ${element.doctor.fee}`;
            fee.classList.add('mt-2', 'font-semibold');
            time.textContent = `date & time : ${element.date} ${element.day} , ${element.month} ${element.year} | ${element.time}`;
            time.classList.add('mt-1', 'font-semibold')

            let success = document.createElement('div');

            if(element.payment == 1){
                waitingBox.classList.add('hidden');

                success.classList.add( 'mb-3', 'bg-green-500', 'text-center', 'text-white', 'rounded-lg', 'p-2', 'text-[18px]');
                success.textContent = "Success";
            }

            show.appendChild(div);
            div.appendChild(img);
            div.appendChild(doc_info);
            div.appendChild(div2);
            doc_info.appendChild(name);
            doc_info.appendChild(degree);
            doc_info.appendChild(speciality);
            doc_info.appendChild(email);
            doc_info.appendChild(phone);
            doc_info.appendChild(fee);
            doc_info.appendChild(time);
            div2.appendChild(waitingBox);
            div2.appendChild(success);
            div2.appendChild(del_btn);
            waitingBox.appendChild(loader);
        });

    }catch(msg){
        console.log(msg);
    }
}

async function del(id,api) {
    try{
        let response = await fetch(`${api}/${id}`,{method: 'DELETE'});

        if(!response.ok){
            throw new Error("You can't fetch data");
        }

        let data = await response.json();

        if(data){
            window.alert('your appointment is permanently deleted...');
            location.reload();
        }

    }catch(error){
        console.error(error);
    }
}

function showPayBox(){
    let box = document.querySelector("#payBox");
    box.classList.remove('hidden');
}

function payAmount(id, fees, doc_id) {

    let amount = Number(document.querySelector("#amount").value);
    
    if(amount < fees) {
        window.alert(`Your amount is less than $ ${fees} ...`);
    }else if(amount > fees) {
        window.alert(`Your amount is exceed $ ${fees} , plz enter exact amount`);
    }else {

        let payment_api = "https://3748e8650932be77-210-14-107-177.serveusercontent.com/api/change_payment";
        let earnings_api = "https://3748e8650932be77-210-14-107-177.serveusercontent.com/api/change_earnings";

        fetch(`${payment_api}/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify({
                    'payment': 1
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

        fetch(`${earnings_api}/${doc_id}`, {
            method:'PUT',
            body: JSON.stringify({
                'amount' : amount
            }),
            headers : {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }

    document.querySelector("#amount").value = "";
    window.alert('Payment success');
    location.reload();
}

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
        let isLoggedIn = localStorage.getItem('isLoggedIn');

        const slideAccBtn = document.querySelector('#slide #account');
        const slideProfileSection = document.querySelector("#slide #profile-section");
        if (isLoggedIn) {
            accountBtn.classList.add('hidden');
            profileSection.classList.remove('hidden');

            slideAccBtn.classList.add('hidden');
            slideProfileSection.classList.remove('hidden');
        }

        let isAdminLogin = localStorage.getItem('admin_login');
        if(isAdminLogin){
            document.querySelector("#admin_link").classList.remove('hidden');
            document.querySelector("#slide #admin_link").classList.remove('hidden')
        }

        const logoutBtn = document.getElementById('logout-btn');
        const slide_logout = document.querySelector("#slide #logout-btn");

        logoutBtn.addEventListener('click', () => {
            profileSection.classList.add('hidden');
            accountBtn.classList.remove('hidden');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('login');
            localStorage.removeItem('admin_login');
            localStorage.removeItem('id');
        })

        slide_logout.onclick = () => {
            slideProfileSection.classList.add('hidden');
            slideAccBtn.classList.remove('hidden');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('login');
            localStorage.removeItem('admin_login');
            localStorage.removeItem('id');
        }

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

fetch('../html/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-box').innerHTML = data;
      });