export const phoneReplace = (phone: string): string => {
    return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1 ($2) $3-$4");
}

export const unformatPhone = (phone: string): string => {
    return phone.trim().replace(/[^0-9]/g, "");
}
