import { UserSession, AppConfig } from 'blockstack';
import { ipcRenderer } from 'electron';


const APP_CONFIG = new AppConfig(['store_write', 'publish_data']);

document.getElementById('signin-button').addEventListener('click', function () {
  const us = new UserSession({appConfig: APP_CONFIG});
  const redirectURI = 'http://localhost:9877/callback'
  const manifestURI = 'http://localhost:9877/manifest.json'

  // const transitPrivateKey = us.generateAndStoreTransitKey()
  // const scopes = blockstack.DEFAULT_SCOPE2
  // const appDomain = 'http://localhost:9877'
  // const authRequest = blockstack.makeAuthRequest(transitPrivateKey, redirectURI, manifestURI, scopes, appDomain)
  // blockstack.redirectToSignInWithAuthRequest(authRequest)

  us.redirectToSignIn(redirectURI, manifestURI);
})

ipcRenderer.on('displayUsername', function (event, profile) {
  document.getElementById('welcome').innerHTML = "Welcome " + profile.name
  document.getElementById('signin-button').style.display = "none"
});
