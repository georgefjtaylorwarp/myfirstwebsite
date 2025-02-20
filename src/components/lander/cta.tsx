import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CTA() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center tracking-tighter">
        wanna get in touch?
      </h1>
      <div className="flex flex-col items-center justify-center">
        <Input className="w-full italic" placeholder="enter your email" />
        <Button className="mt-2 w-full">send</Button>
      </div>
    </div>
  );
}
