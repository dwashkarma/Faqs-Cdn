interface AccordionItem {
    id: string;
    title: string;
    body: string;
}
declare const accordionData: AccordionItem[];
declare function generateAccordionItems(data: AccordionItem[]): void;
