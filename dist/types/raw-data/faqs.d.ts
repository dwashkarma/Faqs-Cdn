export const faqsList: ({
    title: string;
    content: string;
    category: string;
    steps?: undefined;
} | {
    title: string;
    content: string;
    steps: {
        title: string;
        description: string;
        steps: {
            title: string;
            content: string;
        }[];
    }[];
    category: string;
})[];
export const faqCategories: {
    value: string;
    label: string;
}[];
