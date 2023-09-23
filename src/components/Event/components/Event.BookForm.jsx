"use client";

import { useCreateEvent } from "@/components/Auth/hooks/useCreateEvent";
import { Input } from "@/components/SharedUI/Input";
import { Button } from "@/components/SharedUI/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const EventBookForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    setIsMutating(true);
    await fetch("https://eventmakers-api.vercel.app/api/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        location,
        date,
      }),
    });
    setIsMutating(false);
    setName("");
    setDescription("");
    setLocation("");
    setDate("");
    router.refresh();
    setModal(false);
  };
  const handleModalAdd = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Button onClick={handleModalAdd}>
        Add New Event
      </Button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleModalAdd}
        className="modal-toggle"
      />
      <div className={modal ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-5">Add New Event</h3>
          <form onSubmit={handleSubmitEvent}>
            <div className="form-control w-full">
              <Input
                value={name}
                label="Event Name"
                type="text"
                name="Event Name"
                placeholder="Event Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control w-full">
            <Input
                value={description}
                label="Event Description"
                type="text"
                name="Event Description"
                placeholder="Event Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-control w-full">
            <Input
                value={location}
                label="Event Location"
                type="text"
                name="Event Location"
                placeholder="Event Location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-control w-full">
            <Input
                value={date}
                label="Event Date"
                type="date"
                name="Event Date"
                placeholder="Event Date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModalAdd}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Saving...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
