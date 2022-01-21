export interface Experience {
    role: string;
    company: string;
    highlights: string[];
    yearStart: number;
    yearEnd?: number | null | undefined;
    tags?: string[] | null | undefined;
    link?: string | null | undefined;
}
