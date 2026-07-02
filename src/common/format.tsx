
export function formatDate(dateText: string): string {
    if (!dateText) return "";

    const postDate = new Date(dateText);
    const formatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return formatter.format(postDate);
}