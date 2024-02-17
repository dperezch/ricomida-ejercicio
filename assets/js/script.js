$(document).ready(function () {
  /* Tooltip Bootstrap */
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  /* Cambiar color de texto a ingreientes y preparación */
  $(".ingredients>div>div>h3").dblclick(function () {
    $(this).addClass("text-danger");
  });

  $(".ingredients>div>div:last-child>h3").on("dblclick", function () {
    $(this).addClass("text-danger");
  });

  /* Añadir toggle a tarjetas */
  $("#recipe1").click(function () {
    $("#recipe1-text").toggle();
  });

  $(".recipe2").click(function () {
    $(".recipe2-text").toggle("slow", function () {});
  });

  $(".recipe3").click(function () {
    $(".recipe3-text").toggle(1500, "swing", function () {});
  });
});
