
const productsData = {
    PUMA: [
      {
        name: "Suede Classic Sneakers",
        price: "₹5,599",
        images: [
          "https://images.puma.com/image/upload/f_auto,q_auto/global/399781/01/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/399781/02/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/399781/03/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/399781/04/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/402200/04/fnd/IND/fmt/png"

        ],
        description: "Comfortable and stylish suede sneakers with a classic design.",
        category: "Casual",
        rating: 4.5,
        availability: "In Stock",
        sizes: [6, 7, 8, 9, 10]
      },
      {
        name: "Superior Comfort Casual Shoes",
        price: "₹4,639",
        images: [
          "https://images.puma.com/image/upload/f_auto,q_auto/global/402200/05/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/402200/02/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/402200/03/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/402200/04/fnd/IND/fmt/png"
        ],
        description: "X-Ray 2 Square design for long-lasting comfort and durability.",
        category: "Casual",
        rating: 4.2,
        availability: "In Stock",
        sizes: [7, 8, 9, 10, 11]
      },
      {
        name: "Carina Slim Perf Women's Sneakers",
        price: "₹2,469",
        images: [
          "https://images.puma.com/image/upload/f_auto,q_auto/global/395829/02/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/395829/03/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/395829/04/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/395829/05/fnd/IND/fmt/png"
        ],
        description: "Women’s sneakers designed with perforated detailing for breathability.",
        category: "Women",
        rating: 4.6,
        availability: "Only few left",
        sizes: [5, 6, 7, 8]
      },
      {
        name: "X-Ray Airflex Women's Sneakers",
        price: "₹4,999",
        images: [
          "https://images.puma.com/image/upload/f_auto,q_auto/global/399810/02/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/399810/03/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/399810/04/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/399810/05/fnd/IND/fmt/png"
        ],
        description: "Stylish and comfortable sneakers for all-day wear.",
        category: "Women",
        rating: 4.4,
        availability: "In Stock",
        sizes: [6, 7, 8, 9]
      },
      {
        name: "Men's Lightweight Football Boots",
        price: "₹4,499",
        images: [
          "https://images.puma.com/image/upload/f_auto,q_auto/global/107477/10/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/107477/11/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/107477/12/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/107477/13/fnd/IND/fmt/png"
          
        ],
        description: "Durable and agile boots designed for fast gameplay.",
        category: "Sports",
        rating: 4.1,
        availability: "In Stock",
        sizes: [7, 8, 9, 10, 11]
      },
      {
        name: "Court Pro Basketball Shoes",
        price: "₹7,999",
        images: [
          "https://images.puma.com/image/upload/f_auto,q_auto/global/310829/02/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/310829/03/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/310829/04/fnd/IND/fmt/png",
          "https://images.puma.com/image/upload/f_auto,q_auto/global/310829/05/fnd/IND/fmt/png"
        ],
        description: "Designed for court dominance and ankle support.",
        category: "Basketball",
        rating: 4.8,
        availability: "In Stock",
        sizes: [8, 9, 10, 11, 12]
      }
    ],
  
    Adidas: [
      {
        name: "Gazelle Shoes",
        price: "₹9,999",
        images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto/340aeb9ac43847fea000a8da0182b561_9366/Gazelle_Shoes_Burgundy_B41645_01_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto/340aeb9ac43847fea000a8da0182b561_9366/Gazelle_Shoes_Burgundy_B41645_02_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto/340aeb9ac43847fea000a8da0182b561_9366/Gazelle_Shoes_Burgundy_B41645_03_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto/340aeb9ac43847fea000a8da0182b561_9366/Gazelle_Shoes_Burgundy_B41645_04_standard.jpg"
        ],
        description: "A timeless Adidas classic in burgundy suede.",
        category: "Casual",
        rating: 4.7,
        availability: "In Stock",
        sizes: [6, 7, 8, 9, 10]
      },
      {
        "name": "Forum Low Classic",
        "price": "₹8,999",
        "images": [
          "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/22c7851db46a4310b242a6581d6323ea_9366/Adimove_M_Blue_JJ5646_01_00_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto/147eb4509f52401d9802afc900ad9846_9366/Forum_Low_Classic_Shoes_White_IE7203_02_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto/181cd55efce9407ea6b6afc900ad9902_9366/Forum_Low_Classic_Shoes_White_IE7203_03_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto/01f87719b9bb4a12ac2bafc900ad99ad_9366/Forum_Low_Classic_Shoes_White_IE7203_04_standard.jpg"
        ],
        "description": "A retro basketball silhouette reimagined for daily style.",
        "category": "Casual",
        "rating": 4.3,
        "availability": "In Stock",
        "sizes": [6, 7, 8, 9, 10],
         
      },
      {
        name: "Ultraboost Light",
        price: "₹15,999",
        images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/340aeb9ac43847fea000a8da0182b561_9366/Gazelle_Shoes_Burgundy_B41645_01_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/340aeb9ac43847fea000a8da0182b561_9366/Gazelle_Shoes_Burgundy_B41645_01_standard.jpg",
          "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e7ac0e064475430cadd4a8da0181083c_9366/Gazelle_Shoes_Burgundy_B41645_03_standard.jpg",
          "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/1c284110e2fc4fa8a604a8da018253cf_9366/Gazelle_Shoes_Burgundy_B41645_09_standard.jpg"
        ],
        description: "Responsive running shoes with Boost technology.",
        category: "Running",
        rating: 4.8,
        availability: "In Stock",
        sizes: [7, 8, 9, 10, 11]
      },
      {
        name: "NMD_R1 Primeblue",
        price: "₹13,499",
        images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/16f77a7524ae48ea81dbffa66c5565d5_9366/Supernova_Stride_2_Running_Shoes_Black_JI1419_01_standard.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/88582980f64a4849a5d83f3be2b7f287_9366/Supernova_Stride_2_Running_Shoes_Black_JI1419_09_standard.jpg",
         "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7bd5a3366d0446b19288fe8a9b5668ca_9366/Supernova_Stride_2_Running_Shoes_Black_JI1419_03_standard.jpg",
          "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/89f4d6ebf4b4401ebb8d6a44bcf52966_9366/Supernova_Stride_2_Running_Shoes_Black_JI1419_02_standard_hover.jpg"
               ],
        description: "Eco-friendly comfort crafted from ocean plastic.",
        category: "Sneakers",
        rating: 4.6,
        availability: "Limited Stock",
        sizes: [7, 8, 9, 10]
      },
      {
        name: "Adizero Boston 12 Shoes",
        price: "₹3,499",
        images: [
           "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/9eb547b4566f42289ef61d0ebb8b106e_9366/Adizero_Boston_12_Shoes_White_JQ2552_HM7.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/86dc337834b846cfa10fcbe6282133a3_9366/Adizero_Boston_12_Shoes_White_JQ2552_HM1.jpg",
         
          "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/1fe10fd49283495397d0a16115a98653_9366/Adizero_Boston_12_Shoes_White_JQ2552_HM4.jpg",
          "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e66b5892e7e547438dd4a281344c05be_9366/Adizero_Boston_12_Shoes_White_JQ2552_HM8.jpg"     
                ],
        description: "Eco-friendly comfort crafted from ocean plastic.",
        category: "Sneakers",
        rating: 4.6,
        availability: "Limited Stock",
        sizes: [7, 8, 9, 10]
      },
      {
        name: "Adizero Boston",
        price: "₹7,499",
        images: [
          "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/eefd8ff4ad8a48a7b4d2d11d4e88e1e4_9366/lightrun-clip.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/74e01513fc784a389b5d2dbdefba1e84_9366/Lightrun_clip_White_JK0926_01_00_standard.jpg",
          "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/bbfe511d6c1f4b8fb10618600e3e3940_9366/Lightrun_clip_White_JK0926_05_standard.jpg",
          "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/60ba6d645db04ccb9e8abc83ac0ba8ae_9366/Lightrun_clip_White_JK0926_42_detail.jpg"                ],
        description: "Eco-friendly comfort crafted from ocean plastic.",
        category: "Sneakers",
        rating: 4.6,
        availability: "Limited Stock",
        sizes: [7, 8, 9, 10]
      },
     
      // Repeat similar structure for other Adidas shoes...
    ],
  
    Nike: [
      {
        name: "Jordan B'Loyal",
        price: "₹11,895",
        images: [
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2aa4034-1116-4d39-aa8b-3e4cf095b316/JORDAN+B%27LOYAL.png",
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2aa4034-1116-4d39-aa8b-3e4cf095b316/JORDAN+B%27LOYAL_2.png",
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2aa4034-1116-4d39-aa8b-3e4cf095b316/JORDAN+B%27LOYAL_3.png",
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2aa4034-1116-4d39-aa8b-3e4cf095b316/JORDAN+B%27LOYAL_4.png"
        ],
        description: "Premium basketball sneakers with iconic Jordan styling.",
        category: "Basketball",
        rating: 4.9,
        availability: "In Stock",
        sizes: [8, 9, 10, 11],
      },
      {
        name: "Jordan B'Loyal",
        price: "₹1,005",
        images: [
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/022bd9c4-6eb9-41b7-969d-85d8b9f0a030/AIR+JORDAN+1+LOW.png",
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/292e1cad-82eb-4394-864c-843aeaa3e790/AIR+JORDAN+1+LOW.png",
           "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5d9b868d-22b7-48a8-b0c2-73e4a4227b20/AIR+JORDAN+1+LOW.png",
          " https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3acc7964-a93b-4bf9-be0f-4e5ce3ac7d6a/AIR+JORDAN+1+LOW.png"
                ],
        description: "Premium basketball sneakers with iconic Jordan styling.",
        category: "Casual",
        rating: 4.9,
        availability: "In Stock",
        sizes: [8, 9, 10, 11],
      },
      {
        name: " Nike Blazer Lowl",
        price: "₹11,895",
        images: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e68d1784-9557-4a4c-9035-1ab7d6373a10/custom-nike-blazer-low-shoes-by-you.png",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3d77e58f-8f36-442b-a54a-ea3960f9d029/custom-nike-blazer-low-shoes-by-you.png",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/06df7719-a898-44b5-b758-50dccc133459/custom-nike-blazer-low-shoes-by-you.png",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/39ac3f38-3c3c-49d2-aa4a-2a1c8e0007ea/custom-nike-blazer-low-shoes-by-you.png  " 
               ],
        description: "Premium basketball sneakers with iconic Jordan styling.",
        category: "Casual",
        rating: 4.9,
        availability: "In Stock",
        sizes: [8, 9, 10, 11],
      },
      {
        name: "Zion 4 PF Sharonda",
        price: "₹18,895",
        images: [
         " https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0649dc3c-828e-41f4-8bb8-ea8085107bce/JORDAN+ZION+4+PF.png",
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ee6ce8f5-564e-4ab1-8026-3893da19adf1/JORDAN+ZION+4+PF.png",
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dff0b849-fac9-4d30-b6a9-20773549ae91/JORDAN+ZION+4+PF.png",
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d414fbbf-794b-4376-8cdb-f85dc909a0fd/JORDAN+ZION+4+PF.png"
               ],
        description: "Premium basketball sneakers with iconic Jordan styling.",
        category: "Casual",
        rating: 4.9,
        availability: "In Stock",
        sizes: [8, 9, 10, 11],
      },
      {
        name: "Nike Air Max Dn8",
        price: "₹88,895",
        images: [
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/df641e74-858a-4b8e-bb04-dbf7efc8ccff/AIR+MAX+DN8.png",
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/18c4b25d-8596-47f9-9520-003f274f8e5f/AIR+MAX+DN8.png",
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8fc6d146-5ced-4c64-8717-329f225044d2/AIR+MAX+DN8.png",
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/976e7cc2-4fa2-4434-948a-6b2868bd82c1/AIR+MAX+DN8.png"
                       ],
        description: "Premium basketball sneakers with iconic Jordan styling.",
        category: "Sport",
        rating: 4.9,
        availability: "In Stock",
        sizes: [8, 9, 10, 11],
      },
      {
        name: "Cygnal Solar Flare ",
        price: "₹8,158",
        images: [
         "https://static.nike.com/a/images/w_1280,q_auto,f_auto/c6d74a65-3339-4cde-bfb4-005699a96051/cygnal-solar-flare-fv4332-700-release-date.jpg",
           "https://static.nike.com/a/images/w_1280,q_auto,f_auto/07a0383a-4c16-4b30-b4f4-cdfa56f87733/cygnal-solar-flare-fv4332-700-release-date.jpg",
           "https://static.nike.com/a/images/w_1280,q_auto,f_auto/b12d68d0-d1b8-4e25-92ab-6062cb4b5d14/cygnal-solar-flare-fv4332-700-release-date.jpg",
          "https://static.nike.com/a/images/w_1280,q_auto,f_auto/e1877844-270f-4f78-a6b7-b33c1f78d7f9/cygnal-solar-flare-fv4332-700-release-date.jpg"           
                 ],
        description: "Premium basketball sneakers with iconic Jordan styling.",
        category: "Sport",
        rating: 4.9,
        availability: "In Stock",
        sizes: [8, 9, 10, 11],
      },
     
      // Repeat similar structure for other Nike shoes...
    ],
   
  };
 
  
  
  export default productsData;
  