import React, { useState } from 'react'

const EventCreationForm = () => {

    const [eventName, setEventName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState();
    const [ticketPrice, setTicketPrice] = useState();
    const [img1, SetImg1] = useState("");
    const [img2, SetImg2] = useState("");
    const [location, setLocation] = useState("");

  return (
    <div>
        <h1>Create new event</h1>
        <InputBox label={"Event Name: "} type={"text"} className={""} onChange={(e) => setEventName(e?.target?.value)} />
        <InputBox label={"Description: "} type={"text"} className={""} onChange={(e) => setEventName(e?.target?.value)} />
        <InputBox label={"Name of the Event: "} type={"text"} className={""} onChange={(e) => setEventName(e?.target?.value)} />
        <InputBox label={"Name of the Event: "} type={"text"} className={""} onChange={(e) => setEventName(e?.target?.value)} />
        <InputBox label={"Name of the Event: "} type={"text"} className={""} onChange={(e) => setEventName(e?.target?.value)} />
        <InputBox label={"Name of the Event: "} type={"text"} className={""} onChange={(e) => setEventName(e?.target?.value)} />
        <InputBox label={"Name of the Event: "} type={"text"} className={""} onChange={(e) => setEventName(e?.target?.value)} />
    </div>
  )
}

const InputBox = ({label, type, className, onChange}) => {
    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                className={className} 
                onChange={onChange}
            />
        </div>
    )
}

export default EventCreationForm