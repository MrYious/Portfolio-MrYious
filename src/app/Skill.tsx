import { IconType } from "react-icons";
import SkillItem from "./_components/SkillItem";
import { useState } from "react";

export default function Skill( props: { skills: { list: { name: string, icon: IconType, category: string }[], note: string}}){

    const [filter, setFilter] = useState("All");

    const handleFilterChange = (val: string) => {
        setFilter(val);
    }

    return(
        <section id='skills' className="flex flex-col items-center py-7 gap-7">
            <div className="text-2xl font-bold border-4 border-black px-4 py-2 rounded">
                My Skills
            </div>
            <div className=" flex flex-col gap-8 items-center w-2/3">
                <div className="flex text-lg font-bold ">
                    {["All", "Frontend", "Backend", "Other"].map((text)=> <>
                        <button onClick={()=>{handleFilterChange(text)}} className={`px-4 py-2 hover:bg-gray-200 ${filter === text ? "border-b-4 border-black bg-gray-200" : "border-b-4 border-gray-400"}`}>
                            {text}
                        </button>
                    </>)}
                </div>
                <div className="flex flex-wrap justify-center gap-1">
                    {props.skills.list.filter((skill) => {return skill.category === filter || filter === 'All' }).map((skill) => <SkillItem skill={skill}/>)}
                </div>
                <div className="text-center text-xs">
                    <div className="">Note:</div>
                    <div className=" ">
                        {props.skills.note}
                    </div>
                </div>
            </div>
        </section>
    )
}