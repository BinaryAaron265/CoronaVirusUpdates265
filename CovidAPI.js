
   const apiEndpoint = 'https://disease.sh/v3/covid-19/countries/malawi';

        // Fetch data from API
        fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => {
                // Update statistics cards
                document.getElementById('cases').textContent = data.cases.toLocaleString();
                document.getElementById('deaths').textContent = data.deaths.toLocaleString();
                document.getElementById('recovered').textContent = data.recovered.toLocaleString();
                document.getElementById('active').textContent = data.active.toLocaleString();
                document.getElementById('tests').textContent = data.tests.toLocaleString();
                document.getElementById('critical').textContent = data.critical.toLocaleString();
                document.getElementById('today-cases').textContent = data.todayCases.toLocaleString();
                document.getElementById('today-deaths').textContent = data.todayDeaths.toLocaleString();
                document.getElementById('cases-per-million').textContent = data.casesPerOneMillion.toLocaleString();
                document.getElementById('deaths-per-million').textContent = data.deathsPerOneMillion.toLocaleString();
            })
            .catch(error => {
                console.error('Error fetching data from API:', error);
            });
