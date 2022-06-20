import "./styles.css";

console.clear();

const persona = {
  nombre: "Ramiro",
  primerApellido: "Perez",
  edad: 33,
  altura: 1.87,
  isDios: true,
  isHumilde: true
};

const salario = {
  enero: 1234,
  febrero: 1500,
  marzo: 2314
};

//OBJECT.KEYS
//yo este metodo lo suelo usar
// para medir la longitud de un ubjeto por ejemplo
console.log(Object.keys(persona).length);
console.log(Object.keys(persona));

//OBJECT.VALUES
console.log(Object.values(persona));

//el values nos sirve para sumar valores o mostrarlos para algo
console.log(
  Object.values(salario).reduce((anterior, actual) => {
    return anterior + actual;
  }, 0)
);

//OBJECT.ENTRIES
//este metodo devuelve todo lo que tiene el objeto como ararys
console.log(Object.entries(persona));

//Aqui dejo un ejemplo para poner todos los string en mayusculas
Object.entries(persona).forEach((par) => {
  const clave = par[0];
  const valor = par[1];
  if (typeof valor === "string") {
    persona[clave] = valor.toUpperCase();
  }
});
