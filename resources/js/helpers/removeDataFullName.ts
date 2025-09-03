export function removeDayFullName(value: string) {
    return value.replace(/-feira\b/gi, '');
}
