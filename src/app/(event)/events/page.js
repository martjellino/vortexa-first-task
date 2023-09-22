import { Event } from "@/components/Event/components/Event";

async function getEvents() {
  const res = await fetch("https://eventmakers-api.vercel.app/api/event")

  const data = await res.json()
  // console.log(data);
  return data;
}


export default async function Page() {
  const { items } = await getEvents()


  return <Event eventData={items} />;
}