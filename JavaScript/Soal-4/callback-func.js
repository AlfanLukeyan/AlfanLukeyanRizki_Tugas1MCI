/* Callback function to display a message if the website project is successful */
function finishProjectCallback(err, success) {
  if (err) {
    console.error(err);
  } else {
    console.log(success);
  }
}

/* Asynchronous functions with callbacks */
function finishProject(projectName, developer, deadline, callback) {
  setTimeout(() => {
    if (!projectName || !developer || !deadline) {
      callback('Incomplete data', null);
    } else {
      callback(null, `The ${projectName} project by ${developer} has been completed before ${deadline}`);
    }
  }, 5000);
}

/* life targets */
finishProject('Website E-commerce Coffee', 'Alfan', '29 December 2023', finishProjectCallback);
