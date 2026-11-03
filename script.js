Papa.parse('internet.csv', {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
        const rows = results.data;
        const tbody = document.querySelector('#dataTable tbody');
        rows.forEach(row => {
            const tr = document.createElement('tr');
            [row.Country, row.CountryCode, row.Year,
                row.InternetUsersPercent].forEach(value => {
                const td = document.createElement('td');
                td.textContent = value;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
    },
    error: function(error) {
        console.error('CSV failed to load', error);
    }
});
