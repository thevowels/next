import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Shield } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppLineChart } from "@/components/AppLineChart";

export default function SingleUserPage() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* User Badge Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="font-semibold text-xl "> User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-amber-500/70 border border-amber-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-green-500/30 border border-green-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* Information Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-xl "> User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <SheetContent>
                  <EditUser />
                </SheetContent>
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile Completion
                </p>
                <Progress value={72} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span className="">john.doe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span className="">john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone No:</span>
                <span className="">+1 234 567</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Locatin:</span>
                <span className="">535 West Avenue</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span className="">John doe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge variant={"default"}>admin</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 3.4.2025{" "}
            </p>
          </div>
          {/* Card List */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* User Cart Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Avatar className="size-12">
                <AvatarImage src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">John Doe</h1>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae esse reprehenderit expedita, assumenda sunt eligendi
              iusto, enim dolore tenetur veniam deleniti laboriosam, ut
              recusandae debitis commodi porro laudantium error magnam!
            </p>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
			<AppLineChart/></div>
        </div>
      </div>
    </div>
  );
}
