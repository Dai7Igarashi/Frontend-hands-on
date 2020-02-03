// Uni Usecase:

/* 1. Most Clear Pattern */

function dummyFetch(path) {
  return new Promise(function(resolve_func, reject_func) {
    /**
     * setTimeout is async function.
     * It's working on main thread.
     */
    setTimeout(function() {
      if (path.startsWith("/success")) {
        // args: Object
        resolve_func({ body: `Response body of ${path}` });
      } else {
        // args: Error Object
        // reject_func(new Error("Not Found"));
        reject_func(new Error("Not Found"));
      }
    }, 1000 * Math.random());
  });
}

dummyFetch("/success/data")
  /**
   * After `then` method, you can set the two types of callback functions.
   */
  .then(
    /**
     * resolve_func = onFulfilled
     * Promise returns the function `resolve` which args is `response`.
     */
    function onFulfilled(response) {
      console.log(response);
    },
    function onRejected(error) {
      console.log(error);
      console.log("Hoge Hoge");
      console.log("Commit in 1");
      console.log("Commit in 1");
      console.log("Commit in 2");
      console.log("Commit in 1");
    }
  );

/* 2-1. Only Fulfilled Pattern */

function delay(timeoutMs) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, timeoutMs);
  });
}

(function testDelay() {
  console.log("1. Start Promise");
  delay(1000).then(function resolve_fulfilled(response) {
    console.log("3. After 1000Ms !");
  });
  console.log("2. delay function is actiong on Async Process...");
})();

/* 2-2. Using Arror Function */

const delay = timeoutMs => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, timeoutMs);
  });
};

(() => {
  console.log("1. Start Promise");
  delay(1000).then(function resolve_fulfilled(response) {
    console.log("3. After 1000Ms !");
  });
  console.log("2. delay function is actiong on Async Process...");
})();

/* 3. Only Rejected Pattern */

const errorPromise = message => {
  return new Promise((resolve, reject) => {
    reject(new Error(message));
  });
};

/* 3-1. Using `then` */

errorPromise("error handling with then").then(undefined, error => {
  console.log(error.message);
});

/* 3-2. Using `catch` */

errorPromise("error handling with catch").catch(error => {
  console.log(error.message);
});

// Promise Chain:

/* 4. Promise Chain */

const dummyFetch = path => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path.startsWith("/resource")) {
        resolve({ body: `Response body of ${path}` });
      } else {
        reject(new Error("Not Found"));
      }
    }, 1000 * Math.random());
  });
};

const results = [];

dummyFetch("/resource/A")
  /**
   * dummyFetch returns function, resolve or reject, which has args,
   * like (args) => {}.
   */
  .then(response => {
    results.push(response.body);
    /**
     * If returns Promise Object, you can get next status by using `then` or `catch`.
     */
    return dummyFetch("/resource/B");
  })
  .then(resp => {
    results.push(resp.body);
    /**
     * If not returns Promise Object, then you get function which has no args anytime,
     * except resolve and reject callback functions.
     */
  })
  .then(() => {
    console.log(results);
  })
  .then(() => {
    console.log("Hello World");
    console.log("Commit in 2");
    console.log("Commit in 1");
  })
  .catch(error_object => {
    /**
     * If an Error Object returns error, then catch here.
     */
    console.log(error_object);
  });
