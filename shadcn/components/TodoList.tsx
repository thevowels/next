"use client";
import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "./ui/popover";
import { Button } from "./ui/button";

const checkList = [
  {
    id: "id1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "id2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "id3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "id4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "id14",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "id22",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "id33",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "id45",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

export default function TodoList() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="">
		<h1 className="text-lg font-medium mb-6">Task List</h1>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="w-full" >{date?.toDateString()}</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border mx-auto"
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="h-100 mt-4">
        <div className="flex flex-col gap-4">
          {/* List Item */}
          {checkList.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex item-center gap-4">
                <Checkbox id={item.id} />
                <Label
                  htmlFor={item.id}
                  className="text-sm  text-muted-foreground"
                >
                  {item.text}
                </Label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
