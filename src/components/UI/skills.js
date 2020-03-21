import React from 'react'

import Bar from './bar';

export default function skills() {
    return (
        <div>
            <Bar percentage={70} text={"React"} />
            <Bar percentage={60} text={"Node.js"} />
            <Bar percentage={40} text={"MongoDB"} />
        </div>
    )
}
