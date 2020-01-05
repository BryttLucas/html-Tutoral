const baseUrl = "http://localhost:8080";
let user = null;

$().ready(()=>{
    get(2);
    $("#save").click(() => {
            update();
    });
});
const update = () => {
    user.username = $("#pusername").val();
    user.password = $("#ppassword").val();
    user.firstname = $("#pfirstname").val();
    user.lastname = $("#plastame").val();
    user.phonenumber = $("#pphonenumber").val();
    user.email = $("#pemail").val();
    user.isReviewer = $("#previewer").prop("checked");
    user.isAdim = $("#padim").prop("checked");
    put();
    get(user.id);
} 
const put = ()=> {
    $.ajax({
        method: "PUT",
        url: $(`${baseUrl}/users/${user.id}`,
        data:  JSON.stringify(user),
        dataType: "json",
        contentType: "application/json"
    }).done(()=>{
        get();
    });

}   
const get = () => {      
    $.getJSON(`${baseUrl}/users`)
        .done((res)  => {
            console.log("Users:", res, data);
            user = res.data;
            display();
        });
    const display =()=>{
        $("#pid").val(user.id);
        $("#pusername").val(user.usdername);
        $("#ppassword").val(user.password);
        $("#pfirstname").val(user.firstname);
        $("#plastname").val(user.lastname);
        $("#pphone").val(user.phone);
        $("#pemail").val(user.email);
        $("#previewer").prop("checked", user.isReviewer);
        $("#padim").prop("checked", user.isAdim);
    }    
    
}