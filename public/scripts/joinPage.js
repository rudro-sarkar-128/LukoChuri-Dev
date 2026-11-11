
// Pass Showhide Buttons
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

// SSO Buttons
const googleSSOBtn = document.getElementById("google_sso_btn");
const appleSSOBtn = document.getElementById("apple_sso_btn");
const facebookSSOBtn = document.getElementById("facebook_sso_btn");

const SSOButtons = document.querySelectorAll(".sso-cont div");

// TOC Agreement Check
const tocChkbox = document.getElementById("toc_chkbox");

tocChkbox.addEventListener('change', () => {
    SSOButtons.forEach(button => {
        button.classList.toggle("active", this.checked);
    });
});

SSOButtons.forEach(button => {
    button.addEventListener('click', e => {
        if (!button.classList.contains('active')) {
            handleNonTocClick();
            return;
        } else {
            handSSOClick(button.id);
            return;
        }
    });
});

const handSSOClick = which => {
    switch (which) {
        case "google_sso_btn":
            window.location.href = "/";  // CHANGEEEEEEEEEEEEEEEEE
            break;
        case "apple_sso_btn":
            alert("Under Development!"); // CHANGEEEEEEEEEEEEEEEEE
            break;
        case "facebook_sso_btn":
            alert("Under Development!"); // CHANGEEEEEEEEEEEEEEEEE
            break;
        default:
            break;
    }
}

const handleNonTocClick = () => {
    alert("Must Agree to TOC!"); // CHANGEEEEEEEEEEEEEEEEE
}