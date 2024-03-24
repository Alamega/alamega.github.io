const services = [
  { desc: "Java Spring Boot REST API", link: "https://alamega-api.onrender.com" },
  { desc: "Next JS", link: "https://alamega.onrender.com" },
];

services.forEach(async function (service) {
  const link = document.createElement("a");
  link.href = service.link;
  document.getElementById("services").appendChild(link);
  link.innerHTML = service.desc + `<span style="color: red"> (запускается...)<span/>`;
  fetch(service.link, { mode: "no-cors" })
    .then((response) => {
      link.innerHTML = service.desc + `<span style="color: green"> (работает)<span/>`;
    })
    .catch((error) => {
      link.innerHTML = service.desc + " (работает)";
    });
});
