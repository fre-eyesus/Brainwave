import { smallSphere, stars } from "../assets"
import Heading from "./Heading"
import Section from "./Section"
import PricingList from "./PricingList"
import { RightLine , LeftLine } from "./design/Pricing" ;
const Pricing = () => {
  return (
    <Section className="overflow-hidden"
    id="pricing"
    >
      <div className="container relative z-2 ">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
         <img 
         
         src={smallSphere} 
         alt="Sphere"
         className="relative z-1"
         width={255}
         height={255}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-y-1/2 pointer-events-none">
            <img 
            width={950}
            height={400}
            src={stars} 
            alt="Stars"
            className="w-full" 
            />
        </div>
       <Heading 
       tag="Get Started with Brainwave"
       title="pay once,use it forever"
       />
       <div className="relative">
        <PricingList />

        <RightLine />
        <LeftLine />
       </div>
       <div className="flex justify-center mt-10" >
          <a className="text-xs font-code font-bold tracking-wider uppercase border-b" href="./pricing">
           See the full details
          </a>
       </div>

      </div>
    </Section>
  )
}

export default Pricing
