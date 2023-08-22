user1 = User.create(
    {username:"elliepark", 
    email:"elliepark@ellie.com", 
    bio:"Food Magazin BonBon Editor", 
    profile_image:"hello", 
    password:"hi", 
    password_confirmation:"hi"
})

res1 = Restaurant.create({
    name:"bakery",
    res_link:"bakery",
    borough:"bakery",
    location:"bakery",
    about:"bakery",
    img_url:"bakery",
    hours:"bakery",
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