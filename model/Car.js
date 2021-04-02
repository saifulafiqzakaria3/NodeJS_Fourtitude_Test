const carList = [
    {
      id: 1,
      carname: "Axia",
      brand: "Perodua",
      description: "1.0 Compact Economy Car",
      variance: [
          {id: 11, name: "E Manual", price: "24090"},
          {id: 12, name: "G", price: "33490"},
          {id: 13, name: "GXtra", price: "34990"},
          {id: 13, name: "SE", price: "38890"},
          {id: 13, name: "AV", price: "43190"},
      ],
    },
    {
      id: 2,
      carname: "Iriz",
      brand: "Proton",
      description: "1.3 Compact Car",
      variance: [
          {id: 21, name: "Executive", price: "44700"},
          {id: 22, name: "Standard", price: "36700"},
          {id: 23, name: "Premium", price: "50700"},
      ],
    },
    {
      id: 3,
      carname: "Yaris",
      brand: "Toyota",
      description: "1.5 Aesthatic Design Economy Car",
      variance: [
          {id: 31, name: "J", price: "70940"},
          {id: 32, name: "E", price: "80380"},
          {id: 33, name: "G", price: "84808"},
      ],
    },
    {
      id: 4,
      carname: "Jazz",
      brand: "Honda",
      description: "1.5 Compact Economy Car",
      variance: [
          {id: 41, name: "S", price: "72511"},
          {id: 42, name: "E", price: "78161"},
          {id: 43, name: "V", price: "84955"},
      ],
    },
    {
      id: 5,
      carname: "Mazda 2 Hatchback",
      brand: "Mazda",
      description: "2020 Naturally-aspirated.",
      variance: [
          {id: 51, name: "1.5L Soul Red Crystal", price: "101310"},
          {id: 52, name: "1.5L", price: "100870"},
      ],
    },
    {
      id: 6,
      carname: "Versa Note SR 2018",
      brand: "Nissan",
      description: "Subcompact sedan.",
      variance: [
          {id: 61, name: "1.5L Standard", price: "78200"}
      ],
    },
    {
      id: 7,
      carname: "Focus Sedan",
      brand: "Ford",
      description: "Fun and practical compact car.",
      variance: [
          {id: 71, name: "2017 1.5 EcoBoost Titanium", price: "131986"}
      ],
    },
    {
      id: 8,
      carname: "Hyundai Veloster",
      brand: "Hyundai",
      description: "Fun and practical compact car.",
      variance: [
          {id: 81, name: "2017 Turbo", price: "154488"},
          {id: 82, name: "2017 Turbo Sport", price: "158188"}
      ],
    },
    {
      id: 9,
      carname: "Volkswagen Golf R",
      brand: "Volkswagen",
      description: "Elegant Pricey Compact Car",
      variance: [
          {id: 91, name: "2019 2.0 TSI", price: "305562"}
      ],
    },
    {
      id: 10,
      carname: "Honda City",
      brand: "Honda",
      description: "Efficient Car",
      variance: [
          {id: 101, name: "2020 RS 1.5 Hybrid", price: "TBC"},
          {id: 102, name: "2020 1.5L S", price: "74191"},
          {id: 103, name: "2020 1.5L E", price: "81664"},
      ],
    },
    {
      id: 11,
      carname: "HR-V",
      brand: "Honda",
      description: "Fuel Efficient Sportier Looking Car",
      variance: [
          {id: 111, name: "2019 1.5 Hybrid", price: "128800"},
          {id: 112, name: "2019 1.8 E", price: "104000"},
          {id: 113, name: "2019 1.8 RS", price: "118581"},
      ],
    },
    {
      id: 12,
      carname: "Honda Accord",
      brand: "Honda",
      description: "Luxury looking car",
      variance: [
          {id: 121, name: "2020 1.5 TC", price: "178203"},
          {id: 122, name: "2020 1.5 TC Premium", price: "187390"},
      ],
    },
    {
      id: 13,
      carname: "Alza",
      brand: "Perodua",
      description: "1.5 7 Seater Car",
      variance: [
          {id: 131, name: "E Manual", price: "24090"},
          {id: 132, name: "G", price: "33490"},
          {id: 133, name: "GXtra", price: "34990"},
      ],
    },
    {
      id: 14,
      carname: "Bezza",
      brand: "Perodua",
      description: "1.5 Fuel Saving Car",
      variance: [
          {id: 141, name: "E Manual", price: "24090"},
          {id: 142, name: "G", price: "33490"},
          {id: 143, name: "GXtra", price: "34990"},
      ],
    },
  ];

  const motorList = [
    {id: 1, name: "ab"},
    {id: 2, name: "cd"},
    {id: 3, name: "ef"},
    {id: 4, name: "gh"},
    {id: 5, name: "ij"},
    {id: 6, name: "kl"},
    {id: 7, name: "mn"},
    {id: 9, name: "op"},
    {id: 10, name: "qr"},
    {id: 11, name: "st"},
    {id: 12, name: "uv"},
    {id: 13, name: "wx"},
    {id: 14, name: "yz"},
    {id: 15, name: "lc 135"},
    {id: 16, name: "rxz"},
    {id: 17, name: "kriss"},
    {id: 18, name: "wave"},
    {id: 19, name: "yamaha 125"},
    {id: 20, name: "rr"},
    {id: 21, name: "ali"},
    {id: 22, name: "abu"},
    {id: 23, name: "abnaa"},
    {id: 24, name: "abiii"},
    {id: 25, name: "bolo"},
    {id: 26, name: "kasut"},
  ];

  module.exports = Object.freeze({
    carList,
    motorList
  });
  