//FORM SECTION
const form1_handlder = form => {
  let formToSubmit = document.getElementById(form);
  if (formToSubmit) {
    formToSubmit.submit();
  }
};

<div>FORM BASED REDIRECT</div>
      <div>To GCloud DEV ENV redirect to Netlify Hosted App</div>
      <div>
        <form
          id="form_1"
          method="post"
          action={gcloudUrl}
          target={namedTargetOrBlank}
        >
          <input type="text" name="id" defaultValue="234234234"></input>
          <input type="text" name="idType" defaultValue="secretId"></input>
          <a href="javascript:{}" onClick={() => form1_handlder("form_1")}>
            Named Target Submit Form
          </a>
        </form>
      </div>
      <div>To GCloud DEV ENV redirect to Gcloud Secure</div>
      <div>
        <form
          id="form_1"
          method="post"
          action={gcloudUrlSecure}
          target={namedTargetOrBlank}
        >
          <input type="text" name="id" defaultValue="234234234"></input>
          <input type="text" name="idType" defaultValue="secretId"></input>
          <a href="javascript:{}" onClick={() => form1_handlder("form_1")}>
            Named Target Submit Form
          </a>
        </form>
      </div>
      <div>To GCloud DEV ENV Redirect to gcloud Unsecure</div>
      <div>
        <form
          id="form_1"
          method="post"
          action={gcloudUrlUnsec}
          target={namedTargetOrBlank}
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
          target={namedTargetOrBlank}
        >
          <input type="text" name="id" defaultValue="234234234"></input>
          <input type="text" name="idType" defaultValue="secretId"></input>
          <a href="javascript:{}" onClick={() => form1_handlder("form_2")}>
            Named Target Submit Form
          </a>
        </form>
      </div>