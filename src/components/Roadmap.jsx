import 
 { roadmap } from "../constants";

const RoadMap = () => {
    return 
    <Section className="overflow-hidden" id="roadmap">
        <div className="container md:pb-10 ">
             <Heading tag="Ready to get started" title="What we are woking on " />

             <div 
             className="relative grid gap-6
            md:grid-cols-2 md:gap-4 md:pb-[7rem]"
            >
                {roadmap.map((item) =>{
                    const status = item.status === "done" ? "Done" : "In Progress";
                })}
             </div>
        </div>
    </Section>
}
