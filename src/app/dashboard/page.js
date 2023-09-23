import { EventBookForm } from "@/components/Event/components/Event.BookForm";
import { EventJoin } from "@/components/Event/components/Event.Join";

export default function Page() {
  return (
    <>
      <div>Dashboard Page</div>
      <EventBookForm />
      <EventJoin />
    </>
  );
}
