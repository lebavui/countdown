document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var target = Date("Oct 31, 2020 23:59:59");
  var twoDaysFromNow = (new Date("Oct 31, 2020 23:59:59").getTime() / 1000) + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

    let body = document.body;
    body.classList.toggle('light-theme');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
    
});
