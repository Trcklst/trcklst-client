import React from "react";

function InternalErrorPage(error) {
  return (
    <section>
      <p>Uh oh, broken. Try to refresh the App.</p>
      <pre>{error.message}</pre>
    </section>
  );
}

export default InternalErrorPage;
