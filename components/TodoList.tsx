"use client";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CalendarIcon, Key } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

type TodoItem = {
  id: number;
  value: string;
  checked: boolean;
};

const initialData: TodoItem[] = [
  {
    id: 1,
    value: "Payment Gateway",
    checked: true,
  },
  {
    id: 2,
    value: "User Authentication",
    checked: true,
  },
  {
    id: 3,
    value: "Database Connection",
    checked: true,
  },
  {
    id: 4,
    value: "API Integration",
    checked: false,
  },
  {
    id: 5,
    value: "Email Notifications",
    checked: true,
  },
  {
    id: 6,
    value: "UI Responsiveness",
    checked: false,
  },
  {
    id: 7,
    value: "Error Handling",
    checked: true,
  },
  {
    id: 8,
    value: "Performance Optimization",
    checked: false,
  },
  {
    id: 9,
    value: "Security Checks",
    checked: true,
  },
  {
    id: 10,
    value: "Deployment Configuration",
    checked: false,
  },
];

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [todoList, setTodoList] = useState<TodoItem[]>(initialData);

  useEffect(() => {
    setDate(new Date());
  }, []);

  const handleCheck = (id: number, checked: boolean) => {
    setTodoList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked } : item))
    );
  };
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          {" "}
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto pr-3">
        <div className="flex flex-col gap-4">
          {/* LIST ITEM  */}
          {todoList?.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox
                  checked={item.checked}
                  onCheckedChange={(checked) => handleCheck(item.id, !!checked)}
                  id={item.value}
                />
                <label htmlFor={item.value} className="text-sm text-medium">
                  {item.value}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
