'use strict';

/**
 * @ngdoc function
 * @name uiexampleApp.controller:ModaldemoCtrl
 * @description
 * # ModaldemoCtrl
 * Controller of the uiexampleApp
 */
angular.module('uiexampleApp')
  .controller('ModaldemoCtrl', function  ($scope, $uibModal, $log)  {
	this.awesomeThings = [
	'HTML5 Boilerplate',
	'AngularJS',
	'Karma'
	];

	$scope.items = [
		{ team: 'Engineering', employees: ['Lawana Fan', 'Larry Rainer', 'Rahul Malik', 'Leah Shumway'] },
		{ team: 'Executive', employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj']},
		{ team: 'Finance', employees: ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']}, { team: 'Sales', employees: ['Ankit Jain', 'Anjali Maulingkar']}
	];

	$scope.animationsEnabled = true;

	$scope.open = function (size) {

		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'myModalContent.html',
			controller: 'ModalInstanceCtrl',
			size: size,
			resolve: {
				items: function () {
					return $scope.items;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};

	$scope.toggleAnimation = function () {
		$scope.animationsEnabled = !$scope.animationsEnabled;
	};
});

angular.module('uiexampleApp')
  .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
  	$scope.items = items;
  	$scope.selected = {
  		item: $scope.items[0]
  	};

  	$scope.ok = function () {
  		$uibModalInstance.close($scope.selected.item);
  	};

  	$scope.cancel = function () {
  		$uibModalInstance.dismiss('cancel');
  	};
  });