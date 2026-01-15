import { useEffect, useState } from "react"
import { FunfactsData } from "../assets/mushroomData/pl"
import { Funfact } from "../types"
function daysIntoYear(date: Date) {
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}
export const Funfacts = () => {
    const [Funfact, setFunfact] = useState<Funfact>()
    useEffect(() => {
        var now = new Date();
        var d = daysIntoYear(now)
        setFunfact(FunfactsData[d % FunfactsData.length])
    }, [])
    return < div className="h-full bg-red-200 p-5 pt-20" >
        <h1 className="text-3xl font-bold mb-10 ">Ciekawostka na dziś</h1>
        <div className="bg-red-300 w-full h-auto p-5 shadow-xl overflow-hidden">
            <img className="bg-white w-60 h-60 float-right" src={Funfact?.photo} alt={Funfact?.photo} />
            <p className="text-2xl font-bold">{Funfact?.title}</p>
            <p className="text-xl mt-5 font-medium">{Funfact?.body}</p>

        </div>
    </div >
}