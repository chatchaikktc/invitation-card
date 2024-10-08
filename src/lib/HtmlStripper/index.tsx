export const htmlStripper = (html: string): string => {
    const text = new DOMParser().parseFromString(html, 'text/html').body.textContent || "";
    return text.replace(/\u200B/g, '');
};