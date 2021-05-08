import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Basir",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
        name: "Earrings black Argent",
        category: "Earrings",
        image: "/images/p6.jpg",
        price: 120,
        countInStock: 0,
        brand: "Earrings&Argent",
        rating: 4.1,
        numReviews: 10,
        description: "high quality",
      },
    {
        name: "Wedding Golden Rings",
        category: "Rings",
        image: "/images/p2.jpg",
        price: 12,
        countInStock: 10,
        brand: "Rings&Gold",
        rating: 4.0,
        numReviews: 10,
        description: "high quality",
      },
    
      {
        name: "Silver Rings With Diamonds",
        category: "Rings",
        image: "/images/p1.jpg",
        price: 120,
        countInStock: 10,
        brand: "Rings&Diamonds",
        rating: 4.5,
        numReviews: 10,
        description: "Rare Silver Ring With Diamonds",
      },
      
    {
        name: "Pendant Argent",
        category: "Pendant",
        image: "/images/p5.jpg",
        price: 39,
        countInStock: 5,
        brand: "Rings&Gold",
        rating: 2.5,
        numReviews: 10,
        description: "high quality",
      },
    {
        name: "Pendant Gold",
        category: "Pendant",
        image: "/images/p4.jpg",
        price: 120,
        countInStock: 2,
        brand: "Rings&Gold",
        rating: 3.9,
        numReviews: 10,
        description: "Pendant ring&gold",
      },
    {
      name: "Silver Ring With Diamonds",
      category: "Rings",
      image: "/images/p3.jpg",
      price: 35,
      countInStock: 1,
      brand: "Rings&Diamonds",
      rating: 4.3,
      numReviews: 10,
      description: "Beautiful Rings&Diamonds",
    },

    
    
     
  ],
};

export default data;
