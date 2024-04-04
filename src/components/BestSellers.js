import React from 'react'
import BestSellerData from './BestSellerData'
import "./BestSellers.css"
function BestSellers() {
  return (<>
    <div className='bestsellers'>
      <h1>Best Sellers</h1>
      <p>These are some most sold tour packages </p>
        </div>

        <BestSellerData
        className="first-bestseller"
        heading="Kelara- God's Own Country"
        text="Kerala, located on the south-western tip of India, enjoys unique
      geographical features that have made it one of the most sought-after 
      tourist destinations in Asia. Fondly referred to as ‘God’s Own Country’, 
      Kerala was selected by the National Geographic Traveller as one of the 50 
      destinations of a lifetime and one of the thirteen paradises in the world.
      An equable climate, serene beaches, tranquil stretches of backwaters, lush 
      hill stations and exotic wildlife are the major attractions of this land. 
      A unique advantage of Kerala is that most of the destinations here are only 
      a two - four hour drive from the other."
      img1="https://c1.wallpaperflare.com/preview/988/16/35/sunset-kerala-aleppay-boat.jpg"
      img2="https://pbs.twimg.com/media/EASuaLEUYAc3n6K?format=jpg&name=900x900"

        />

        <BestSellerData
        className="first-bestseller-reverse"
        heading="Rajasthan - The 'Incredible State of India '"
        text="The major tourist attraction of Rajasthan are its havelis, palaces and forts 
            that add to the experience of exploring one of the historically wealthy states in 
          India. Some of the most famous and most visited forts in Rajasthan are Chittorgarh,
          Mehrangarh, Jaisalmer, Jaigarh and Junagadh Forts. Of these, the Mehrangarh Fort in
            Jodhpur is spread over 5 kilometers and stands on a hill almost 125 kilometers high.
            Chittorgarh Fort is also a must visited tourist attraction, as it’s the largest fort 
            in Asia. It is spread over an area of 700 acres, extending to 3 km in length and 13 km
              in peripheral length. The exquisite architecture isn’t only confined to the palaces
              and forts as Rajasthan also boasts impressive Hindu & Jain temples like Dilwara Jain 
              Temples and Eklingji Temple."
        img1="https://c1.wallpaperflare.com/preview/128/440/23/india-jaipur-palace-rajasthan-travel.jpg"
        img2="https://c0.wallpaperflare.com/preview/782/526/360/rajasthan-camel-safari-trekking.jpg"

        />
     
     <BestSellerData
        className="first-bestseller"
        heading="Goa-Go,Goa,Goneeee"
        text="Goa, located on the western coast of India, is a state renowned for its 
        picturesque beaches, vibrant culture, and delicious cuisine. The state is a unique 
        blend of Indian and Portuguese influences, evident in its architecture, food, and 
        way of life. From the bustling markets of Panaji to the tranquil beaches of Palolem, 
        Goa offers something for every type of traveler. Whether you're looking to relax and 
        soak up the sun or explore the rich history and culture of the region, Goa has it all.
        With its warm weather, friendly people, and laid-back vibe, it's no wonder that Goa 
        is one of India's top tourist destinations."
      img1="https://wallpapercave.com/wp/wp4190260.jpg"
      img2="https://c1.wallpaperflare.com/preview/440/403/594/architecture-travel-sky-church-tourism-building.jpg"

        />

     <BestSellerData
        className="first-bestseller-reverse"
        heading="Kullu-Manali"
        text="Manali, nestled in the stunning Himalayas, is a popular tourist destination 
        in India that offers a unique blend of scenic beauty, adventure, and culture. The 
        town is situated at an altitude of 2050 meters above sea level, and boasts breathtaking 
        landscapes of snow-capped mountains, lush green valleys, and meandering rivers. Manali is 
        a hub for adventure enthusiasts, offering thrilling activities such as trekking, skiing, 
        paragliding, rafting, and zorbing. The town is also known for its rich cultural heritage 
        and hosts several festivals throughout the year, including the famous Hadimba Devi Temple 
        Festival and the Winter Carnival. With its pleasant climate, natural beauty, and endless 
        opportunities for adventure, Manali is a must-visit destination for anyone looking to experience 
        the best that India has to offer."
        img1="https://images.unsplash.com/photo-1579689189009-874f5cac2db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1304&q=80"
        img2="https://www.seawatersports.com/img/newimage/activies/slide/water-sports-in-manali-package.jpg"

        />


        </>
  )
}

export default BestSellers 