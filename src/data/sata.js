export const products = [
    {
      id: 1,
      name: "Burger Classic",
      image: "/bur1.png",
      description: "Notre burger signature avec du bœuf frais, du fromage fondant et une sauce spéciale.",
      price: 800,
      views: 0,
      sold: 0,
      reviews: [
        { id: 1, username: "Ahmed", rating: 5, comment: "Délicieux ! La viande est parfaitement cuite." },
        { id: 2, username: "Sofia", rating: 4, comment: "Très bon burger, mais un peu trop de sauce." }
      ]
    },
    {
      id: 2,
      name: "Chicken Supreme",
      image: "/bur2.png",
      description: "Burger au poulet croustillant avec laitue fraîche et mayonnaise épicée.",
      price: 750,
      views: 742,
      sold: 243,
      reviews: [
        { id: 1, username: "Karim", rating: 5, comment: "Le poulet est incroyablement croustillant!" },
        { id: 2, username: "Lina", rating: 5, comment: "Meilleur burger de poulet que j'ai jamais goûté." }
      ]
    },
    {
      id: 3,
      name: "Double Cheese",
      image: "/bur3.png",
      description: "Double viande, double fromage pour les amateurs de sensations fortes.",
      price: 950,
      views: 108,
      sold: 20,
      reviews: [
        { id: 1, username: "Omar", rating: 4, comment: "Parfait quand on a vraiment faim!" },
        { id: 2, username: "Yasmine", rating: 3, comment: "Bon mais très calorique." }
      ]
    },
    {
      id: 4,
      name: "Veggie Delight",
      image: "/bur4.png",
      description: "Option végétarienne avec galette de légumes, avocat et sauce maison.",
      price: 700,
      views: 2651,
      sold: 351,
      reviews: [
        { id: 1, username: "Amina", rating: 5, comment: "Enfin un bon burger végétarien!" }
      ]
    },
    {
      id: 5,
      name: "Frites Maison",
      image: "/bur5.png",
      description: "Nos frites croustillantes préparées à la main, avec assaisonnement secret.",
      price: 350,
      views: 1265,
      sold: 158,
      reviews: [
        { id: 1, username: "Mehdi", rating: 5, comment: "Croustillantes à l'extérieur, moelleuses à l'intérieur." },
        { id: 2, username: "Leila", rating: 4, comment: "Très bonnes frites, portion généreuse." }
      ]
    }
  ];
  
  // Function to update product views
  export const incrementProductViews = (productId) => {
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
      products[productIndex].views += 0.5;
    }
    return products[productIndex];
  };
  
  // Function to update product sales
  export const incrementProductSold = (productId) => {
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
      products[productIndex].sold += 1;
    }
    return products[productIndex];
  };
  
  export default products;