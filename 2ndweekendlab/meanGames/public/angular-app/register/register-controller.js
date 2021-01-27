angular.module("meanGames").controller("RegisterController", RegisterController);

function RegisterController(GameDataFactory) {

    var vm = this;
    vm.tile="This is a new user registration Page"
    vm.register = function () {

        var user = {
            username: vm.username,
            name: vm.name,
            password: vm.password
        };

        if (!vm.username || !vm.password) {
            vm.err = " can you please Add a username and password.";
        } else {
            if (vm.password !== vm.passwordRepeat) {
                vm.err = "can you please  make sure the passwords match.";
            }
            else {
                GameDataFactory.registerUser(user).then(function (response) {
                    vm.message = "You Successful registration, please login.";
                    vm.err = "";
                });
            }
        }
    };
}
