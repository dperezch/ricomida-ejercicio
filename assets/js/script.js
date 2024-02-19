$(document).ready(function () {
  /* Tooltip Bootstrap */
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );

  /* enviar alerta correo */
  $("#enviarCorreo").click(function () {
    alert("el correo fue enviado correctamente");
  });

  /* Cambiar color de texto a ingredientes y preparación */
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
    $(".recipe3-text").toggle(2500, "swing", function () {});
  });
});
