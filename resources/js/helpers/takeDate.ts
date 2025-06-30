export function takeDate() {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('pt-BR', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
    
    return formattedDate
}
