app.service('AuthService', function() {
  var isAuthenticated;

  this.authenticate = function(login, password) {
    (login === 'theworld' && password === 'isbeautiful') ? isAuthenticated = true : isAuthenticated = false;
  };

  this.isAuthenticated = function() {
    return isAuthenticated;
  }
});
