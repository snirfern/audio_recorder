$(function(){

  let startTimestamp, stopTimestamp,startDateStamp;

  initSensors();

  $('#startSession').on('click', function() {
    $('#recording').fadeIn();
    startTimestamp = (new Date()).getTime();

    startRecording();
    startSensorRecording();

  });

  $('#stopSession').on('click', function () {
    $('#recording').fadeOut();
    $('#audioNote').hide();
    startDateStamp = new Date();
    stopTimestamp = startDateStamp.getTime();

    stopRecording(startTimestamp, stopTimestamp,startDateStamp);
    stopSensorRecording();
    downloadSensorData(startTimestamp, stopTimestamp);

    log({
      message: 'Finished ' + (stopTimestamp - startTimestamp) / 1000 + ' seconds session with ' + sessionData.length +' data points',
      type: 'success'
    });

  });

});