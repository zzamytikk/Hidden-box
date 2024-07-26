/*  ✪ https://zam.usite.pro/publ/...
    ✫ Версия 1.0.0
    © Copyright Плюшки для сайтов 2024
*/
var zHid = {//Спрятать/Показать hid
  //zHid.$();//★ Спрятать/Показать hid (Запускаем)
  $:() => {//Вешаем click
    $('[zhid]').find('[zhidb]:eq(0)').click(e => {
      zHid.X($(e.target).closest('[zhid]'))
    });
  },
  /* zHid(//Спрятать/Показать
    Z//Путь до $('[zhid]')
  ); */
  X: Z => {//Спрятать/Показать
    //console.debug('zhid="'+Z.attr('zhid')+'",', 'max-height: '+Z.css('max-height'));
    
    if(Z.attr('zhid') != 1 && Z.css('max-height')=='100%'){//Открыто
      Z.attr('zhid', 1);//Закрываем
    } else {//Закрыто
      Z.attr('zhid', 0);//Открываем
    }
  }
};

/*
  ★    Название функции
  *     Описание
  •     Описание2
  ◈ ✂ ✓ ✪
  
  localStorage.setItem(key, value)
  localStorage.getItem(key)
*/

//#region       //✦ Уровень 1 ----

//#endregion    //✦ Уровень 1 ----

//#region           //✦✦ Уровень 2 ----

//#endregion        //✦✦ --------------