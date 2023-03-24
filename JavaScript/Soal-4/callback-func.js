// Fungsi callback untuk menampilkan pesan jika buku berhasil diterbitkan
function publishBookCallback(err, success) {
    if (err) {
      console.error(err);
    } else {
      console.log(success);
    }
  }
  
  // Fungsi asynchronous dengan callback
  function publishBook(title, author, publisher, callback) {
    setTimeout(() => {
      if (!title || !author || !publisher) {
        callback('Data tidak lengkap', null);
      } else {
        callback(null, `Buku ${title} oleh ${author} telah diterbitkan oleh ${publisher}`);
      }
    }, 2000);
  }
  
  // Implementasi target hidup
  publishBook('Membangun Bisnis Startup', 'Jane Doe', 'Majalah Entrepreneur', publishBookCallback);
  