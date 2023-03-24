// Fungsi asynchronous dengan Promise
function enrollInCourse(course) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!course) {
          reject('Kursus tidak ditemukan');
        } else {
          resolve(`Anda telah terdaftar di kursus ${course}`);
        }
      }, 3000);
    });
  }
  
  // Implementasi target hidup
  enrollInCourse('Javascript Programming')
    .then(result => console.log(result))
    .then(() => enrollInCourse('React Programming'))
    .then(result => console.log(result))
    .then(() => enrollInCourse('Node.js Programming'))
    .then(result => console.log(result))
    .catch(error => console.error(error));
  