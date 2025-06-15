document.addEventListener("DOMContentLoaded", function () {
    let passwordField = document.getElementById("txtPassword");
    if (passwordField) {   
        passwordField.addEventListener("copy", preventCopyPaste);
        passwordField.addEventListener("paste", preventCopyPaste);
        passwordField.addEventListener("cut", preventCopyPaste);
    }

        document.getElementById("captcha-refresh-btn").addEventListener("click", function () {
            captcha();
        });
  
        document.getElementById("txtPassword").addEventListener("change", function () {
            let salt = this.getAttribute("data-salt");
            AdminLogin_ValidatorFun(salt)

        });
   
    stopBacknFarward();    
   
});

function stopBacknFarward() {
    window.history.forward();
    noBack();
    burstCache();
    history.go(1);
}
function noBack() {
    window.history.forward();
}
function burstCache() {
    if (!navigator.onLine) {
        window.location = "../Home/Index";
    }
}
function preventCopyPaste(event) {
    event.preventDefault();
    alert('Copy-paste is disabled for security reasons.');
}
function captcha() {
    var captchaUrl = "../Neet2025/ShowCaptchaImage";
    $.ajax({      
        url: captchaUrl,
        cache: false,
        success: function (html) {
            var img = document.getElementById('capimage');
            img.src = "";  
            img.src = captchaUrl + '?' + new Date().getTime(); 
            $('#Captcha1').val('');
        },
        error: function (response) {
            alert(response);
        }
    });
}



function PrintTable() {
    document.getElementById("print").style.display = 'none';
    document.getElementById("close").style.display = 'none';
    var divToPrint = document.getElementById('tableToPrint');
    var popupWin = window.open('', '_blank', 'width=500,height=500');
    popupWin.document.open();
    popupWin.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</html>');
    popupWin.document.close();
    document.getElementById("print").style.display = 'Inline-block';
    document.getElementById("close").style.display = 'Inline-block';
}
