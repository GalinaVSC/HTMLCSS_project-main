fetch('config.json')
    .then(response => response.json())
    .then(config => {
        const header = document.createElement('header');
        header.style.background = config.header.background;
        header.style.color = config.header.color;
        header.innerHTML = `<h1>${config.header.title}</h1>`;
        
            const nav = document.createElement('nav');
            const ul = document.createElement('ul');
            
            config.menu.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = item.link;
                a.textContent = item.text;
                li.appendChild(a);

                if (item.submenu) {
                    const subUl = document.createElement('ul');
                    subUl.classList.add('dropdown');

                    item.submenu.forEach(subItem => {
                        const subLi = document.createElement('li');
                        const subA = document.createElement('a');
                        subA.href = subItem.link;
                        subA.textContent = subItem.text;
                        subLi.appendChild(subA);
                        subUl.appendChild(subLi);
                    });

                    li.appendChild(subUl);
                    li.classList.add('has-dropdown');
                }

                ul.appendChild(li);
            });

            nav.appendChild(ul);
            header.appendChild(nav);
            document.body.prepend(header);
        });
