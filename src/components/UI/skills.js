import React from 'react'

import Bar from './bar';

export default function skills() {
    const skills=[
        {skill:"React",width:"60%",key:Math.random()},
        {skill:"JavaScript",width:"75%",key:Math.random()},
        {skill:"Node.js",width:"70%",key:Math.random()},
        {skill:"MongoDB",width:"70%",key:Math.random()},
        {skill:"Python",width:"60%",key:Math.random()},
        {skill:"C++",width:"50%",key:Math.random()},
    ]
    return (
        <div>
            {
                skills.map( (skill) => {
                    return (
                        <Bar 
                            key={skill.key}
                            width={skill.width}
                            skill={skill.skill} />
                    )
                })
            }
        </div>
    )
}
