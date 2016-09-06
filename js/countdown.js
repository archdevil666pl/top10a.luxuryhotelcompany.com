$(function() {
  var start_date = moment();
  var end_date = moment("2016-05-16 00:00:00");

  var diff = end_date.diff(start_date);
  var durr = moment.duration(diff);
  var seconds = durr.asSeconds();

  var clock = $('.flipclock').FlipClock(seconds, { clockFace: 'DailyCounter', countdown: true });
});
