import React, { useState, useEffect } from 'react';

function ProductCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const formattedCards = data.slice(0, 20).map(product => ({
          id: product.id,
          title: product.title,
          shortTitle: product.title.length > 30 ? product.title.substring(0, 30) + '...' : product.title,
          imageUrl: product.image
        }));
        setCards(formattedCards);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchCardData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {cards.map(card => (
          <div className="col-md-3" key={card.id}>
            <div className="card mb-3">
              <div className="card-img-top" style={{ height: "350px", overflow: "hidden" }}>
                <img src={card.imageUrl} className="img-fluid" alt={`Image for ${card.title}`} style={{ objectFit: "center" }} />
              </div>
              <div className="card-footer border border-0">
                <h5 className="card-text fs-6">{card.shortTitle}</h5>
                <p className='text-secondary'> <a className='text-secondary'>Sign in</a> or create an account to see pricing<span style={{ marginLeft: "5px", fontSize: "16px", cursor: "pointer" }}>
                    <i className="fa-regular fa-heart  mx-4"></i>
                  </span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCards;
