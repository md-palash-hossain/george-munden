(function () {
  const messages = JSON.parse(
    '{"hBhTCw":"{0, number}%","mEHEFw":"Italics","9IkXrg":"{0, number}","M50kBA":"Previous","n6fJwQ":"Item {0}","OHLWZg":"It\'s time for an update","ETcy/w":"Video not found","yLWiZA":"Ctrl","60VG2w":"Close","rlYolQ":"Series {0}","XoXDGA":"Try again.","Yi93JQ":"Toggle mute","+olYfw":"Source","E1H7vQ":"Toggle fullscreen (f)","KObNzg":"Toggle fullscreen","VSJwUw":"(opens in a new tab or window)","9uuK+A":"We can\'t open canva right now. Refresh this page to try again.","QCLTSw":"There was an issue on our end.","tojkXQ":"s","AeIYbw":"No data to display","j6lVrg":"Untitled Design","To2iTw":"Edit","VxF86A":"To keep using canva, get the latest version of the app.","xXWXkw":"Image could not be shown","/OrXPQ":"Menu","su+r1w":"Seek bar","2I+oCQ":"Loading","zSuUjw":"Toggle mute (m)","GnEy7g":"Page {0}","cSn0vw":"Play","5vUp+w":"Pause","R/C9Vw":"Font size","ezdcfw":"Close","ph76TQ":"Image not found","d7w5Og":"Bold","FIs9Yw":"Adjust volume","LW7DHQ":"Dismiss","x7pefA":"We\'re having some problems","MfH6Iw":"Start of dialog","WMuMxg":"Next","+UXBiA":"Sorry, we couldn\'t load this chart.","xY6udA":"We can\'t open canva right now. Close canva and try again."}'
  );
  const cmsg = (window["cmsg"] = window["cmsg"] || {});
  const strings = (cmsg["strings"] = cmsg["strings"] || {});
  strings["en-GB"] = strings["en-GB"]
    ? Object.assign(strings["en-GB"], messages)
    : messages;
})();
