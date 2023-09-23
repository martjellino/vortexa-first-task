import { EventCard } from "@/components/Event/components/Event.Card";


async function getEvents() {
  const res = await fetch("https://eventmakers-api.vercel.app/api/event", {
    cache: "no-cache",
  });
  const data = await res.json()
  return data;
}


export default async function Page() {
  const { data } = await getEvents()
  console.log(data);

  return <EventCard events={data} />;
}