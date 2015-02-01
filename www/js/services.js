angular.module('starter.services', [])

.factory('Sections', ['$localStorage', function($localStorage) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var sections = [{
    id: 0,
    title: 'Keuzes',
    icon: 'human96',
    items: [{
      id: 0,
      name: 'Intro',
      details: true
    }, {
      id: 1,
      name: 'Kopen',
      details: true
    }, {
      id: 2,
      name: 'Situatieschets',
      details: true
    }]
  }, {
    id: 1,
    title: 'Budget',
    icon: 'budget',
    items: [{
      id: 4,
      name: '1e Berekening'
    }, {
      id: 5,
      name: 'Benodigheden',
      details: true
    }, {
      id: 6,
      name: 'Hypotheekregelingen',
      details: true
    }, {
      id: 7,
      name: 'Hypotheekadviseurs'
    }, {
      id: 8,
      name: 'Hypotheekverstrekkers'
    }]
  }, {
    id: 2,
    title: 'Oriëntatie',
    icon: 'compass66',
    items: [{
      id: 9,
      name: 'Huizensites'
    }, {
      id: 10,
      name: 'Makelaars'
    }, {
      id: 11,
      name: 'Kijken'
    }]
  }, {
    id: 3,
    title: 'Check',
    icon: 'verified9',
    items: [{
      id: 12,
      name: 'Kadaster'
    }, {
      id: 13,
      name: 'Taxateur'
    }, {
      id: 14,
      name: 'Bouwcontrole'
    }]
  }, {
    id: 4,
    title: 'Bieden',
    icon: 'legal10',
    items: [{
      id: 15,
      name: 'Prijs Bepalen'
    }, {
      id: 16,
      name: 'Voorwaarden Stellen'
    }, {
      id: 17,
      name: 'Bieden'
    }]
  }, {
    id: 5,
    title: 'Kopen',
    icon: 'buy10',
    items: [{
      id: 18,
      name: 'Kopen'
    }, {
      id: 19,
      name: 'Notaris'
    }, {
      id: 20,
      name: 'Hypotheek Afsluiten'
    }]
  }, {
    id: 6,
    title: 'Klussen',
    icon: 'tools6',
    items: [{
      id: 21,
      name: 'Schilderen'
    }, {
      id: 22,
      name: 'Keuken / Badkamer'
    }, {
      id: 23,
      name: 'Interieur'
    }, {
      id: 24,
      name: 'Tuin'
    }]
  }, {
    id: 7,
    title: 'Formeel',
    icon: 'writing22',
    items: [{
      id: 25,
      name: 'Gemeente'
    }, {
      id: 26,
      name: 'Belastingen'
    }, {
      id: 27,
      name: 'Verzekeringen'
    }, {
      id: 28,
      name: 'Overeenkomsten'
    }]
  }, {
    id: 8,
    title: 'Verhuizen',
    icon: 'delivery22',
    items: [{
      id: 29,
      name: 'Post'
    }, {
      id: 1,
      name: 'Gas/Water/Licht'
    }, {
      id: 2,
      name: 'Verhuizing'
    }, {
      id: 3,
      name: 'Abonnementen'
    }]
  }];

  return {
    get: function(index) {
      angular.forEach(sections[index].items, function (item, key) {
        var completed = $localStorage.getObject(item.id).completed;
        item.completed = (typeof completed !== 'undefined') ? completed : false;
      });
      return sections[index];
    }
  }
}])

.factory('$localStorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}]);
