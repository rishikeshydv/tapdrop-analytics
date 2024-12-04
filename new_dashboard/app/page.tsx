import Left from "@/components/homepage/Left";
import Mid from "@/components/homepage/Mid";
import Right from "@/components/homepage/Right";

export default function Home() {

  return (
    <main className="bg-gray-100 min-h-[90vh]">
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start">
      <Left />
      <Mid />
      <Right />
      </div>
    </main>
  );
}
