import React from "react";
import "./App.css";

function App() {
  const localRedirectProjectUrl = "http://localhost:8080";
  const authDemoAppUrl = "https://boring-lewin-b8cd3f.netlify.com/";
  const gcloudUrl = "https://devenv-259801.appspot.com"
  const namedTarget = "named_frame";
  const form1_handlder = form => {
    let formToSubmit = document.getElementById(form);
    if (formToSubmit) {
      formToSubmit.submit();
    }
  };
  return (
    <div className="App">
      <div>
        Netlify {authDemoAppUrl} Links
        <div>
          <a href={authDemoAppUrl}>Regular Link</a>
        </div>
        <div>
          <a href={authDemoAppUrl} target="_blank" rel="noopener noreferrer">
            No Opener New Tab
          </a>
        </div>
        <div>
          <a href={authDemoAppUrl} target="_blank" rel="noreferrer">
            No Referrer New Tab
          </a>
        </div>
        <div>
          <a href={authDemoAppUrl} target="_blank" rel="noopener">
            No Opener New Tab
          </a>
        </div>
        <div>
          <a href={authDemoAppUrl} target="_blank">
            New Tab
          </a>
        </div>
        <div>
          <a href={authDemoAppUrl} target={namedTarget}>
            Named Target Link
          </a>
        </div>
      </div>
      <div>FORM BASED REDIRECT</div>
      <div>To GCloud DEV ENV</div>
      <div>
        <form
          id="form_1"
          method="post"
          action={gcloudUrl}
          target={namedTarget}
        >
          <input type="text" name="id" defaultValue="234234234"></input>
          <input type="text" name="idType" defaultValue="secretId"></input>
          <a href="javascript:{}" onClick={() => form1_handlder("form_1")}>
            Named Target Submit Form
          </a>
        </form>
      </div>
      <div>To LOCALHOST ENV</div>
      <div>
        <form
          id="form_2"
          method="post"
          action={localRedirectProjectUrl}
          target={namedTarget}
        >
          <input type="text" name="id" defaultValue="234234234"></input>
          <input type="text" name="idType" defaultValue="secretId"></input>
          <a href="javascript:{}" onClick={() => form1_handlder("form_2")}>
            Named Target Submit Form
          </a>
        </form>
      </div>
    </div>
  );
}

export default App;
