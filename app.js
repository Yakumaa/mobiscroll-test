mobiscroll.setOptions({
  theme: 'ios',
  themeVariant: 'light'
});

$(function () {
  var zoomLevel = 9;

  // Load saved events from localStorage (or an API) when the page loads
  var savedEvents = JSON.parse(localStorage.getItem('myEvents')) || [];

  var myCalendar = $('#eventcalendar')
    .mobiscroll()
    .eventcalendar({
      clickToCreate: true,
      dragToCreate: true,
      dragToMove: true,
      dragToResize: true,
      eventDelete: true,
      refDate: getRefDate(new Date()),
      zoomLevel: zoomLevel,
      // Callback when a new event is created
      onEventCreated: function (args) {
        // Create a simplified event object
        var newEvent = {
          id: args.event.id,
          start: args.event.start,
          end: args.event.end,
          title: args.event.title,
          resource: args.event.resource,
          // description: args.event.description,
          // allDay: args.event.allDay,
          // color: args.event.color
        };

        // Add the event to your storage (localStorage example)
        var savedEvents = JSON.parse(localStorage.getItem('myEvents')) || [];
        savedEvents.push(newEvent);
        localStorage.setItem('myEvents', JSON.stringify(savedEvents));
      },
      // Callback when an event is updated
      onEventUpdated: function (event, inst) {
        // Update the event in your savedEvents array (by matching an ID or timestamp)
        savedEvents = savedEvents.map(function (e) {
          return e.id === event.id ? event : e;
        });
        localStorage.setItem('myEvents', JSON.stringify(savedEvents));
      },
      // Callback when an event is deleted
      onEventDeleted: function (event, inst) {
        savedEvents = savedEvents.filter(function (e) {
          return e.id !== event.id;
        });
        localStorage.setItem('myEvents', JSON.stringify(savedEvents));
      },
    
      view: {
        //configuring the timeline view
        timeline: {
          zoomLevels: {
            1: { type: 'year', size: 25, resolutionHorizontal: 'year', columnWidth: 'small' },
            2: { type: 'year', size: 25, resolutionHorizontal: 'year', columnWidth: 'xlarge' },
            3: { type: 'year', size: 25, resolutionHorizontal: 'quarter', columnWidth: 'small' },
            4: { type: 'year', size: 25, resolutionHorizontal: 'quarter', columnWidth: 'xlarge' },
            5: { type: 'year', size: 25, resolutionHorizontal: 'month', columnWidth: 'medium' },
            6: { type: 'year', size: 25, resolutionHorizontal: 'month', columnWidth: 'xxxlarge' },
            7: { type: 'year', size: 25, resolutionHorizontal: 'week', columnWidth: 'medium' },
            8: { type: 'year', size: 25, resolutionHorizontal: 'week', columnWidth: 'xxxlarge' },
            9: { type: 'year', size: 25, resolutionHorizontal: 'day', columnWidth: 'small' },
            10: { type: 'year', size: 25, resolutionHorizontal: 'day', columnWidth: 'xlarge' },
            11: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 720, timeLabelStep: 720 },
            12: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 360, timeLabelStep: 360 },
            13: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 180, timeLabelStep: 180 },
            14: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'medium', timeCellStep: 60, timeLabelStep: 60 },
            15: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 30, columnWidth: 'medium' },
            16: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 30, columnWidth: 'xxxlarge' },
            17: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 15, timeLabelStep: 15, columnWidth: 'xxxlarge' },
            18: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 5, timeLabelStep: 5, columnWidth: 'large' },
          },
          type: 'day',
          startTime: '08:00',
          endTime: '20:00',
          timeCellStep: 60,
          timeLabelStep:60,
          weekNumbers: false,
          currentTimeIndicator: true,
          size: 15, //page size
          // resolutionHorizontal: 'day',  //resolution for horizontal axis
          // eventList: true,
          // maxEventStack: 'all'  //set event stack size
        },
      },
      renderHeader: function () {
        return (
          '<div mbsc-calendar-nav></div>' +
          '<div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">' +
          '<button id="demo-zoom-level-out" class="mds-button-zoom-level" mbsc-button data-icon="minus" data-variant="flat"></button>' +
          '<input id="demo-zoom-level-slider" type="range" min="1" max="18" value="9" />' +
          '<button id="demo-zoom-level-in" class="mds-button-zoom-level" mbsc-button data-icon="plus" data-variant="flat"></button>' +
          '</div>' +
          '<div mbsc-calendar-prev></div>' +
          '<div mbsc-calendar-today></div>' +
          '<div mbsc-calendar-next></div>' +
          '</div>'
        );
      },
      data: savedEvents,
      // data: [
      //   {
      //     start: '2025-03-02T00:00',
      //     end: '2025-03-05T00:00',
      //     title: 'Event 1',
      //     resource: 1,
      //   },
      //   {
      //     start: '2025-03-10T09:00',
      //     end: '2025-03-15T15:00',
      //     title: 'Event 2',
      //     resource: 3,
      //   },
      //   {
      //     start: '2025-03-12T00:00',
      //     end: '2025-03-14T00:00',
      //     title: 'Event 3',
      //     resource: 4,
      //   },
      //   {
      //     start: '2025-03-15T07:00',
      //     end: '2025-03-20T12:00',
      //     title: 'Event 4',
      //     resource: 5,
      //   },
      //   {
      //     start: '2025-03-03T00:00',
      //     end: '2025-03-10T00:00',
      //     title: 'Event 5',
      //     resource: 6,
      //   },
      //   {
      //     start: '2025-03-10T08:00',
      //     end: '2025-03-11T20:00',
      //     title: 'Event 6',
      //     resource: 7,
      //   },
      //   {
      //     start: '2025-03-22T00:00',
      //     end: '2025-03-28T00:00',
      //     title: 'Event 7',
      //     resource: 7,
      //   },
      //   {
      //     start: '2025-03-08T00:00',
      //     end: '2025-03-13T00:00',
      //     title: 'Event 8',
      //     resource: 15,
      //   },
      //   {
      //     start: '2025-03-25T00:00',
      //     end: '2025-03-27T00:00',
      //     title: 'Event 9',
      //     resource: 10,
      //   },
      //   {
      //     start: '2025-03-20T00:00',
      //     end: '2025-03-23T00:00',
      //     title: 'Event 10',
      //     resource: 12,
      //   },
      // ],
      resources: [
        {
          id: 1,
          name: 'Resource A',
          color: '#e20000',
        },
        {
          id: 2,
          name: 'Resource B',
          color: '#76e083',
        },
        {
          id: 3,
          name: 'Resource C',
          color: '#4981d6',
        },
        {
          id: 4,
          name: 'Resource D',
          color: '#e25dd2',
        },
        {
          id: 5,
          name: 'Resource E',
          color: '#1dab2f',
        },
        {
          id: 6,
          name: 'Resource F',
          color: '#d6d145',
        },
        {
          id: 7,
          name: 'Resource G',
          color: '#34c8e0',
        },
        {
          id: 8,
          name: 'Resource H',
          color: '#9dde46',
        },
        {
          id: 9,
          name: 'Resource I',
          color: '#166f6f',
        },
        {
          id: 10,
          name: 'Resource J',
          color: '#f7961e',
        },
        {
          id: 11,
          name: 'Resource K',
          color: '#34c8e0',
        },
        {
          id: 12,
          name: 'Resource L',
          color: '#af0000',
        },
        // {
        //   id: 13,
        //   name: 'Resource M',
        //   color: '#446f1c',
        // },
        // {
        //   id: 14,
        //   name: 'Resource N',
        //   color: '#073138',
        // },
        // {
        //   id: 15,
        //   name: 'Resource O',
        //   color: '#4caf00',
        // },
      ],
    }).mobiscroll('getInst');

    function getRefDate(viewDate) {
      if (zoomLevel < 11) {
        return new Date(viewDate.getFullYear() - 12, 0, 1);
      }
      if (zoomLevel < 15) {
        return new Date(viewDate.getFullYear() - 1, 0, 1);
      }
      return new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
    }
  
    function handleZoom(zoom) {
      zoomLevel = zoom;
  
      $('#demo-zoom-level-slider').val(zoomLevel);
      $('#demo-zoom-level-in').prop('disabled', zoomLevel === 18);
      $('#demo-zoom-level-out').prop('disabled', zoomLevel === 1);
  
      var viewDate = myCalendar ? myCalendar.getViewDate() : new Date();
  
      myCalendar.setOptions({
        refDate: getRefDate(viewDate),
        zoomLevel: zoomLevel,
      });
    }
  
    $('#demo-zoom-level-slider').on('input', function (ev) {
      handleZoom(+ev.target.value);
    });
  
    $('#demo-zoom-level-in').on('click', function () {
      handleZoom(zoomLevel + 1);
    });
  
    $('#demo-zoom-level-out').on('click', function () {
      handleZoom(zoomLevel - 1);
    });

});
  