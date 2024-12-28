import {services} from "../constants";
import {ServiceCard } from "../components";
const Services = () => {
  return (
  <section className='max-container flex justify-center flex-wrap gap-9'>
    {
    services.map((x)=>(
      <ServiceCard key={x.label} {...x}/>
    ))
    }
   </section>
  )
}

export default Services