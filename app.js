angular.module('app', [])
    .controller('MyController', ($scope, $http) => {
        $http.get('https://interactive.guim.co.uk/docsdata/1m8GiO3Ee0q30t2GC4m76VbVmVJw-26RHoefB6YkZTQQ.json')
        .then((response) => {
            $scope.players = response.data.sheets.players;
            $scope.countries = [];
            $scope.clubs = [];
            
            $scope.players.forEach(element => {
                if(!$scope.countries.includes(element['Nationality'])) {
                    $scope.countries.push(element['Nationality'])
                }
                if(!$scope.clubs.includes(element['Club on 23 Jan 2023'])) {
                    $scope.clubs.push(element['Club on 23 Jan 2023'])
                }
            });

            $scope.countries.sort();
            $scope.clubs.sort();
        })
    })