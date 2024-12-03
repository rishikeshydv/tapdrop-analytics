import Left from "@/components/homepage/Left";
import Mid from "@/components/homepage/Mid";
import Right from "@/components/homepage/Right";


export default function Home() {

  return (
    <main className="bg-gray-100 overflow-hidden">
      <div className="flex flex-col md:flex-row">
      <Left />
      <Mid />
      <Right />
      </div>
    </main>
  );
}
