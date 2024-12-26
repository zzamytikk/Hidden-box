/*  ✪ https://zam.usite.pro/publ/2-1-0-4
    ✫ Версия 1.0.0
    © Copyright Плюшки для сайтов 2024
*/
var zHid = {//Спрятать/Показать hid
  //zHid.$();//★ Спрятать/Показать hid (Запускаем)
  $:() => {//Вешаем click
    $('[zhid]').find('[zhidb]:eq(0)').each((i, e) => {
      //if ($._data($(e)[0], 'events')?.click[0].namespace != 'zHid') { //Проверка ключа (Ключь не совпал! повесим обработчик)
      if(zHid.proNS(//Проверка namespace
          e,//event
          'zHid'//Какой ключь(namespace) ищим
          //undefined = click
        )//return true = Ненашли ключ, false = нашли!
      ){
        $(e).on('click.zHid', e => {
          zHid.X($(e.target).closest('[zhid]'))
        });
      } else {
        console.debug('Была попытка повторного запуска скрипта zHid.$(click.zHid);', e);
      }
    });
  
    /*$('[zhid]').find('[zhidb]:eq(0)').click(e => {
      zHid.X($(e.target).closest('[zhid]'))
    });*/
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
  },
  /* proNS(//Проверка namespace
      e,//event
      'cod',//Какой ключь(namespace) ищим
      'input'//$.on('input.cod'); undefined = click
    );//return true = Ненашли ключ, false = нашли!
  */
  proNS: (e, P, c = 'click') => { //Ищим .cod, установленный: `$.on('click.cod', () => {})`
    let d = $._data($(e)[0], 'events')?.[c];

    //console.debug('Нашли запись: if(' + (d && d[0].namespace) + ').', d);

    if (d && d[0].namespace) { //Нашли запись
      return !d.filter(v => { //Проверим все
        //console.debug('if(' + v['namespace'] + '==' + P + ') =>', v['namespace'] == P);

        if (v['namespace'] == P) { //Нашли запись
          return true //Выбераем совпадение
        }
      })[0]; //[0] Проверка первого совпадения
    }

    return true; //Пусто
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