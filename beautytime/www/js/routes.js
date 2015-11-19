angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('serviçO', {
      url: '/servico',
      templateUrl: 'templates/serviçO.html',
      controller: 'serviçOCtrl'
    })
        
      
    
      
        
    .state('tabsController.agendar', {
      url: '/agendar',
      views: {
        'tab1': {
          templateUrl: 'templates/agendar.html',
          controller: 'agendarCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page2',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('buscar', {
      url: '/buscar',
      templateUrl: 'templates/buscar.html',
      controller: 'buscarCtrl'
    })
        
      
    
      
        
    .state('tabsController.meusHoráRios', {
      url: '/meus-horarios',
      views: {
        'tab3': {
          templateUrl: 'templates/meusHoráRios.html',
          controller: 'meusHoráRiosCtrl'
        }
      }
    })
        
      
    
      
        
    .state('confirmaçãO', {
      url: '/confirmar',
      templateUrl: 'templates/confirmaçãO.html',
      controller: 'confirmaçãOCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page2/agendar');

});