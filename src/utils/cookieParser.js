export const parseCookie = (cookie) => {
    return Object.fromEntries(cookie.split('; ').map(v => v.split(/=(.+)/)));
}