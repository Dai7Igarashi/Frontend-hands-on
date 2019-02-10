/* Simple */

function dummyFetch(path, callback) {
  setTimeout(() => {
    if (path.startsWith("/success")) {
      callback(null, { body: `Response body of ${path}` });
    } else {
      callback(new Error("Not Found"));
    }
  }, 1000 * Math.random());
}

dummyFetch("/success/data", (error, response) => {
  // if error != null
  if (error) {
    console.log(error);
  }
  // else
  else {
    console.log(response);
  }
});
