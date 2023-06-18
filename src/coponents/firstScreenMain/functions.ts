export const phoneReplace = (phone: string): string => {
    if (!phone) return '';
    if (unformatPhone(phone).length < 11) return phone;

    const phoneFirstNumber = phone[0] === ('+') ? `${+phone[1] + 1}` : `+${+phone[0] - 1}`;
    const newPhone = phone[0] === ('+')
        ? phoneFirstNumber + phone.slice(2)
        : phoneFirstNumber + phone.slice(1);
    return newPhone.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1 ($2) $3-$4");
}

export const unformatPhone = (phone: string): string => {
    return phone.trim().replace(/[^0-9]/g, "");
}
