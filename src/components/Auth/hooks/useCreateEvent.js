import { useRouter } from "next/navigation";

const { useState } = require("react");


export const useCreateEvent = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [eventData, setEventData] = useState({
        name: "",
        description: "",
        location: "",
        date: "",
    })
    const [modal, setModal] = useState(false)
    const [isMutating, setIsMutating] = useState(false)
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setEventData({ ...eventData, [name]: value })
    }

    const handleSubmitCreateEvent = async (e) => {
        e.preventDefault();
        setIsMutating(true)
        setIsLoading(true)
        const { name, description, location, date } = eventData
        const res = await fetch("https://eventmakers-api.vercel.app/api/event", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, description, location, date })
        })
        const data = await res.json()
        console.log(data)
        setEventData({ name: "", description: "", location: "", date: "" })
        setIsLoading(false)
        router.refresh();
        setModal(false)
    }

    const handleModalAdd = () => {
        setModal(!modal)
    }

    return { isLoading, eventData, handleChange, handleSubmitCreateEvent, handleModalAdd }
}