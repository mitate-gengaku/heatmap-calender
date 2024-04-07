import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CustomRow } from "@/components/ui/row";
import { cn } from "@/lib/utils";
import { ja } from "date-fns/locale";

const data = [
  {
    content: "Hello World",
    date: new Date(2024, 3, 7),
  },
];

export default function Home() {
  return (
    <main
      className="w-screen h-screen flex justify-center items-center"
      >
      <Calendar
        numberOfMonths={2}
        locale={ja}
        classNames={{
          nav: "hidden",
          month: "!ml-0 space-y-4",
          tbody: "flex",
          row: "[user-select:none;] flex flex-col",
          cell: "h-8 w-8 text-center text-sm p-0 relative [&:has([aria-selected].day-outside)]:bg-gray-200 [&:has([aria-selected])]:bg-gray-200 focus-within:relative focus-within:z-20 rounded-none",
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-8 w-8 p-0 font-normal aria-selected:opacity-100 text-transparent cursor-pointer hover:text-transparent hover:bg-gray-200 bg-accent rounded-sm",
          ),
          day_outside: "",
        }}
        components={{
          Head: () => <></>,
          Row: (props) => <CustomRow {...props} contents={data} />,
        }}
        formatters={{
          formatCaption: (data) => {
            const date = new Date(data);

            return `${date.getFullYear()}年 ${date.getMonth() + 1}月`;
          },
        }}
      />
    </main>
  );
}
