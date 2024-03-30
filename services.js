const services = [
  {
    desc: "Java Spring Boot REST API",
    link: "https://alamega-api.onrender.com",
    img: "/images/spring.svg",
  },
  {
    desc: "Next JS",
    link: "https://alamega.onrender.com",
    img: "/images/next.svg",
  },
];

services.forEach(async function (service) {
  const link = document.createElement("a");
  document.getElementById("services").appendChild(link);
  link.href = service.link;
  link.innerHTML = `<img src="` + service.img + `""/>` + service.desc + "(запускается...)";
  link.style.color = "red";
  await fetch(service.link, { mode: "no-cors" });
  link.innerHTML = `<img src="` + service.img + `""/>` + service.desc + " (работает)";
  link.style.color = "green";
});
