import { useState } from "react"
import { Mushrooms } from "../assets/mushroomData/pl"
import { Mushroom } from "../types"
import { MushroomInfo } from "./MushroomInfo"

export const Atlas = () => {
    const [mush, setMush] = useState<Mushroom>()
    return <div className="bg-blue-200 h-full p-5">
        <div className="overflow-x-auto flex flex-row flex-nowrap mt-10">
            {Mushrooms.map((mushroom, i) => (
                <div key={i} className="w-3/4 flex-shrink-0 p-3 bg-blue-300 m-2 shadow-xl" onClick={() => setMush(mushroom)}>
                    <h1 className="text-3xl font-bold">{mushroom.name}</h1>
                    <img className="w-250 h-100" src={mushroom.photo} />
                </div>
            ))}
        </div>
        {mush && <div className="w-full h-screen  absolute top-0 left-0 backdrop-blur-md z-40" onClick={() => setMush(undefined)}>

            <MushroomInfo mushroom={mush} setMush={setMush} />
        </div>}
    </div>
}