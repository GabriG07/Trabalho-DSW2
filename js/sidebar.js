  const btn = document.getElementById('toggle-button');
  const sidebar = document.querySelector('.sidebar');
  const main = document.querySelector('.main-content');
  const btn_padding = getComputedStyle(btn).paddingLeft;
  const btn_left = getComputedStyle(btn).left;
  const btn_top = getComputedStyle(btn).top;

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('closed');
    main.classList.toggle('expanded');

    if(getComputedStyle(btn).paddingLeft != "0px"){
        btn.style.paddingLeft="0px";
        btn.style.left="10px";
        btn.style.top="15px";
    }
    else{
      btn.style.paddingLeft=  btn_padding;
      btn.style.left = btn_left;
      btn.style.top = btn_top;
      
    }
    
  });




  /* ---- Tratando o Redirecionamento de página --- */
const sidebarItems = document.querySelectorAll(".sidebar ul li");
const logo = document.querySelector(".logo");

sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    const src = img.src; 

    if (src.endsWith("home.png")) {
      window.location.href = "index.html";
    }
  });
});

logo.addEventListener("click", () => window.location.href = "index.html")
