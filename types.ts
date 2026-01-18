export interface FormItem {
  id: string;
  name: string;
  code?: string; // e.g., IS-L4-07
}

export interface Category {
  id: string;
  title: string;
  colorClass: string; // Tailwind bg class
  headerColorClass: string; // Tailwind border/text class
  items: FormItem[];
}

export interface GeneratedContent {
  template: string; // HTML/Markdown representation of the blank form
  example: string;  // HTML/Markdown representation of a filled record
  description: string;
}
