// Mostrar menu
$("#menu__btn").click(function () {
  $("#menu__container").animate(
    {
      top: "0%",
    },
    300,
    function () {
      //
    }
  );
});


//Ocultar menu
$("#close__btn").click(function () {
    $("#menu__container").animate(
      {
        top: "100%",
      },
      300,
      function () {
        //
      }
    );
  });