chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.includes("leetcode.com/problems") && changeInfo.status === 'complete') {
    chrome.action.setPopup({popup: 'popup.html'});
    console.log(tab.url);
    countDownFrom(65);  
  }
});

const countDownFrom = (time) => {
  console.log("Starting timer...");
  var now = new Date();
  var alarmDate = new Date();
  alarmDate.setMinutes(alarmDate.getMinutes()+time);
  //twentyMinutesLater.setMinutes(twentyMinutesLater.getMinutes() + 20);
  console.log("Now is: "+now)
  console.log("Duration: "+time)
  console.log("To: "+alarmDate)
  setInterval(
    function(){
      var now = new Date();
      var Mldistance = alarmDate - now;
      var distance = new Date(Mldistance)
      console.log((distance.getHours()-1)+":"+distance.getMinutes()+":"+distance.getSeconds())
  }, 1000);
};
