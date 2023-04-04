google.charts.load('current', {'packages':['sankey']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            let data = new google.visualization.DataTable();
            data.addColumn('string', 'From');
            data.addColumn('string', 'To');
            data.addColumn('number', 'Weight');
            data.addRows([
            [ 'Aristoteles', 'Hegel', 7 ],
            [ 'Aristoteles', 'Heidegger', 8 ],
            [ 'Aristoteles', 'Kant', 5 ],
            [ 'Kant', 'Hegel', 4 ],
            [ 'Platon', 'Nietzsche', 7 ],
            [ 'Hegel', 'Heidegger', 2 ],
            [ 'Kant', 'Schopenhauer', 1 ],
            [ 'Platon', 'Schopenhauer', 5 ],
            [ 'Schopenhauer', 'Nietzsche', 7 ]
            ]);

            // Sets chart options.
            let options = {
            width: 600,
            };

            // Instantiates and draws our chart, passing in some options.
            let chart = new google.visualization.Sankey(document.getElementById('sankey_expl'));
            chart.draw(data, options);
        }