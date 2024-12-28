import { ReviewCard } from "../components"
import {reviews} from "../constants"
const CustomerReviews = () => {
return (
<section>
  <h3 className="font-palanquin text-4xl font-bold text-center">
    What our 
    <span className="text-coral-red"> Customers</span> Say?
  </h3>
  <p className="m-auto max-w-lg text-center mt-4 info-text" >Hear genuine stories from our satisfied customers about their
  exceptional experiences with us.</p>

  <div className="mt-24 flex flex-1 justify-evenly items-center 
     max-lg:flex-col gap-14">
    {
      reviews.map((review,index) => (
        <ReviewCard 
         key={index}
         imgURL = {review.imgURL}
         customerName = {review.customerName}
         rating = {review.rating}
         feedback= {review.feedback}
        />
      ))
    }
  </div>

</section>

)}

export default CustomerReviews
