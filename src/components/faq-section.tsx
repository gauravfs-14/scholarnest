import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/config/site";
import { AccordionContent } from "@radix-ui/react-accordion";

export default function FAQ() {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="relative text-2xl md:text-3xl xl:text-4xl font-extrabold tracking-tight text-foreground mb-4 after:content-[''] after:block after:mx-auto after:mt-3 after:h-[3px] after:w-24 after:bg-gradient-to-r after:from-primary after:to-accent-foreground/70 after:rounded-full">
          Frequently Asked Questions
        </h2>
        <p className="text-sm xl:text-md text-muted-foreground max-w-2xl mx-auto">
          Here are some common questions and answers to help you get started
          with
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="">
          {FAQ_ITEMS.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground text-sm p-4">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
