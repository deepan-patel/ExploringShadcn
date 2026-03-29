import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button>Button</Button>
      <ThemeToggle />
    </div>
  );
}
