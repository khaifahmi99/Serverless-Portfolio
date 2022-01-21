export interface Basic {
    firstName: string;
    lastName: string;
    jobTitle: string;
    personalQuote: string;
    briefDesription: string;
    primaryEmail: string;
    secondaryEmail?: string | null | undefined;
    links?: {
        github?: string | null | undefined;
        linkedin?: string | null | undefined;
        twitter?: string | null | undefined;
    };
}
