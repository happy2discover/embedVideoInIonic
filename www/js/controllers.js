angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);

  $scope.youkuPlayer = new YKU.Player('youkuplayer',{
    styleid: '0',
    client_id: '7b92b5ecaa32f750',
    vid: 'XMjUxMTIwNzU3Ng==',
    newPlayer: true,
    show_related: false,
    autoplay: false
  });


  $scope.tencentVideo = new tvp.VideoInfo();
  $scope.tencentVideo.setVid("d0187fr4hd2");
  
  $scope.tencentPlayer = new tvp.Player();
  $scope.tencentPlayer.create({
    width: 320,
    height: 240,
    video: $scope.tencentVideo,
    modId: "mod_player",
    autoplay: false
  });

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
