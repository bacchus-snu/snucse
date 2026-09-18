const authorizationEndpoint = 'https://id.snucse.org/o/auth';
const clientId = 'snucse';

function base64Url(bytes) {
  const binary = Array.from(bytes, byte => String.fromCharCode(byte)).join('');
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/[=]+$/, '');
}

function randomString() {
  return base64Url(window.crypto.getRandomValues(new Uint8Array(32)));
}

export default {
  redirectToId() {
    const state = randomString();
    const codeVerifier = randomString();
    sessionStorage.setItem('oidcstate', state);
    sessionStorage.setItem('codeverifier', codeVerifier);
    const verifierBytes = Uint8Array.from(codeVerifier, char => char.charCodeAt(0));
    return window.crypto.subtle.digest('SHA-256', verifierBytes).then(digest => {
      const query = [
        ['response_type', 'code'],
        ['client_id', clientId],
        ['redirect_uri', `${location.origin}/login/callback`],
        ['scope', 'openid profile email'],
        ['state', state],
        ['code_challenge', base64Url(new Uint8Array(digest))],
        ['code_challenge_method', 'S256']
      ].map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&');
      location.assign(`${authorizationEndpoint}?${query}`);
    });
  }
};
