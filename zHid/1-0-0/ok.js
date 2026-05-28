/*  ✪ https://zam.usite.pro/publ/2-1-0-4
    ✫ Версия 1.0.0
    © Copyright Плюшки для сайтов 2024
*/
var zHid = { //Спрятать/Показать hid
  //zHid.$();//★ Спрятать/Показать hid (Запускаем)
  $: () => { //Вешаем click
    $('[zhid]').each((i, e, E) => {
      if (!$(e).attr('onzhid')) {$(e).attr('onzhid', 1);//Повесили click
        /* console.debug('class:', (e.className || 'Пусто')
          , '\n\tИщим /zHid[23]/.test(e.className):', /(^| )zHid[23]( |$)/.test(e.className)
        );*/
        
        //Куда вешаем .on():
        //                                         || Когда class=''
        E = (i = /(^| )zHid[23]( |$)/.test(e.className))//.on(true = button, false = div[zhid])
          ? $(e).find('[zhidb]:eq(0)')//На button (Убераем множезтвенное нажатие, на все zHid2, zHid3)
          : $(e);//Открыть/Закрыть при нажатии на весь контенер
        
        E.on('click', G => {//Вешаем на весь контейнер || button(.zHid2, .zHid3)
          let A, B = $(e),//div[zhid]
            //                Открыто && Открыто
            x = +(B.attr('zhid') != 1 && B.css('max-height') == 'max-content');//true: Открыто || false: Закрыто
          
          /*console.info('• СТАРТ ---------', (B.attr('zhid') != 1 && B.css('max-height')=='max-content'? 'Закрываем':'Открываем')+', x:', x+', Висит на: .on(' +(i?'button':'div')+')');
          console.debug('[zhid]class:', B[0].className || 'пусто'
            , '\n\tПлиск .zHid2 или .zHid3:', i
            , '\n\tНажали(click):', G.target.tagName
            , x && 'PSB'.indexOf(G.target.tagName) > -1? '\n\tНажали: <p,s,b>: ' + ('PSB'.indexOf(G.target.tagName) > -1) :''
            , x && !i? '\n\tИщим button[zhidb=""]: '+ !!($(G.target).is('[zhidb=""]') || $(G.target).closest('[zhidb=""]')[0]) :''
          );*/
          
          A = x //Открыто(Закрываем):
            ? i//Висит на .on(button)
              //Висит на .on(div):
              || $(G.target).is('[zhidb=""]')//Нажали на button(не .zHid2, .zHid3) Закрываем!
              || (
                'PSB'.indexOf(G.target.tagName) > -1//нажали: <p,s,b> не на button
                && $(G.target).closest('[zhidb=""]')[0]//Ищим button[zhidb=''](без .zHid2, .zHid3)
              )? 1
              : ''//Ошибка! не нашли button[zhidb=""]
            : 0;//Закрыто(Откроем): Откроем при нажатии в любое место || На button только для .zHid2, .zHid3
          
          //console.debug('A:', A, A===1?'Закрываем':A===0?'Открываем':'Ошибка! не нашли button[zhidb=""]');
          if(typeof A === 'number') {
            B.attr('zhid', A);//Откроем/Закроем
          }
          
          /* Подробно:
          if(x) {//Открыто:
            //Закрываем:
            if(i){//Висит на .on(button)
              B.attr('zhid', 1);
            } else {//Висит на .on(div):
              if($(G.target).is('[zhidb=""]')){//Нажали на button(не .zHid2, .zHid3) Закрываем!
                B.attr('zhid', 1);
              } else if('PS'.indexOf(G.target.tagName) > -1) {//нажали: <p||s> не на button
                if($(G.target).closest('[zhidb=""]')[0]) {//button[zhidb=''](не .zHid2, .zHid3)
                  B.attr('zhid', 1);
                }
              }
            }
          } else {//Закрыто: Откроем при нажатии в любое место || button только для .zHid2, .zHid3
            B.attr('zhid', 0);//Откроем
          }
          */
          
          /*console.log('============',
            B.attr('zhid') != 1 && B.css('max-height')=='max-content' == x
              ? 'Ошибка!!!'
              : B.attr('zhid') != 1 && B.css('max-height')=='max-content'? 'Открыли.':'Закрыли.'
          , '© КОНЕЦ.');*/
        });
      } //else {
        //console.debug('Была попытка повторного запуска скрипта zHid.$(click.zHid);', [e]);
      //} 
    });
  }
};