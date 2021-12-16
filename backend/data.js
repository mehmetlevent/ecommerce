import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'leo',
            email:'admin@mail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'john',
            email:'user@mail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },

    ],
    products:[
        {
            name:'Nike Slim shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock:200,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description: 'high wuality product',
        } ,
       {
           name:'Adidas Fit shirt',
           category:'Shirts',
           image:'/images/p2.jpg',
           price:100,
           countInStock:120,
           brand:'Adidas',
           rating:4,
           numReviews:10,
           description: 'high wuality product',
       } ,
       {
        name:'Lacoste Free shirt',
        category:'Shirts',
        image:'/images/p3.jpg',
        price:220,
        countInStock:25,
        brand:'Lacoste',
        rating:4.8,
        numReviews:17,
        description: 'high wuality product',
    } ,
    {
        name:'Nike Slim Pant',
        category:'Pants',
        image:'/images/p4.jpg',
        price:78,
        countInStock:30,
        brand:'Nike',
        rating:4.5,
        numReviews:14,
        description: 'high wuality product',
    } ,
    {
        name:'Puma Slim Pant',
        category:'Pants',
        image:'/images/p5.jpg',
        price:65,
        countInStock:10,
        brand:'Puma',
        rating:4.5,
        numReviews:10,
        description: 'high wuality product',
    } ,
    {
        name:'Adidas Fit Pant',
        category:'Pants',
        image:'/images/p6.jpg',
        price:139,
        countInStock:0,
        brand:'Adidas',
        rating:4.5,
        numReviews:15,
        description: 'high wuality product',
    } ,
   
    ],
};
export default data;