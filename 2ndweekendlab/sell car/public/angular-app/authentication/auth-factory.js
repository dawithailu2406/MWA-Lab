angular.module("seller").factory("AuthFactory", AuthFactory);


function AuthFactory() {
  return { 
    auth: auth 
  };
  var auth = { 
    ifLoggedId: false 
  };
}
