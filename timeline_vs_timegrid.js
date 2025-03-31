mobiscroll.setOptions({
  theme: 'ios',
  themeVariant: 'light'
});

$(function () {
  $('#timeline').mobiscroll().eventcalendar({
    clickToCreate: true,
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    eventDelete: true,
    view: {
      timeline: {
              type: 'week'
      }
    },
    resources: [{
        id: 1,
        name: 'Ryan',
        color: '#e9ec12'
    }, {
        id: 2,
        name: 'Kate',
        color: '#239a21'
    }, {
        id: 3,
        name: 'John',
        color: '#ff0101'
    }, {
        id: 4,
        name: 'Mark',
        color: '#d8ca1a'
    }, {
        id: 5,
        name: 'Sharon',
        color: '#8f1ed6'
    }, {
        id: 6,
        name: 'Ashley',
        color: '#01adff'
    }]
  })
});

//timegrid
$(function () {
  $('#timegrid').mobiscroll().eventcalendar({
    clickToCreate: true,
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    eventDelete: true,
    view: {
      schedule: {
              type: 'week'
      }
    },
    resources: [{
        id: 1,
        name: 'Ryan',
        color: '#e9ec12'
    }, {
        id: 2,
        name: 'Kate',
        color: '#239a21'
    }, {
        id: 3,
        name: 'John',
        color: '#ff0101'
    },
    // {
    //     id: 4,
    //     name: 'Mark',
    //     color: '#d8ca1a'
    // }, {
    //     id: 5,
    //     name: 'Sharon',
    //     color: '#8f1ed6'
    // }, {
    //     id: 6,
    //     name: 'Ashley',
    //     color: '#01adff'
    // }
    ]
  })
});