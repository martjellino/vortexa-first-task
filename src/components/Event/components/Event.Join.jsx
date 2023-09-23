"use client";

import { Input } from "@/components/SharedUI/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";


export const EventJoin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();

  const handleSubmitJoinEvent = async (e) => {
    e.preventDefault();
    setIsMutating(true);
    await fetch("https://eventmakers-api.vercel.app/api/join-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
      }),
    });
    setIsMutating(false);
    setName("");
    setEmail("");
    setPhone("");
    router.refresh();
    setModal(false);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={handleModal} className="btn btn-active btn-secondary">
        Join The Event
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleModal}
        className="modal-toggle"
      />
      <div className={modal ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-5">Fill the form to join event</h3>
          <form onSubmit={handleSubmitJoinEvent}>
            <div className="form-control w-full">
              <Input
                value={name}
                label="Your Name"
                type="text"
                name="Your Name"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control w-full">
              <Input
                value={email}
                label="Your Email"
                type="email"
                name="Your Email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control w-full">
              <Input
                value={phone}
                label="Your Phone"
                type="tel"
                name="Your Phone"
                placeholder="Your Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="modal-action">
              <button
                type="button"
                className="btn btn-neutral"
                onClick={handleModal}
              >
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
