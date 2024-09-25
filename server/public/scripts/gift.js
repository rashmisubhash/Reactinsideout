const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split("/").pop());
    const response = await fetch("/gifts");
    const data = await response.json();
    const giftContent = document.getElementById("gift-content");
    let gift;
    gift = data.find((gift) => gift.id === requestedID);
    if (gift) {
      document.getElementById("image").src = gift.image;
      document.getElementById("name").textContent = gift.name;
      document.getElementById("inStock").textContent =
        "In Stock: " + (gift.inStock ? "Yes": "No");
      document.getElementById("pricePoint").textContent =
        "Price: " + gift.pricePoint;
      document.getElementById("rating").textContent =
        "Rating: " + gift.rating;
        refundable
        document.getElementById("return").textContent =
        "Return: " + (gift.return ? "Yes": "No");
        document.getElementById("refundable").textContent =
        "Refundable: " + (gift.refundable ? "Yes": "No");
      document.getElementById("description").textContent = gift.description;
      document.title = `Inside Out - ${gift.name}`;
    } else {
      const message = document.createElement("h2");
      message.textContent = "No Gifts Available 😞";
      giftContent.appendChild(message);
    }
  };

  renderGift();