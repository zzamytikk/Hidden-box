/*  ✪ https://zam.usite.pro/publ/2-1-0-4
    ✫ Версия 1.0.0
    © Copyright Плюшки для сайтов 2024
*/
var zHid = { //Спрятать/Показать hid
  //zHid.$();//★ Спрятать/Показать hid (Запускаем)
  $: () => { //Вешаем click
    
    $('[zhid]').each((i, e) => {
      //console.debug(i, e.tagName, e.className, e.className.indexOf('zHidTxt') > -1);
      i = e.className.indexOf('zHidTxt') > -1//true = span текст
        ? $(e)
        : $(e).find('[zhidb]:eq(0)');
      
      if (!$(e).attr('onzhid')) {
        $(e).attr('onzhid', 1);//Повесили click
        
        i.on('click', () => {
          zHid.X($(e));
        });
      } //else {
        //console.debug('Была попытка повторного запуска скрипта zHid.$(click.zHid);', [e]);
      //}
    });
  },
  /* zHid(//Спрятать/Показать
    Z//Путь до $('[zhid]')
  ); */
  X: Z => { //Спрятать/Показать
    //console.debug('zhid="'+Z.attr('zhid')+'",', 'max-height: '+Z.css('max-height'));
    //console.debug(Z, Z.attr('zhid') != 1 && Z.css('max-height')=='max-content'? 'Закрываем':'Открываем');
    
    Z.attr('zhid',
      +(Z.attr('zhid') != 1 && Z.css('max-height')=='max-content') //true: Закрываем, false: Открываем
    );
  }
};