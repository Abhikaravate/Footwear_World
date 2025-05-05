import React from "react";
import "./home1.css";

const productsData = {
  PUMA: [
    {
      name: "Suede Classic Sneakers",
      price: "₹5,599",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/399781/01/sv01/fnd/IND/fmt/png/Suede-Classic-Sneakers",
    },
    {
      name: "Superior Comfort Casual Shoes",
      price: "₹4,639",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/402200/05/sv01/fnd/IND/fmt/png/X-Ray-2-Square-Superior-Comfort-Casual-Shoes",
    },
    {
      name: "Carina Slim Perf Women's Sneakers",
      price: "₹2,469",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/395829/02/sv01/fnd/IND/fmt/png/Carina-Slim-Perf-Women's-Sneakers",
    },
    {
      name: "X- Ray Airflex Women's Sneakers",
      price: "₹4,999",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/399810/02/sv01/fnd/IND/fmt/png/X--Ray-Airflex-Women's-Sneakers",
    },
    {
      name: "Men's Lightweight Football Boots",
      price: "₹4,499",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/107477/10/sv01/fnd/IND/fmt/png/ATTACANTO-FG/AG-Men's-Lightweight-Football-Boots",
    },
    {
      name: "Court Pro Basketball Shoes",
      price: "₹7,999",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/310829/02/SV01/fnd/IND/fmt/png/Court-Pro-Basketball-Shoes",
    },
  ],
  Adidas: [
    {
      name: "Gazelle Shoes",
      price: "₹9,999",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/340aeb9ac43847fea000a8da0182b561_9366/Gazelle_Shoes_Burgundy_B41645_01_standard.jpg",
    },
    {
      name: "Supernova Stride 2 Running Shoes",
      price: "₹11,999",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/16f77a7524ae48ea81dbffa66c5565d5_9366/Supernova_Stride_2_Running_Shoes_Black_JI1419_01_standard.jpg",
    },
    {
      name: "Supernova Rise Running Shoes",
      price: "₹14,999",
      image:
        "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a6d3eaa12554499a72b4590d59e753d_9366/Supernova_Rise_Running_Shoes_Purple_IF3022_HM1.jpg",
    },
    {
      name: "Galaxy 7 Running Shoes",
      price: "₹5,999",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f037b80fa3dd452f855782496a7a5ec3_9366/Galaxy_7_Running_Shoes_Black_ID8763_01_standard.jpg",
    },
    {
      name: "F50 Club Firm/Multi-Ground Boots",
      price: "₹5,999",
      image:
        "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/095a2e351d564746ad173c7d27eb5783_9366/F50_Club_Firm-Multi-Ground_Boots_White_IE1243_01_00_standard_hover.jpg",
    },
    {
      name: "Dropset 3 strength training shoes",
      price: "₹12,999",
      image:
        "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc463973f8944f609b3afc22b90e3f20_9366/Dropset_3_strength_training_shoes_Grey_ID8627_01_standard.jpg",
    },
  ],
  Nike: [
    {
      name: "Jordan B'Loyal",
      price: "₹11,895",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2aa4034-1116-4d39-aa8b-3e4cf095b316/JORDAN+B%27LOYAL.png",
    },
    {
      name: "Nike Air Zoom Spiridon Cage 2",
      price: "₹15,995",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7dc19c50-2dfa-4248-b0f3-ebdf05d2af82/AIR+ZOOM+SPIRIDON+CAGE+2.png",
    },
    {
      name: "Nike Air Max Dn8 Men's Shoes",
      price: "₹17,495",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0d641577-64b4-4963-92d5-2054a2f6de58/AIR+MAX+DN8+AMD.png",
    },
    {
      name: "Nike Pegasus plus Women's Shoes",
      price: "₹16,995",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/224023ec-160e-447d-a88c-a96718ce69e5/W+PEGASUS+PLUS.png",
    },
    {
      name: "Nike Free Metcon 6 By You",
      price: "₹13,995",
      image:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9b39237a-9e04-4cc5-b022-7b1d59e5ce96/custom-nike-free-metcon-6-shoes-by-you.png",
    },
    {
      name: "Nike SB Dunk Low Pro",
      price: "₹10,795",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f09ae510-7304-4c94-9a2e-b391a2ec407e/NIKE+SB+DUNK+LOW+PRO.png",
    },
  ],
};

function Home1() {
  return (
    <main>
      {Object.entries(productsData).map(([brand, items]) => (
        <section key={brand}>
          <h2 className="section-title">{brand}</h2>
          <div className="products">
            {items.map((item, index) => (
              <div className="product" key={index}>
                <img src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
          <br />
        </section>
      ))}
    </main>
  );
}

export default Home1;
