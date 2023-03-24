function applyForAdminLabMCI(score) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (score >= 80) {
        resolve("You have successfully become an admin of the MCI laboratory!");
      } else {
        reject("Your score points are less than 80, do not meet the requirements to become a laboratory admin.");
      }
    }, 2000); /* provides a delay of 2 seconds for asynchronicity simulation */
  });
}

/* Using Promises function*/
applyForAdminLabMCI(85)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
  });

/* Output: You have successfully become a laboratory admin! */
