let url = `${process.env.APP_API}/validuser`;

   let body = JSON.stringify({
     loginid: "admin",
     password: "admin",
  });

var authOptions = {
  method: "post",
  url: url,
  data: body,
  headers: {
    "Content-Type": "application/json",
  },
  json: true,
};

axios(authOptions)
  .then((resp) => {
    console.log("response :- ",resp);
  })
  .catch((error) => {
    alert(error);
  });