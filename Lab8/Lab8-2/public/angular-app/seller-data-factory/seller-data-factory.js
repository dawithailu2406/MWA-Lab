angular.module("carSeller").factory("SellerDataFactory", SellerDataFactory);

function SellerDataFactory($http) {
    return {
        getAllSellers: getAllSellers,
        getOneSeller: getOneSeller
    };

    function getAllSellers() {
        return $http.get("/api/seller").
            then(complete).catch(failed);
    }

    function getOneSeller(id) {
        return $http.get("/api/seller/" + id).
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