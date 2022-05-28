const mongoose = require("mongoose");

(async () => {
  try {

    await mongoose.connect("mongodb://localhost/healthy", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("db is conneted");
      
      } 

  catch (error) {
    console.log(error);
      }

})();
