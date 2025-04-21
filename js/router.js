const routes = {
    "/": "pages/home.html",
    "/services": "pages/services.html",
    "/contact": "pages/contact.html",
    "/404": "pages/404.html"
  };
  
  const loadContent = async () => {
    const path = location.hash.slice(1) || "/";
    const route = routes[path] || routes["/404"];
  
    try {
      const res = await fetch(route);
      const html = await res.text();
      document.getElementById("app").innerHTML = html;
    } catch (err) {
      document.getElementById("app").innerHTML = "<h2>Error loading page</h2>";
    }
  };
  
  window.addEventListener("hashchange", loadContent);
  window.addEventListener("load", loadContent);
  