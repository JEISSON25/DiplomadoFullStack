// Escribir una función que calcule el área de un triángulo recibiendo como entrada el valor de base y altura.
function area_triangulo (b, a){
 console.log("base por altura desde funcion: " + b*a);
}


//Escribir una función que retorne el valor mayor entre 3 números
function mayor_number(a,b,c){
    var mayor = 0;
    if(a>b && a>c)
    mayor = a;
    else if (b>a && b>c)
    mayor = b;
    else if (c>a && c>b)
    mayor = c;

    return console.log("El número mayor es : " + mayor);
}
//console.log("El número mayor de 4,20,6 es: "+ mayor_number(4,20,6) )

// Escribir una función que reciba el nombre y la edad y retorne true si puede votar, en caso contrario false
function apto_voto(name, year){
    if(year>=18)
    return console.log(name + "Usted está apto para votar: " + true);
    else
    return console.log(name + "Usted NO está apto para votar: " + false);
}

function dia_habil () {
    var dia = new Date();
    if ((dia.getDay==0) || (dia.getDay==6)) 
    console.log("Hoy es Festivo");
    else 
    console.log("Hoy es dia habil");
}
// Escribir una función que reciba las notas de un estudiante y retorne el promedio

function notas_estu(n1,n2,n3){
    var prom = (n1+n2+n3)/3;
    console.log("El promedio de notas es: "+prom);
}
// Escribir una función que reciba un arreglo de números y retorne la suma de todos ellos

function suma_array(a){
    var suma = 0;
    for (var i=0; i<a.length; i++){
        suma = suma+a[i];
    }
    console.log("Valor de suma: "+suma);
}

//Escribir una función que reciba un un arreglo el siguiente arreglo con objetos y retorne cuantos son modelos superiores a 2018

function find_objet(carros){
   var busq = carros.find(marca => marca.modelo > 2018)
   console.log(busq);
}

var carros = [
    { marca: 'Mazda', modelo: 2029 },
    { marca: 'Chevrolet', modelo: 2017 },
    { marca: 'Jeep', modelo: 2018 },
    { marca: 'Ferrari', modelo: 2015 },
    { marca: 'Nissan', modelo: 2021 },
]

find_objet(carros);