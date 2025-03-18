const livreson = {
  categories: [
    {
      id: 1,
      name: "Appetizers",
      items: [
        { id: 101, name: "Salade César", price: 8.50, description: "Laitue romaine, croûtons, parmesan, sauce césar", image: "", category: "Entrées" },
        { id: 102, name: "Bruschetta", price: 6.90, description: "Pain grillé, tomates, basilic, huile d'olive", image: "", category: "Entrées" },
        { id: 103, name: "Soupe à l'oignon", price: 7.20, description: "Soupe traditionnelle française avec fromage fondu", image: "", category: "Entrées" }
      ]
    },
    {
      id: 2,
      name: "Main Dishes",
      items: [
        { id: 201, name: "Spaghetti Bolognese", price: 12.50, description: "Pâtes italiennes avec sauce bolognaise", category: "Plats Principaux" },
        { id: 202, name: "Pizza Margherita", price: 10.90, description: "Tomate, mozzarella, basilic", category: "Plats Principaux" },
        { id: 203, name: "Steak Frites", price: 15.90, description: "Steak de bœuf accompagné de frites maison", category: "Plats Principaux" }
      ]
    },
    {
      id: 3,
      name: "Desserts",
      items: [
        { id: 301, name: "Tiramisu", price: 6.50, description: "Dessert italien au café et mascarpone", category: "Desserts" },
        { id: 302, name: "Fondant au Chocolat", price: 7.00, description: "Gâteau moelleux avec cœur coulant", category: "Desserts" },
        { id: 303, name: "Crème Brûlée", price: 6.90, description: "Crème vanille avec caramel croquant", category: "Desserts" }
      ]
    },
    {
      id: 4,
      name: "Drinks",
      items: [
        { id: 401, name: "Avocado Juice", price: 2.50, description: "Jus d'avocat", category: "Boissons" },
        { id: 402, name: "Soda", price: 3.50, description: "Coca-Cola, Fanta, Sprite", category: "Boissons" },
        { id: 403, name: "Jus d'Orange", price: 4.00, description: "Jus d'orange pressé", category: "Boissons" }
      ]
    }
  ],
  promotions: []
};

export default livreson;
