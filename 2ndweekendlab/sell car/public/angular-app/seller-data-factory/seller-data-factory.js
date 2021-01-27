angular.module("seller").factory("SellerDataFactory", SellerDataFactory);

function SellerDataFactory($http) {
    return {
        getAllSellers: getAllSellers,
        getOneSeller: getOneSeller,
        postOneSeller:postOneSeller,
        deleteOneSeller:deleteOneSeller,
        registerUser: registerUser,
        searchSeller:searchSeller
    };

    function getAllSellers() {
        return $http.get("/api/seller").
            then(complete).catch(failed);
    }

    function searchSeller(title) {
        return $http.get("/api/games/search/:title").
            then(complete).catch(failed);
    }

    function registerUser(user) {
        return $http.post("/api/users/register", user).
        then(complete).catch(failed);
      }

    function getOneSeller(id) {
        return $http.get("/api/seller/" + id).
            then(complete).catch(failed);
    }

    function deleteOneSeller(id) {
        return $http.delete("/api/seller/" + id).
            then(complete).catch(failed);
    }

    function postOneSeller(sell) {
        return $http.post("/api/seller/",sell).
            then(complete).catch(failed);
    }

    function complete(response) {
        console.log(response.data);
        return response.data;
    }

    function failed(error) {
        return error.status.statusText;
    }
}