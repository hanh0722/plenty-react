const serverUrl = 'http://localhost:8080';
const authLinks = `${serverUrl}/api/auth`;
const urlCheckVerify = (id, token) => {
    return `${authLinks}/verify?id=${id}&token=${token}`
}
export {
    urlCheckVerify
}