(function(){
    angular
        .module("OmdbApp")
        .factory("UserService", userService);

    function userService($http, $rootScope) {
        var api = {
            findUserByCredentials: findUserByCredentials,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser,
            createUser: createUser,
            logout: logout
        };
        return api;

        function createUser(user) {
            return $http.post("/api/project/omdb/register", user);
        }

        function logout() {
            return $http.post("/api/project/omdb/logout");
        }

        function getCurrentUser() {
            return $http.get("/api/project/omdb/loggedin");
        }

        function setCurrentUser(user) {
            $rootScope.currentUser = user;
        }

        function findUserByCredentials(credentials) {
            return $http.post("/api/project/omdb/login", credentials);
        }
    }
})();