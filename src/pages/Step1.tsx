import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getObject, saveObject } from "../LocalStorage";

export const Step1 = () => {
    const savedData = getObject("ga-saved-data") || {}
    const [aValue, setAValue] = useState(savedData.avalue)
    const [anotherValue, setAnotherValue] = useState(savedData.anotherValue)
    const navigate = useNavigate();

    function saveAndNext() {
        const updatedData = Object.assign(savedData, {aValue,anotherValue});
        saveObject("ga-saved-data", updatedData)
        navigate("/step2")
    }

    return <section id="step1">
        <h1>Étape 1</h1>
        <input type="text" className="border-black border-2 m-1" defaultValue={aValue} onChange={e => setAValue(e.currentTarget.value)}/>
        <input type="text" className="border-black border-2 m-1" defaultValue={anotherValue} onChange={e => setAnotherValue(e.currentTarget.value)}/>
        <button className="bg-ga-green text-green-50 rounded-lg" onClick={() => saveAndNext()}><div className="my-1 mx-2">Suivant</div></button>
    </section>
}