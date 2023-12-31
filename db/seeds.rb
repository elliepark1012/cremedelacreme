Restaurant.create({
    name:"Marthas Country Bakery Bedford",
    res_link:"https://marthascountrybakery.com/",
    borough:"Brooklyn",
    location:"263 BEDFORD",
    about:"For over 54 years, Marthas has been a favorite stop for cakes, pies, and other delicious treats.",
    img_url:"https://marthascountrybakery.com/wp-content/uploads/2023/02/banner-02.png",
    hours:"Monday - Sunday 6:00 am - 12:00 am",
})

Restaurant.create({
    name:"Hanoi House",
    res_link:"https://www.hanoihousenyc.com/",
    borough:"Manhattan",
    location:"119 Saint Marks Place",
    about:"Hanoi House, located in the East Village of New York, is a relaxed destination for a limited menu of imaginative Vietnamese dishes, craft beers & wine.",
    img_url:"https://pyxis.nymag.com/v1/imgs/7ea/016/a8c837e8217a37dae618eeefe5b85b64ef-15-hanoi-house-3.2x.rhorizontal.w710.jpg",
    hours:"Tuesday & Wednesday  530pm - 930pm \n Thursday  530pm - 10pm \n Friday  530pm - 1030pm \n Saturday  1130am - 330pm  \n 530pm - 1030pm / Sunday  1130am - 330pm, 530pm - 930pm \n Closed on Mondays",
})

Restaurant.create({
    name:"Osteria Morini",
    res_link:"https://osteriamorini.com/soho-nyc/?utm_source=GoogleBusinessProfile&utm_medium=Website&utm_campaign=MapLabs",
    borough:"Manhattan",
    location:"218 Lafayette St",
    about:"Osteria Morini brings the soulful cuisine and convivial spirit of Emilia-Romagna in northern Italy to Manhattan's vibrant SoHo neighborhood.",
    img_url:"https://houseofhaos.files.wordpress.com/2014/02/house-of-haos-osteria-morini-new-york-tagliatelle.jpg?w=1632",
    hours:"MONDAY – THURSDAY 5:00pm – 10:00pm FRIDAY 12:00pm – 10:00pm SATURDAY- SUNDAY Brunch 11:00am – 3:30pm Dinner 3:30pm – 10:00pm",
})

Restaurant.create({
    name:"Ooi Sushi",
    res_link:"https://www.ooisushi.com/",
    borough:"Queens",
    location:"4236 Crescent St",
    about:"Ooi sushi is the best sushi restaurant in all of Queens.",
    img_url:"https://website-cdn.menusifu.com/wp-content/uploads/ooisushi.com/2023/08/165.jpg",
    hours:"Monday - Sunday 11:30 AM–10 PM",
})

Menuitem.create({
    restaurant_id:1,
    name:"Berry Napoleon",
    img_url:"https://marthascountrybakery.com/wp-content/uploads/2023/07/BERRYNAPOLEON-1000-1536x1536.jpg",
    price:7.5,
    details:"Napoleon cake is composed of many layers of puff pastry with a whipped pastry cream filling and encrusted with more pastry crumbs",
})

Menuitem.create({
    restaurant_id:1,
    name:"Chocolate Layer",
    img_url:"https://marthascountrybakery.com/wp-content/uploads/2023/06/CHOCOLATE-LAYER-1.jpg",
    price:7.5,
    details:"Chocolate Layer Slice",
})

Menuitem.create({
    restaurant_id:1,
    name:"Strawberry ShortCake",
    img_url:"https://marthascountrybakery.com/wp-content/uploads/2023/06/STRAWBERRYS-HORTCAKE.jpg",
    price:7.5,
    details:"Vanilla cake filled with layers of whipped cream frosting and juicy strawberries",
})

Menuitem.create({
    restaurant_id:2,
    name:"SUMMER ROLLS - GOI CUON with Pork Sausage",
    img_url:"https://cdn.vox-cdn.com/thumbor/p8qfebDOwe7_LlOwbfVOAsLxZ9w=/1600x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8239659/NS011564.jpg",
    price:12,
    details:"Fresh rice paper wrapped around cucumber, lettuce, mint and thai basil with peanut-hoisin sauce",
})

Menuitem.create({
    restaurant_id:2,
    name:"HOUSE SPECIAL - PHO DAC BIET",
    img_url:"https://pyxis.nymag.com/v1/imgs/7ea/016/a8c837e8217a37dae618eeefe5b85b64ef-15-hanoi-house-3.2x.rhorizontal.w710.jpg",
    price:26,
    details:"The works! Classic Hanoi style beef with rare filet mignon, oxtail, brisket, bone marrow & a crispy breadstick. No substitutions please.",
})

Menuitem.create({
    restaurant_id:2,
    name:"BRAISED BEEF BANH MI",
    img_url:"https://theoldwomanandthesea.com/wp-content/uploads/2020/12/2D8DDCD3-BA23-4932-9C3A-65BF09074C2C.jpeg",
    price:18,
    details:"Tender beef braised in pho broth, hoisin caramelized onions, charred chili sauce, cilantro & red onion on a toasted baguette with a side of pho broth for dipping.",
})

Menuitem.create({
    restaurant_id:3,
    name:"FUSILLI",
    img_url:"https://www.foodnut.com/i/Osteria-Morini-New-York/Osteria-Morini-New-York-Fusilli.jpg",
    price:28,
    details:"neopolitan pork shoulder ragù, robiolina.",
})

Menuitem.create({
    restaurant_id:3,
    name:"ANATRA",
    img_url:"https://njmonthly.com/wp-content/uploads/cache/2014/06/Morini_in_Bernardsville/1028546969.jpg",
    price:35,
    details:"long island duck breast, peach mostarda, roasted baby carrots",
})

Menuitem.create({
    restaurant_id:3,
    name:"GNOCCHI",
    img_url:"https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_center,f_auto/cms/reviews/osteria-morini/Osteria-Morini-Gnocchi-1",
    price:26,
    details:"kale pesto, tomato, ricotta salata",
})

Menuitem.create({
    restaurant_id:4,
    name:"Tiger Roll",
    img_url:"https://website-cdn.menusifu.com/wp-content/uploads/ooisushi.com/2023/08/0K9A9474.jpg",
    price:17, 
    details:"Spicy lobster & crunch, topped with shrimp, avocado & mango sauce",
})

Menuitem.create({
    restaurant_id:4,
    name:"Fantasy Roll",
    img_url:"https://website-cdn.menusifu.com/wp-content/uploads/ooisushi.com/2023/08/121.jpg",
    price:18, 
    details:"2pcs shrimp tempura topped with spicy tuna & crunchy",
})

Menuitem.create({
    restaurant_id:4,
    name:"Godzilla Roll",
    img_url:"https://website-cdn.menusifu.com/wp-content/uploads/ooisushi.com/2023/08/128.jpg",
    price:23, 
    details:"Includes deep-fried spicy tuna and avocado topped with caviar, scallion, and eel sauce",
})

user1 = User.create(
    {username:"elliepark", 
    email:"elliepark@ellie.com", 
    bio:"Food Magazin BonBon Editor", 
    password:"hi", 
    password_confirmation:"hi"
})

User.create(
    {
        username: "foodie_adventurer",
        email: "foodie@example.com",
        bio: "Exploring the world one plate at a time. Food lover, traveler, and storyteller.",
        password: "password123",
        password_confirmation: "password123"
    }
)

User.create(
    {
        username: "taste_tales",
        email: "taste@example.com",
        bio: "Capturing the essence of flavors through words. Sharing my gastronomic journey with you.",
        password: "mysecretpass",
        password_confirmation: "mysecretpass"
    }
)

User.create(
    {
        username: "culinary_nomad",
        email: "nomad@example.com",
        bio: "Roaming the culinary world, seeking hidden gems and savoring every bite. Join me on my global food quest!",
        password: "wanderlust123",
        password_confirmation: "wanderlust123"
    }
)

User.create(
    {
        username: "flavor_diaries",
        email: "diaries@example.com",
        bio: "Documenting flavors, aromas, and stories behind every dish. Food is my language, and I'm here to share it with you.",
        password: "flavorful",
        password_confirmation: "flavorful"
    }
)

User.create(
    {
        username: "gastronomy_guru",
        email: "guru@example.com",
        bio: "Guiding you through the intricate world of gastronomy. Exploring recipes, cultures, and everything delicious.",
        password: "savory123",
        password_confirmation: "savory123"
    }
)

user_ids = (1..6).to_a
mar_menu_item_ids = (1..3).to_a
han_menu_item_ids = (4..6).to_a
ost_menu_item_ids = (7..9).to_a
ooi_menu_item_ids = (10..12).to_a

ratings = (2..5).to_a

comments = [
  "Delicious flavors! A must-try.",
  "Exquisite presentation and taste.",
  "I couldn't get enough of this dish.",
  "A little disappointing, to be honest.",
  "Decent, but nothing extraordinary.",
  "Absolutely loved every bite!",
  "A unique blend of textures and tastes.",
  "Not my favorite. Could use improvement.",
  "This dish exceeded my expectations.",
  "Savoring this was a delightful experience.",
  "A little too salty for my liking.",
  "Perfect balance of flavors.",
  "I would order this again in a heartbeat.",
  "The chef's creativity shines through.",
  "Could be better with some adjustments.",
  "One of the best dishes I've ever had.",
  "The aroma alone was captivating.",
  "Lacks the wow factor I was hoping for.",
  "An unexpected combination that worked well.",
  "I'd recommend this to fellow foodies.",
  "Leaves a lasting impression on your palate.",
  "Not bad, but not outstanding either.",
  "A bit too spicy for me.",
  "Simple yet satisfying.",
  "Innovative and thoroughly enjoyable."
]

  5.times do
    review = Review.create(
      {
        user_id: user_ids.sample,
        menuitem_id: mar_menu_item_ids.sample,
        ratings: ratings.sample,
        comments: comments.sample
      }
    )
  end
  
  5.times do
    review = Review.create(
      {
        user_id: user_ids.sample,
        menuitem_id: han_menu_item_ids.sample,
        ratings: ratings.sample,
        comments: comments.sample
      }
    )
  end

  5.times do
    review = Review.create(
      {
        user_id: user_ids.sample,
        menuitem_id: ost_menu_item_ids.sample,
        ratings: ratings.sample,
        comments: comments.sample
      }
    )
  end

  5.times do
    review = Review.create(
      {
        user_id: user_ids.sample,
        menuitem_id: ooi_menu_item_ids.sample,
        ratings: ratings.sample,
        comments: comments.sample
      }
    )
  end