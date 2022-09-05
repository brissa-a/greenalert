import { useEffect } from "react";
import { getObject } from "../LocalStorage";

export const StepFinal = () => {
    const savedData = getObject("ga-saved-data") || {}
    console.log("beforeDelete", savedData)
    useEffect(() => {
        localStorage.removeItem("ga-saved-data")
    });
    console.log("rendering")
    return <section id="finalStep">
        <h1>You have sent</h1>
        <pre>{JSON.stringify(savedData)}</pre>
    </section>
}