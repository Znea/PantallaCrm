
//Función que cargar el gràfico de Google
function cargarGrafico() {
    // Cargo el gráfico de Google
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);
}

// Dibujo el gráfico y coloco los valores
function drawChart() {
   
    var data = google.visualization.arrayToDataTable(
        [['Grafico', ''],
        ['Satisfecho', 60],
        ['No satisfecho', 40],
        ]
    );    

    var options = {
        backgroundColor: '#F8F9F9',  // Color de fondo del gráfico
        
        pieHole: 0.4,               // Hace el gráfico de dona (0 = circular completo)
        pieSliceText: 'value',      // Muestra los valores en las rebanadas
        pieSliceTextStyle: {
            color: '#F8F9F9',       // Color del texto de las rebanadas
            fontSize: 12           // Tamaño del texto
        },
        slices: {
            0: { color: '#FF5733', offset:0.01}, // Color de la primera rebanada
            1: { color: '#F8F9F9' }, // Color de la segunda rebanada
        },
        pieSliceBorderColor: '#FF5733',
        legend: 'none',
        chartArea: {
            left: 30,              // Margen izquierdo
            top: 15,               // Margen superior
            width: '90%',          // Ancho del área del gráfico
            height: '75%'          // Alto del área del gráfico
        },
        tooltip: {
            trigger: 'none' // Desactiva el tooltip en hover
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

cargarGrafico();