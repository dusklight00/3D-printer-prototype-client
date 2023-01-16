function get(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(this.responseText);
      }
    };
    request.open("GET", url);
    request.send();
  });
}

(async function () {
  const response = await get(
    "https://3-d-printer-prototype-backend.vercel.app/get_orders"
  );
  console.log(response);
})();
