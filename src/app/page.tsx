'use client'
import Events from "@/components/sections/Events";
import Rive from "@rive-app/react-canvas";
export default function Home() {
  return (
    <main>
      <Events />
      <Rive
      src="/websiteloader.riv"></Rive>
    </main>
  );
}
