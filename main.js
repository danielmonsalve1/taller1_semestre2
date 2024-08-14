/*EJERCICIO #1:

1. Realiza el cálculo del salario que debe recibir 
un trabajador que gana x salario con un
descuento del 4% por salud y 7% por pensión.*/

// let salario = prompt("Digite el salario del empleado");
// let salud = salario *0.04;
// let pension = salario * 0.07;
// let descuento = salario - (salud + pension);
// document.write(
//     "El salario del empleado es: "+salario+"<br>"+
//     "El descuento por salud es: "+salud+"<br>"+
//     "El descuento por pensión es: "+pension+"<br>"+
//     "El salario neto del empleado es: "+descuento
// )

/*<-------------------------------------------------------->*/

/*EJERCICIO #2:

Aplica la fórmula a = (b*h)/2 para calcular el área 
de un triángulo donde sus dimensiones base y 
altura se deben pedir al usuario que las digite.*/

//Solicitar la base al usuario
// let base = prompt("Ingrese el número de base del triángulo");

// //Solicitar la altura al usuario
// let altura = prompt("Ingrese el número de altura del triángulo");

// //Entradas a números:
// base = parseFloat(base);
// altura = parseFloat(altura);

// //Aplicar la fórmula para calcular el área
// let area = (base * altura) / 2;

// //Mostrar el resultado
// document.write("El área del triángulo es: "+area);

/*<-------------------------------------------------------->*/

/*EJERCICIO #3:

 Realiza las operaciones de suma, resta, multiplicación, división, y módulo pidiéndole solo
 2 númerosal usuario.*/

 //Datos de entrada:
//  let num1 = Number(prompt("Ingrese el primer número"));
//  let num2 = Number(prompt("Ingrese el segundo número"));
//  //Operaciones
//  let suma = num1 + num2;
//  let resta = num1 - num2;
//  let multiplicacion = num1 * num2;
//  let division = num1 / num2;
//  let modulo = num1 % num2;
//  let potencia = num1 ** num2;
//  //Mostrar el resultado
//  document.write(
//     "El resultado de la suma es: "+num1+" + "+num2+" = "+suma+"<br>"+
//     "El resultado de la resta es: "+num1+" - "+num2+" = "+resta+"<br>"+
//     "El resultado de la multiplicacion es: "+num1+" * "+num2+" = "+multiplicacion+"<br>"+
//     "El resultado de la división es: "+num1+" / "+num2+" = "+division+"<br>"+
//     "El resultado del módulo es: "+num1+" % "+num2+" = "+modulo+"<br>"+
//     "El resultado de la potencia es: "+num1+" ** "+num2+" = "+potencia
//  )

/*<-------------------------------------------------------->*/

/*EJERCICIO #4:

 Calcule el sueldo mensual de un trabajador ingresando el número de horas trabajadas en
 el mes y el valor tanto como de las horas normales de trabajo y las horas extras.*/

// let horasNormales = prompt("Ingrese el número de horas normales trabajadas en el mes:");
// let horasExtras = prompt("Ingrese el número de horas extras trabajadas en el mes:");
// let valorHoraNormal = prompt("Ingrese el valor de una hora normal de trabajo:");
// let valorHoraExtra = prompt("Ingrese el valor de una hora extra de trabajo:");
// //Procedimiento
// horasNormales = parseFloat(horasNormales);
// horasExtras = parseFloat(horasExtras);
// valorHoraNormal = parseFloat(valorHoraNormal);
// valorHoraExtra = parseFloat(valorHoraExtra);
// //horas normales
// let sueldoHorasNormales = horasNormales * valorHoraNormal;
// //horas extras
// let sueldoHorasExtras = horasExtras * valorHoraExtra;
// //Sueldo total con horas normales y extras
// let sueldoTotal = sueldoHorasNormales + sueldoHorasExtras;
// //Lo que le mostramos al cliente
// document.write(
//    "Horas normales trabajadas en el mes: "+horasNormales+"<br>"+
//    "Horas extras trabajadas en el mes: "+horasExtras+"<br>"+
//    "Sueldo horas normales: " +sueldoHorasNormales+"<br>"+
//    "Sueldo horas extras: " +sueldoHorasExtras+"<br>"+
//    "El sueldo total del trabajador es: " + sueldoTotal
// )

/*<-------------------------------------------------------->*/
/* EJERCIO #5:

Digita el ingreso del precio de un producto y se debe calcular el IVA, mostrar cuanto es el
IVA que se agrega, mostrar el precio del producto sin IVA y el total a pagar*/

// let precioProducto = prompt("Digita el precio del producto: ");
// let iva = 0.19;
// //Procedimiento
// precioProducto = parseFloat(precioProducto);
// let ivaAgregado = precioProducto * iva;
// let precioSinIva = precioProducto - ivaAgregado;
// let totalAPagar = precioProducto;
// //Lo que le mostramos al cliente
// document.write(
//    "El precio del producto es: " + precioProducto + "<br>"+
//    "Iva Agregado: "+ivaAgregado+"<br>"+
//    "Precio del producto sin IVA: "+precioSinIva+"<br>"+
//    "Total a pagar: "+totalAPagar
// )

/*<-------------------------------------------------------->*/
/*

/*EJERCICIO #6:

Calcule el porcentaje de alumnos y alumnas de un salón de clase, digitando el total de
 alumnos hombres y mujeres*/

//  let alumnos = prompt("Digite el número de alumnos: ");
//  let alumnas = prompt("Digite el número de alumnas: ");

//  //Procedimiento
//  alumnos = parseFloat(alumnos);
//  alumnas = parseFloat(alumnas);
 
//  let totalAlumnos = alumnos + alumnas;
//  let porcentajeAlumnos = (alumnos / totalAlumnos) * 100;
//  let porcentajeAlumnas = (alumnas / totalAlumnos ) * 100;

//  //Lo que vamos a mostrar al cliente

//  document.write(
//    "El número de alumnos es: " + alumnos + "<br>"+
//    "El número de alumnas es: " + alumnas + "<br>"+
//    "El total de alumnos es: " + totalAlumnos + "<br>"+
//    "El porcentaje de alumnos es: " + porcentajeAlumnos.toFixed(2) + "%<br>"+
//    "El porcentaje de alumnas es: " + porcentajeAlumnas.toFixed(2) + "%"
//    )

//  /*<-------------------------------------------------------->*/
/* EJERCICIO #7:

Calcule el promedio de 3 notas de un alumno, el rango de cada nota es del 1 al 5.*/

// let nota1 = prompt("Digite la primera nota: ");
// let nota2 = prompt("Digite la segunda nota: ");
// let nota3 = prompt("Digite la tercera nota: ");

// //Procedimiento
// nota1 = parseFloat(nota1);
// nota2 = parseFloat(nota2);
// nota3 = parseFloat(nota3);

// let totalNotas = nota1 + nota2 + nota3
// let promedioNotas = totalNotas / 3;

// document.write(
//    "La primera nota del estudiante es: " + nota1 + "<br>"+
//    "La segunda nota del estudiante es: " + nota2 + "<br>"+
//    "La tercera nota del estudiante es: " + nota3 + "<br>"+
//    "El promedio de las notas del estudiante es: " + promedioNotas.toFixed(2)
// )




   
