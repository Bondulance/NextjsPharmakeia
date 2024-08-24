import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h1 className="text-3xl underline text-cyan-400">Home</h1>
    <Button>
      Click Me
    </Button>
   </div>
  );
}
