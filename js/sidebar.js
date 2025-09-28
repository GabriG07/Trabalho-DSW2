  const btn = document.getElementById('toggle-button');
  const sidebar = document.querySelector('.sidebar');
  const main = document.querySelector('.main-content');
  const btn_padding = getComputedStyle(btn).paddingLeft;

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('closed');
    main.classList.toggle('expanded');

    if(getComputedStyle(btn).paddingLeft != "0px"){
        btn.style.paddingLeft="0px";
    }
    else{
      btn.style.paddingLeft=  btn_padding;
    }
    
  });