/* 1. Basic Knowledge */

const doAsync = path => {
  return new Promise((resolve, reject) => {
    if (path == "/success") {
      resolve({ body: "success" });
    } else {
      reject(new Error());
    }
  });
};

// All of these are same meaning.
// 1. STEP1:
doAsync("/success").then(function resolve(response) {
  console.log(response);
  console.log("Commit in 1");
});

// 1. STEP2:
doAsync("/success").then(response => {
  console.log(response);
});

// 1. STEP3:
const doAsync_resolve = Promise.resolve({ body: "success" });
doAsync_resolve.then(response => {
  console.log(response);
});

/* 2. Basic Async Function */

const doAsync = () => {
  return Promise.resolve({ body: "success" });
};
doAsync().then(response => {
  console.log(response);
});

// Change above into async:

async function doAsync() {
  return { body: "success" };
}
// or
const doAsync = async () => {
  return { body: "success" };
};

doAsync().then(response => {
  console.log(response);
});

/* 3. Rewrite Promise Chain */

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

// 3-1. Use case 1.
const fetchResources1 = async () => {
  const results = [];
  try {
    const responseA = await dummyFetch("/resource/A");
    results.push(responseA.body);
    const responseB = await dummyFetch("/resource/B");
    results.push(responseB.body);
    const responseC = await dummyFetch("/faital/C");
    results.push(responseC.body);
    // D won't be called.
    const responseD = await dummyFetch("/resource/D");
    results.push(responseD.body);
  } catch (error) {
    console.log(error);
    console.log(error.message);
    console.log("Commit in 1");
  }
  return results;
};

fetchResources1().then(resp => {
  console.log(resp);
});

// 3-2. Use case 2.
const fetchResources2 = async () => {
  const results = [];

  await dummyFetch("/resource/A")
    .then(resp => {
      results.push(resp.body);
    })
    .catch(error => error.message);
  await dummyFetch("/resource/B")
    .then(resp => {
      results.push(resp.body);
    })
    .catch(error => error.message);
  await dummyFetch("/faital/C")
    .then(resp => {
      results.push(resp.body);
    })
    .catch(error => console.log(error.message));
  // D will be called.
  await dummyFetch("/resource/D")
    .then(resp => {
      results.push(resp.body);
    })
    .catch(error => error.message);

  return results;
};

fetchResources2().then(resp => {
  console.log(resp);
  console.log("Commit in 1");
});
