$().ready(()=>{
    let count = 0;
    $("#min").click(()=>{
        count--;
        display();
    })
    $("#add").click(()=>{
        count++;
        display();
    })
    const display = ()=>{
        $("#nbr").val(count);
        count%3==0 ? $("#nbr").css("color","red"):$("#nbr").css("color","black");
        count%5==0 ? $("#nbr").css("fontWeight","bold"):$("#nbr").css("fontWeight","normal");
        count%7==0 ? $("#nbr").css("fontStyle","italic"):$("#nbr").css("fontStyle","normal");
    }
})