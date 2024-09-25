const renderGifts = async () => {
    const response = await fetch('/gifts');
    const data = await response.json();

    const mainContent = document.getElementById('main-content');

    // Clear any existing content in the mainContent
    mainContent.innerHTML = '';

    if (data && data.length > 0) {
        const grid = document.createElement('div');
        grid.classList.add('grid', 'grid-cols-4'); // Ensure a responsive grid layout

        data.map(gift => {
            // Create a card-like article element
            const card = document.createElement('div');
            card.classList.add('card'); // Use the 'card' class for styling

            const topContainer = document.createElement('div');
            topContainer.classList.add('card-image');

            const bottomContainer = document.createElement('div');
            bottomContainer.classList.add('card-body');

            // Create and set the image element
            const image = document.createElement('img');
            image.src = gift.image;
            image.alt = gift.name;
            topContainer.appendChild(image);

            // Create the card content (title, price, audience, and link)
            const name = document.createElement('h3');
            name.textContent = gift.name;
            name.classList.add('card-title');
            bottomContainer.appendChild(name);

            const pricePoint = document.createElement('p');
            pricePoint.textContent = 'Price: ' + gift.pricePoint;
            bottomContainer.appendChild(pricePoint);

            const audience = document.createElement('p');
            audience.textContent = 'Rating: ' + gift.rating;
            bottomContainer.appendChild(audience);

            const link = document.createElement('a');
            link.textContent = 'Info';
            link.setAttribute('role', 'button');
            link.href = `/gifts/${gift.id}`;
            link.classList.add('contrast', 'readmorebutton'); // Use contrast class for the button
            bottomContainer.appendChild(link);

            // Append the top and bottom containers to the card
            card.appendChild(topContainer);
            card.appendChild(bottomContainer);

            // Append the card to the grid
            grid.appendChild(card);
        });

        // Append the grid to the main content
        mainContent.appendChild(grid);
    } else {
        const message = document.createElement('h2');
        message.textContent = 'No Gifts Available 😞';
        mainContent.appendChild(message);
    }
}

const requestedUrl = window.location.href.split("/").pop();
if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  renderGifts();
}