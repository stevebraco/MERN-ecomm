import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
          name: 'Basir',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products : [
        {
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality'
        },

        {
            name: 'Adidas Slim Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 12,
            countInStock: 10,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality'
        },

        {
            name: 'Lacoste Slim Pants',
            category: 'Pants',
            image: '/images/p3.jpg',
            price: 35,
            countInStock: 1,
            brand: 'Lacoste',
            rating: 4.3,
            numReviews: 10,
            description: 'high quality'
        },

        {
            name: 'Puma Slim Shirt',
            category: 'Shirts',
            image: '/images/p4.jpg',
            price: 120,
            countInStock: 2,
            brand: 'Puma',
            rating: 3.9,
            numReviews: 10,
            description: 'high quality'
        },
        {
            name: 'Nikee Slim Shirt',
            category: 'Shirts',
            image: '/images/p5.jpg',
            price: 39,
            countInStock: 5,
            brand: 'Nikee',
            rating: 2.5,
            numReviews: 10,
            description: 'high quality'
        },
        {
            name: 'Asics Slim Shirt',
            category: 'Shirts',
            image: '/images/p6.jpg',
            price: 120,
            countInStock: 0,
            brand: 'Asics',
            rating: 4.1,
            numReviews: 10,
            description: 'high quality'
        }

        

    ]
}

export default data;