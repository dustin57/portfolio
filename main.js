'use strict'
{

  //ハンバーガーメニュー
  const menuBtn = document.getElementById('menuBtn');
  const menu = document.querySelector('#menu > ul');
  const headerMask = document.getElementById('headerMask');
  let menuLabel = false;
  const header = document.querySelector('header');


  menuBtn.addEventListener('click', () => {
    if (menuLabel == false) {
      menuOpen();
    } else {
      menuClose();
    }
  });

  function menuOpen() {
    headerMask.classList.remove('hidden');
    header.classList.add('menuOn');
    setTimeout(()=> {
      menu.style.display = 'block';
    }, 150);

    menuLabel = true;
  }

  function menuClose() {
    headerMask.classList.add('hidden');
    menu.style.display = 'none';
    header.classList.remove('menuOn');

    menuLabel = false;
  }

  headerMask.addEventListener('click', ()=> {
    if (window.innerWidth <= 500) {
    menuClose();
    }
  })

  const headerP = document.querySelector('header > p');
  headerP.addEventListener('click',()=> {
    if (window.innerWidth <= 500) {
    menuClose();
    }
  });
  const menuList = document.querySelectorAll('#menu a');
  menuList.forEach( e => {
    e.addEventListener('click',()=> {
      if (window.innerWidth <= 500) {
      menuClose();
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 500) {
      menu.style.display = '';
    }
    if (window.innerWidth <= 500) {
      menuClose();
      menuLabel = false;
    }
  });




  const works = document.querySelectorAll('.work > img');
  const modals = document.querySelectorAll('.modal');
  const workMask = document.getElementById('workMask');

  works.forEach((work, index) => {
    work.addEventListener('click', ()=> {
      modals[index].classList.remove('hidden');
      workMask.classList.remove('hidden');
    });
  });

  workMask.addEventListener('click', ()=> {
    workMask.classList.add('hidden');
    modals.forEach((modal, index) => {
      modals[index].classList.add('hidden');
    });
  });

  const deleteBtns = document.querySelectorAll('.deleteBtn');
  deleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', ()=> {
      workMask.classList.add('hidden');
      modals.forEach((modal, index) => {
        modals[index].classList.add('hidden');
      });
    });
  });




}
