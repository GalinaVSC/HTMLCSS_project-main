fetch('menu.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('HTTP error! status: ${response.status}');
        }
        return response.json();
    })
    .then(data => {
        const menu = document.getElementById('menu');

        data.menuItems.forEach(item => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');

            link.textContent = item.name;
            link.href = item.link;

            listItem.appendChild(link);
            menu.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching menu:', error));