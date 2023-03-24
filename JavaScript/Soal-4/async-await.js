// Fungsi asynchronous dengan Promise
function learnDigitalMarketing(topic) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!topic) {
          reject('Topik tidak ditemukan');
        } else {
          resolve(`Anda telah mempelajari ${topic}`);
        }
      }, 4000);
    });
  }
  
  // Implementasi target hidup
  async function learnDigitalMarketingSkills() {
    try {
      const topic1 = await learnDigitalMarketing('SEO');
      console.log(topic1);
      const topic2 = await learnDigitalMarketing('Social Media Marketing');
      console.log(topic2);
      const topic3 = await learnDigitalMarketing('Email Marketing');
      console.log(topic3);
      const topic4 = await learnDigitalMarketing('Content Marketing');
      console.log(topic4);
      const topic5 = await learnDigitalMarketing('Google Ads');
      console.log(topic5);
    } catch (error) {
      console.error(error);
    }
  }
  
  learnDigitalMarketingSkills();
  