import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { getObject, saveObject } from "../LocalStorage";

export const Step2 = () => {
    const savedData = getObject("ga-saved-data") || {}
    const [aValueII, setAValueII] = useState(savedData.avalueII)
    const [anotherValueII, setAnotherValueII] = useState(savedData.anotherValueII)
    const navigate = useNavigate();

    function saveAndNext() {
        const updatedData = Object.assign(savedData, {aValueII,anotherValueII});
        saveObject("ga-saved-data", updatedData)
        navigate("/final-step")
    }

    return <section id="step1">
        <h1>Étape 2</h1>
        <input type="text" className="border-black border-2 m-1" defaultValue={aValueII} onChange={e => setAValueII(e.currentTarget.value)}/>
        <input type="text" className="border-black border-2 m-1" defaultValue={anotherValueII} onChange={e => setAnotherValueII(e.currentTarget.value)}/>
        <button className="bg-ga-green text-green-50 rounded-lg" onClick={() => saveAndNext()}><div className="my-1 mx-2">Suivant</div></button>
    </section>
}