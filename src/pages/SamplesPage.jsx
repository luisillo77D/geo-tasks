import { useEffect } from "react";
import { useSamples } from "../context/SamplesContext"
import SampleCard from '../components/SampleCard';
import { useAuth } from "../context/AuthContext";


function SamplesPage() {

  const {user} = useAuth()
  const {getSamples,samples,getAllSamples} = useSamples();

  useEffect(() =>{
    if(user.role){getAllSamples()}
    else{getSamples()}
  },[])

  if(samples.length === 0) return (<h1>No tienes Muestras pendientes</h1>)
  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-2">
     {
    samples.map(sample =>(
      <SampleCard sample={sample} key={sample._id}/>
    ))
   }
  </div>
  )
}

export default SamplesPage 