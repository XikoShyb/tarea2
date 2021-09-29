define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const $ = jquery;
    (function () {
        'use strict';
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                var flag = false;
                // Validar checkbox de lenguajes de programación
                if ($("[name='lenguajes']:checked").length == 0) {
                    $("[name='lenguajes']").prop('required', true);
                    flag = true;
                }
                else {
                    $("[name='lenguajes']").prop('required', false);
                }
                // Validar checkbox de cursos con mayor dificultad
                if ($("[name='cursos']:checked").length == 0) {
                    $("[name='cursos']").prop('required', true);
                    flag = true;
                }
                else {
                    $("[name='cursos']").prop('required', false);
                }
                if (!form.checkValidity()) {
                    flag = true;
                }
                if (flag == true) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    $("#formulario").hide();
                    alert("Hemos recibido sus datos. Pronto nos estaremos comunicando con usted.");
                    event.preventDefault();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })(),
        // Activar textArea con checkbox
        $('#dificultad5').on('change', function () {
            if ($(this).is(':checked')) {
                $("#textoOtro").prop('disabled', false);
            }
            else {
                $("#textoOtro").prop('disabled', true);
            }
        });
    // Limpiar Datos del formulario
    $("#botonLimpiar").click(function limpiarDatos() {
        $("#formulario").trigger("reset");
    });
});
