import Image from "next/image";
import   Navbar   from '../components/Navbar';
import Hero from '../sections/Hero';
import Grid from '../components/Grid'
import EventCreationForm from '../components/EventCreationForm';

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
   <Navbar />
 
   <Hero/>
   
   <Grid/>
   <EventCreationForm />
      </div>
    
  );
}
