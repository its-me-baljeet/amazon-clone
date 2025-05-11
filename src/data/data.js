// data/products.js
const data = [
    {
        id: 1,
        title: "Wireless Earbuds",
        description: "Wireless Earbuds - High quality and durable. Perfect for everyday use.",
        category: "Electronics",
        image: "https://picsum.photos/seed/wirelessearbuds643/300/300",
        price: 1017.53
    },
    {
        id: 2,
        title: "Smartphone",
        description: "Smartphone - High quality and durable. Perfect for everyday use.",
        category: "Electronics",
        image: "https://picsum.photos/seed/smartphone682/300/300",
        price: 5156.11
    },
    {
        id: 3,
        title: "Bluetooth Speaker",
        description: "Bluetooth Speaker - High quality and durable. Perfect for everyday use.",
        category: "Electronics",
        image: "https://picsum.photos/seed/bluetoothspeaker328/300/300",
        price: 7789.36
    },
    {
        id: 4,
        title: "Smartwatch",
        description: "Smartwatch - High quality and durable. Perfect for everyday use.",
        category: "Electronics",
        image: "https://picsum.photos/seed/smartwatch915/300/300",
        price: 8906.28
    },
    {
        id: 5,
        title: "Portable Charger",
        description: "Portable Charger - High quality and durable. Perfect for everyday use.",
        category: "Electronics",
        image: "https://picsum.photos/seed/portablecharger283/300/300",
        price: 3732.84
    },
    {
        id: 6,
        title: "Men's T-Shirt",
        description: "Men's T-Shirt - High quality and durable. Perfect for everyday use.",
        category: "Fashion",
        image: "https://picsum.photos/seed/menstshirt749/300/300",
        price: 3583.58
    },
    {
        id: 7,
        title: "Women's Kurta",
        description: "Women's Kurta - High quality and durable. Perfect for everyday use.",
        category: "Fashion",
        image: "https://picsum.photos/seed/womenskurta420/300/300",
        price: 1462.85
    },
    {
        id: 8,
        title: "Running Shoes",
        description: "Running Shoes - High quality and durable. Perfect for everyday use.",
        category: "Fashion",
        image: "https://picsum.photos/seed/runningshoes492/300/300",
        price: 3263.48
    },
    {
        id: 9,
        title: "Leather Wallet",
        description: "Leather Wallet - High quality and durable. Perfect for everyday use.",
        category: "Fashion",
        image: "https://picsum.photos/seed/leatherwallet648/300/300",
        price: 9644.28
    },
    {
        id: 10,
        title: "Denim Jeans",
        description: "Denim Jeans - High quality and durable. Perfect for everyday use.",
        category: "Fashion",
        image: "https://picsum.photos/seed/denimjeans230/300/300",
        price: 946.61
    },
    {
        id: 11,
        title: "Air Fryer",
        description: "Air Fryer - High quality and durable. Perfect for everyday use.",
        category: "Home Appliances",
        image: "https://picsum.photos/seed/airfryer880/300/300",
        price: 3557.08
    },
    {
        id: 12,
        title: "Mixer Grinder",
        description: "Mixer Grinder - High quality and durable. Perfect for everyday use.",
        category: "Home Appliances",
        image: "https://picsum.photos/seed/mixergrinder765/300/300",
        price: 8504.42
    },
    {
        id: 13,
        title: "Electric Kettle",
        description: "Electric Kettle - High quality and durable. Perfect for everyday use.",
        category: "Home Appliances",
        image: "https://picsum.photos/seed/electrickettle360/300/300",
        price: 7555.74
    },
    {
        id: 14,
        title: "Steam Iron",
        description: "Steam Iron - High quality and durable. Perfect for everyday use.",
        category: "Home Appliances",
        image: "https://picsum.photos/seed/steamiron268/300/300",
        price: 4536.6
    },
    {
        id: 15,
        title: "Vacuum Cleaner",
        description: "Vacuum Cleaner - High quality and durable. Perfect for everyday use.",
        category: "Home Appliances",
        image: "https://picsum.photos/seed/vacuumcleaner123/300/300",
        price: 7286.3
    },
    {
        id: 16,
        title: "Fiction Novel",
        description: "Fiction Novel - High quality and durable. Perfect for everyday use.",
        category: "Books",
        image: "https://picsum.photos/seed/fictionnovel814/300/300",
        price: 4985.88
    },
    {
        id: 17,
        title: "Self Help Book",
        description: "Self Help Book - High quality and durable. Perfect for everyday use.",
        category: "Books",
        image: "https://picsum.photos/seed/selfhelpbook171/300/300",
        price: 3649.57
    },
    {
        id: 18,
        title: "Science Textbook",
        description: "Science Textbook - High quality and durable. Perfect for everyday use.",
        category: "Books",
        image: "https://picsum.photos/seed/sciencetextbook501/300/300",
        price: 8122.42
    },
    {
        id: 19,
        title: "Children's Storybook",
        description: "Children's Storybook - High quality and durable. Perfect for everyday use.",
        category: "Books",
        image: "https://picsum.photos/seed/childrensstorybook925/300/300",
        price: 6845.18
    },
    {
        id: 20,
        title: "Biography",
        description: "Biography - High quality and durable. Perfect for everyday use.",
        category: "Books",
        image: "https://picsum.photos/seed/biography205/300/300",
        price: 8163.23
    },
    {
        id: 21,
        title: "Remote Car",
        description: "Remote Car - High quality and durable. Perfect for everyday use.",
        category: "Toys",
        image: "https://picsum.photos/seed/remotecar148/300/300",
        price: 4557.99
    },
    {
        id: 22,
        title: "Lego Set",
        description: "Lego Set - High quality and durable. Perfect for everyday use.",
        category: "Toys",
        image: "https://picsum.photos/seed/legoset846/300/300",
        price: 7800.36
    },
    {
        id: 23,
        title: "Doll House",
        description: "Doll House - High quality and durable. Perfect for everyday use.",
        category: "Toys",
        image: "https://picsum.photos/seed/dollhouse615/300/300",
        price: 6605.64
    },
    {
        id: 24,
        title: "Puzzle Game",
        description: "Puzzle Game - High quality and durable. Perfect for everyday use.",
        category: "Toys",
        image: "https://picsum.photos/seed/puzzlegame182/300/300",
        price: 5838.97
    },
    {
        id: 25,
        title: "Board Game",
        description: "Board Game - High quality and durable. Perfect for everyday use.",
        category: "Toys",
        image: "https://picsum.photos/seed/boardgame199/300/300",
        price: 1641.06
    },
    {
        id: 26,
        title: "Lipstick",
        description: "Lipstick - High quality and durable. Perfect for everyday use.",
        category: "Beauty",
        image: "https://picsum.photos/seed/lipstick287/300/300",
        price: 4275.49
    },
    {
        id: 27,
        title: "Face Wash",
        description: "Face Wash - High quality and durable. Perfect for everyday use.",
        category: "Beauty",
        image: "https://picsum.photos/seed/facewash371/300/300",
        price: 2014.94
    },
    {
        id: 28,
        title: "Sunscreen",
        description: "Sunscreen - High quality and durable. Perfect for everyday use.",
        category: "Beauty",
        image: "https://picsum.photos/seed/sunscreen866/300/300",
        price: 2318.97
    },
    {
        id: 29,
        title: "Hair Dryer",
        description: "Hair Dryer - High quality and durable. Perfect for everyday use.",
        category: "Beauty",
        image: "https://picsum.photos/seed/hairdryer959/300/300",
        price: 9981.95
    },
    {
        id: 30,
        title: "Nail Polish",
        description: "Nail Polish - High quality and durable. Perfect for everyday use.",
        category: "Beauty",
        image: "https://picsum.photos/seed/nailpolish338/300/300",
        price: 9092.71
    }
];

export default data;
