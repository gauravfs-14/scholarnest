import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { AccordionContent } from "@radix-ui/react-accordion";

export default function MDXAccordion({
  data,
  className,
}: {
  data: { question: string; answer: string }[];
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl mx-auto not-prose", className)}>
      <Accordion type="single" collapsible className="">
        {data.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="font-semibold text-foreground">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground text-sm p-4">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
