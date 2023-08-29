export function formatDate(date: Date): string {
    return date.toLocaleTimeString('en-GB') + ' ' + date.toLocaleDateString('en-GB');
}