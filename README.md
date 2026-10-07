LABORATORIO PRÁCTICO Programación Orientada a Objetos en JavaScript
-------------------------------------------------------------------

Santiago Steven Lopez Sanabria



-----------------------------
Preguntas
-----------------------------

1. ¿Qué ventaja técnica tiene crear un molde (función constructora) en lugar de escribir un objeto literal estructurado individualmente para cada computador?

R//: Evita duplicar manualmente la misma estructura (propiedades y métodos) cada vez que se necesita instanciar un nuevo equipo

2. ¿Por qué un método interno puede acceder de manera precisa y aislada a las propiedades específicas de su propio objeto utilizando la palabra clave this?

R//: Cuando un método se ejecuta mediante la sintaxis objeto.metodo(), el motor de JavaScript asigna implícitamente la referencia del objeto que está antes del punto a la palabra clave this

3. ¿Qué ventajas a nivel de cohesión de software presenta el hecho de que el objeto conozca por sí mismo su estado lógico (si aprobó o no)?

R//: La regla de negocio (saber que una nota 3.0 es aprobatoria) queda dentro del propio módulo. El código externo no necesita implementar condicionales ni conocer cómo se calcula dicho estado; basta con consultar o invocar los métodos del objeto

4. ¿Qué ocurriría si el libro ya estaba prestado y alguien intenta prestarlo nuevamente sin controles de estado internos?

R//: El método ejecutaría la operación a ciegas, sobreescribiendo de forma redundante la propiedad this.prestado = true y confirmando falsamente que "El libro ha sido prestado", aunque ya se encontrara en dicho estado

5. ¿Qué ventajas tiene permitir que la información sea ingresada por el usuario en lugar de escribir los datos directamente en el código?

R//: La aplicación puede procesar distintos conjuntos de datos en tiempo de ejecución sin necesidad de editar ni volver a compilar/desplegar el código fuente. Permitiendo que cualquier usuario final interactúe con el programa sin requerir conocimientos de programación ni acceso al código base.