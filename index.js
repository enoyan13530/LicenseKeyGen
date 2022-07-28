let button = document.getElementById("gen-button");
let keylist = document.getElementById("keylist");
let select = document.getElementById("num");
let toast = document.getElementById("toast");
let toast_text = document.getElementById("toast-text");
let chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"]

button.addEventListener("click", OutputLicenseKey)

function OutputLicenseKey(event){
    let num = select.value;
    let i;
    let str = "";
    for (i = 0; i < num; i++){
        str += GenLicenseKey();
        str += "\n";
    }
    //showToast(i + "個出力")
    keylist.innerText = str;
}

function GenLicenseKey(){
    let i;
    let str;
    let str1 = "";
    let str2 = "";
    let str3 = "";
    let str4 = "";
    let str5 = "";
    for (i = 0; i < 5; i++){
        str1 = str1 + chars[Math.floor(Math.random() * chars.length)];
        str2 = str2 + chars[Math.floor(Math.random() * chars.length)];
        str3 = str3 + chars[Math.floor(Math.random() * chars.length)];
        str4 = str4 + chars[Math.floor(Math.random() * chars.length)];
        str5 = str5 + chars[Math.floor(Math.random() * chars.length)];
    }
    str = str1 + "-" + str2 + "-" + str3 + "-" + str4 + "-" + str5;
    return str;
}

function showToast(text){
    toast_text.innerText = text;
    toast.style.visibility = "visible";

    setTimeout( function() {
        toast_text.innerText = "";
        toast.style.visibility = "hidden";
    }, 1500)
}