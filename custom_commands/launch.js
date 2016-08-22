exports.command = function (url) {
  this
    //.maximizeWindow()
    .resizeWindow(1200, 800)
    .url(url, function () {
      console.log("Navigating to Medhok's website...")
    });
  return this
};
