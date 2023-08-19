import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto ", () => {

  it("El 4 deberia considerarse como anio bisiesto", () => {
     expect(esBisiesto(4)).toEqual(true);
  });

  it("El 5 no deberia considerarse como anio bisiesto", () => {
    expect(esBisiesto(5)).toEqual(false);
 });

 it("El 2000 deberia considerarse como anio bisiesto Todos los años divisibles por  400 SON años bisiestos ", () => {
  expect(esBisiesto(2000)).toEqual(true);
 });
  it("El 1700 no deberia considerarse como anio bisiesto ya que Todos los años divisibles por 100 pero no por 400 NO son años bisiestos", () => {
    expect(esBisiesto(1700)).toEqual(false);
 });

});

