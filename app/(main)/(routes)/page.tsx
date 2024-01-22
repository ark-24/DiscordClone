import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div >
    
    <p className='text-3xl font-bold text-indigo-500'>Discord Clone</p>
    <div style={{display:'flex', alignItems:'center'}}>
    <Button variant="outline">Button</Button>
    <UserButton afterSignOutUrl="/"/>
    <ModeToggle/>
    </div>
    </div>

  )
}
//26:02