import React from "react";
import "./App.css";
import DemoLinks from './DemoLinks.jsx'

function App() {
  //Main links for a hrefs
  //HREF SECTION

  const urlsToCreateLinksFor = ["http://localhost:3001", "https://boring-lewin-b8cd3f.netlify.com/"]
  ///
  const localRedirectProjectUrl = "http://localhost:8080";
  const authDemoAppGcloudHosted = "https://test-production-build-with-ssr.appspot.com"
  const authDemoAppGcloudHostedNotSecure = "http://test-production-build-with-ssr.appspot.com"
  const gcloudUrl = "https://devenv-259801.appspot.com/reg"
  const gcloudUrlSecure = "https://devenv-259801.appspot.com/gcloudSec"
  const gcloudUrlUnsec = "https://devenv-259801.appspot.com/gcloudUnsec"
  //change this to _blank to enable non named frame opens

  //TARGET SECTION
  const useNamedFrame = true
  const namedTargetOrBlank = useNamedFrame ? "named_frame" : "_blank";
  const linkContent = urlsToCreateLinksFor.map((itemUrl, index, array) => {
    return <DemoLinks key={`link_${index}`} itemUrl={itemUrl} namedTargetOrBlank={namedTargetOrBlank} />
  })
  console.log(linkContent)
  return (
    <div className="App">
      {linkContent}
    </div>
  );
}

export default App;
