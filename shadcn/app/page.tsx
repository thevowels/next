import { Button } from "@/components/ui/button";
import { Plus, PlusCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
	<div className="h-screen flex items-center justify-center">
		<Button variant={"outline"}><PlusCircle/> Button</Button>
	</div>
  );
}
