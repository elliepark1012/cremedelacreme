user1 = User.create(
    {username:"elliepark", 
    email:"elliepark@ellie.com", 
    bio:"Food Magazin BonBon Editor", 
    profile_image:"hello", 
    password:"hi", 
    password_confirmation:"hi"
})

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
    name:"Osteria Morini",
    res_link:"https://www.ooisushi.com/",
    borough:"Queens",
    location:"4236 Crescent St",
    about:"Ooi sushi is the best sushi restaurant in all of Queens.",
    img_url:"https://website-cdn.menusifu.com/wp-content/uploads/ooisushi.com/2023/08/165.jpg",
    hours:"Monday - Sunday 11:30 AM–10 PM",
})

menu1 = Menuitem.create({
    restaurant_id:1,
    name:"chocolate cake",
    img_url:"chocolate cake",
    price:15,
    details:"chocolate cake",
})

reviews1 = Review.create({
    user_id:1,
    menuitem_id:1,
    review_image:"temp",
    ratings:5,
    comments:"temp"
})