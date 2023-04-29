// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');

d3.csv(
  'https://raw.githubusercontent.com/mwaskom/seaborn-data/master/titanic.csv',
  function (error, data) {
    var visualization = d3plus
      .viz()
      .container('#viz1')
      .data([
        { year: 1991, name: 'alpha', value: 15 },
        { year: 1992, name: 'alpha', value: 20 },
      ])
      .type('bar')
      .id('name')
      .x('year')
      .y('value')
      .draw();
  }
);

d3.json(
  'https://raw.githubusercontent.com/raul27868/07MBIG-Visualizacion-Actividades-Guiadas/master/columnas.json',
  function (data) {
    var visualization = d3plus
      .viz()
      .container('#viz2')
      .data(data)
      .type('bar')
      .id('name')
      .x('year')
      .y('value')
      .axes({ ticks: 'false' })
      .draw();
  }
);

d3.text(
  'https://raw.githubusercontent.com/Rober03/08MBID-AG3/main/AG3_Datos_Caja_Bigotes.txt',
  function (data) {
    data = eval(data);

    console.log('hola', data);

    var visualization = d3plus
      .viz()
      .container('#viz3')
      .data(data)
      .type('box')
      .id('name')
      .x('year')
      .y('value')
      .config({
        boxplotWidth: 40, // ancho de la caja
        boxplotWhiskerWidth: 2, // ancho de las líneas de los bigotes
        boxplotOutlierSize: 2, // tamaño de los puntos de los valores atípicos (outliers)
        boxplotFillColor: '#e5e5e5', // color de fondo de la caja
        boxplotStrokeColor: '#999999', // color del borde de la caja y de las líneas de los bigotes
        boxplotOutlierColor: '#999999', // color de los puntos de los valores atípicos (outliers)
        xAxis: false, // desactivar eje X
        yAxis: false, // desactivar eje Y
      })
      .draw();
  }
);
