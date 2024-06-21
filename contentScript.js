(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, videoId } = obj;
        if (type === "NEW") {
            console.log("heard!");
            countDownTo(20);    
        }
        response = null
  });

  const countDownTo = (time) => {
    // Get today's date and time
    var now = new Date().getTime();
    //Convert input time to milliseconds
    var addMlSeconds = time * 60 * 60 * 1000;
    //Add 
    var countDownDate = new Date(now + addMlSeconds);
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    while (distance > 0){
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the element with id="demo"
    //console.log(days + "d " + hours + "h "
    //+ minutes + "m " + seconds + "s ");

    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    };
        // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }
  /*
  const newVideoLoaded = () => {
      const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
      console.log(bookmarkBtnExists);

      if (!bookmarkBtnExists) {
          const bookmarkBtn = document.createElement("img");

          bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
          bookmarkBtn.className = "ytp-button " + "bookmark-btn";
          bookmarkBtn.title = "Click to bookmark current timestamp";

          youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
          youtubePlayer = document.getElementsByClassName("video-stream")[0];
          
          youtubeLeftControls.append(bookmarkBtn);
          bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
      }
  }

  const addNewBookmarkEventHandler = () => {
      const currentTime = youtubePlayer.currentTime;
      const newBookmark = {
          time: currentTime,
          desc: "Bookmark at " + getTime(currentTime),
      };
      console.log(newBookmark);

      chrome.storage.sync.set({
          [currentVideo]: JSON.stringify([...currentVideoBookmarks, newBookmark].sort((a, b) => a.time - b.time))
      });
  }

  newVideoLoaded();

*/  
})();

