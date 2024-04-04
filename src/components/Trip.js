import React from 'react'
import TripData from './TripData'
import "./trip.css"
function Trip() {
  return (<>
    <div className="trip">
        <h1>Create Your Trip</h1>
    </div>
    <div className='col'>
      <div className='row mx-3 my-4'>
    <TripData 
     tripimg="https://wallpapercave.com/wp/wp4190260.jpg"
     triplocation="Go Goa Gone"
     tripdetails=" 4 days 5 night "
     price="INR 29,000/- Only"
     />

     <TripData
     tripimg="https://c1.wallpaperflare.com/preview/988/16/35/sunset-kerala-aleppay-boat.jpg"
     triplocation="Kerala - God's Own Land"
     tripdetails=" 4 days 5 night "
     price="INR 39,000/- Only"
     />

     <TripData
     tripimg="https://c1.wallpaperflare.com/preview/128/440/23/india-jaipur-palace-rajasthan-travel.jpg"
     triplocation="Rajasthan - The Increadible State of India"
     tripdetails=" 3 days 4 night "
     price="INR 50,000/- Only"
     />

    
    </div>
  </div>
  <div className='col'>
      <div className='row mx-3 my-4'>
    <TripData 
     tripimg="https://images.unsplash.com/photo-1579689189009-874f5cac2db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1304&q=80"
     triplocation="Kullu - Manali-Shimla"
     tripdetails=" 6 days 5 night "
     price="INR 25,000/- Only"
     />

     <TripData
     tripimg="https://dynamic.tourtravelworld.com/package-images/photo-big/dir_8/233281/318293.jpg"
     triplocation="The Great-Gujrat"
     tripdetails=" 5 days 6 night "
     price="INR 31,000/- Only"
     />

     <TripData
     tripimg="https://as2.ftcdn.net/v2/jpg/03/62/78/07/1000_F_362780780_Pr7kwGOF6lDqUZjx9C4R3rNLi4f59kxP.jpg"
     triplocation="The Mesmerizing Kokan"
     tripdetails=" 6 days 5 night "
     price="INR 15,000/- Only"
     />

     
    </div>
      
    </div>
    <div className='col'>
      <div className='row mx-3 my-4'>
    <TripData 
     tripimg="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jalgaon_skyline.jpg/516px-Jalgaon_skyline.jpg"
     triplocation="Jalgaon-Golden City Of Maharastra"
     tripdetails=" 15 days 16 night "
     price="INR 75,000/- Only"
     />

     <TripData
     tripimg="https://mumbai7.com/ezoimgfmt/i0.wp.com/mumbai7.com/wp-content/uploads/2021/01/ING_62097_04835.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1&resize=1024%2C683&ssl=1"
     triplocation="City of Dreams - Mumbai"
     tripdetails=" 6 days 5 night "
     price="INR 39,000/- Only"
     />

     <TripData
     tripimg="https://upload.wikimedia.org/wikipedia/commons/e/e1/Dal_Lake_Hazratbal_Srinagar.jpg"
     triplocation="Kashmir- The Heaven On Earth"
     tripdetails=" 6 days 5 night "
     price="INR 50,000/- Only"
     />

    </div>
      
    </div>
    

    
     </>  
  )
}

export default Trip