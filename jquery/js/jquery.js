$().ready(() => { 

    console.logo("jQuery ready!");
    $("#abc").val("Java Pt Bc");

    $("button#clk").click(() => {
      let msg =  $("#abc").val();
      console.log(mgs);
    });
    $("button#sty").click(() => {
        $("#abc").css("color","red").css("fontWeight","bold");
    });

});