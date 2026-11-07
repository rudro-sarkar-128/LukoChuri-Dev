
const passShowHideBtn = document.getElementById("pass_showhide_btn");
const passShowHideBtnC = document.getElementById("pass_showhide_btn_c");

const passwordInp = document.getElementById("passwd");
const passwordInpC = document.getElementById("cnfpasswd");

passShowHideBtn.addEventListener('click', () => {
    if (passwordInp.type == 'password') {
        passwordInp.type = 'text';
        let hideIcon = document.createElement('i');
        hideIcon.classList.add('fa-regular', 'fa-eye-slash', 'pass-showhide-btn');
        passShowHideBtn.innerHTML = "";
        passShowHideBtn.appendChild(hideIcon);
    } else if (passwordInp.type == 'text') {
        passwordInp.type = 'password';
        let showIcon = document.createElement('i');
        showIcon.classList.add('fa-regular', 'fa-eye', 'pass-showhide-btn');
        passShowHideBtn.innerHTML = "";
        passShowHideBtn.appendChild(showIcon);
    }
});

passShowHideBtnC.addEventListener('click', () => {
    if (passwordInpC.type == 'password') {
        passwordInpC.type = 'text';
        let hideIcon = document.createElement('i');
        hideIcon.classList.add('fa-regular', 'fa-eye-slash', 'pass-showhide-btn');
        passShowHideBtnC.innerHTML = "";
        passShowHideBtnC.appendChild(hideIcon);
    } else if (passwordInpC.type == 'text') {
        passwordInpC.type = 'password';
        let showIcon = document.createElement('i');
        showIcon.classList.add('fa-regular', 'fa-eye', 'pass-showhide-btn');
        passShowHideBtnC.innerHTML = "";
        passShowHideBtnC.appendChild(showIcon);
    }
});

