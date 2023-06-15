document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    console.log(tabs,'tabs')
    var tab = tabs[0];
    var title = tab.title;
    console.log(title,'title')
    var messageElement = document.getElementById('App');
    messageElement.textContent = '当前选项卡的标题是：' + title;
  });
});
