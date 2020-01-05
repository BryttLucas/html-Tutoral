const baseUrl = "http://localhost:8080";
let users = null; 
$().ready(()=>{
    $('#getall').click(()  => {
            console.log("Before AJAX call.");
    $.getJSON(`${baseUrl}/users/3`)
        .done((res)  => {
            console.log("after Data Returned");
            console.log("Data", res, data);
            user = res.data;
        })
        .fail((err) => {
            console.error(err);
        });
        console.log("After AJAX call.");
    });
    
});