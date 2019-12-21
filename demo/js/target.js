const loaded =()=>{
    let UrParms = getUrlParms();
    console.log(parms);
let lblCtrl = document.getElementById("name");
lblCtrl.innerHTML = `<p>${UrParms.name}</p>`;
}