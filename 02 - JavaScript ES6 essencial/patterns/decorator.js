let loggedIn = true;

function callIfAuthenticated(fn) {
  return !!loggedIn && fn();
}

function isLogged() {
  return 'Logado';
}

console.log(callIfAuthenticated(isLogged));
