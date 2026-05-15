document.addEventListener("DOMContentLoaded", () => {
    fetch('js/db/stack.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('stackScroller');
            data.forEach(stack => {
                const article = document.createElement('article');
                article.classList.add('col', 'p-0');
                const card = document.createElement('div');
                card.classList.add('card', 'd-flex', 'flex-row', 'align-items-center', 'p-4');
                const cardImage = document.createElement('div');
                cardImage.classList.add('card-image');
                const img = document.createElement('img');
                img.setAttribute('loading', 'lazy');
                img.setAttribute('src', stack.image);
                img.setAttribute('alt', stack.alt);
                cardImage.appendChild(img);
                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');
                const p = document.createElement('p');
                p.textContent = stack.title;
                if (stack.style) {
                    p.style = stack.style;
                }
                cardBody.appendChild(p);
                card.appendChild(cardImage);
                card.appendChild(cardBody);
                article.appendChild(card);
                container.appendChild(article);
            });
        })
        .catch(error => console.error('Error loading stacks:', error));
});
