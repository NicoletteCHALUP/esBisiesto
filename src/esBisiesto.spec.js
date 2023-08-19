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
 it("El 2008 deberia considerarse como anio bisiesto ya que Todos los años divisibles por 4 pero no por 100 SON años bisiestos  ", () => {
  expect(esBisiesto(2008)).toEqual(true);
 });
 it("El  2017 no deberia considerarse como anio bisiesto ya Todos los años que no son divisibles por 4 NO son años bisiestos  ", () => {
  expect(esBisiesto(2017)).toEqual(false);
 });
 
});

