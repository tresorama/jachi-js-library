export function mediaQueryWatcher(mediaQueryString, onMatchChange) {
  // get a MediaQueryObject
  const mql = window.matchMedia(mediaQueryString);

  // when media query match status change run callback
  const handler = function (e) {
    onMatchChange(e.matches);
  };

  if (mql.addEventListener !== undefined) {
    mql.addEventListener("change", handler);
  } else if (mql.addListener !== undefined) {
    console.log(
      `mediaQueryList.addEventListener() not supported.
      Fallbacking to addListener()! `
    );
    mql.addListener(handler);
  } else {
    console.log(
      "Neither mediaQueryList.addEventListener() & mediaQueryList.addListener() are supported by this browser! "
    );
  }

  // run once at page load
  onMatchChange(mql.matches);
}

/*

Usage


mediaQueryWatcher('(min-width: 768px)', (matches) => {
  if (matches) {
    //desktop
    document.querySelector(".my-el").classList.add('is-desktop');
  } else {
    //mobile
    document.querySelector(".my-el").classList.remove('is-desktop');
  }
})

*/
