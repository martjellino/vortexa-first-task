import { EventSingle } from "@/components/Event/components/Event.Single";

export default async function Page({ params }) {

  const { eventId } = params;

  async function getEventsID() {
    const res = await fetch(`https://eventmakers-api.vercel.app/api/event/${eventId}`, {
      cache: "no-cache",
    });
    const data = await res.json()
    return data;
  }

  const { data } = await getEventsID();
  return <EventSingle event={data} />;
}
