describe('Карта', () => {
  it('card test', () => {
    cy.visit('/');
    cy.wait(2000);
    cy.reload(); //потом убрать
    //выбор метамодели
    cy.get("[aria-label='Метамодель']").type('ГИСОГД 2.0');
    cy.get('div.q-item').click();

    //ввод имени
    cy.get("[aria-label='Имя пользователя']").type('test');

    //ввод пароля
    cy.get("[aria-label='Пароль']").type('test123');

    //кнопка войти
    cy.get('button.q-btn.bg-primary').click();
    cy.wait(4000);

    cy.get('#toolbarToggleBtn').click(); //клик по кнопке на тулбаре закрыть


    cy.get('#toolbarToggleBtn').click(); //клик по той же кнопке на тулбаре открыть
    cy.wait(1000);
    //проверка открыт ли фактлист или нет, если не открыт то открываем
    cy.get('#toolbarToggleBtn > :nth-child(2) > i').then(($btn) => {
      if ($btn.text() == 'menu') {
        cy.get('#toolbarToggleBtn').click();
      }
    });
    cy.get('#settingsFactListBtn').click(); //открываем fact dialog
    cy.get('#factDialogShowSelected').click(); //клик по кнопке "Показать выбранные" 

    cy.get('#qTreeCardSection').then(($node) => {
      const l = $node.children().length; //количество дочерних элементов, если выбранных таблиц нет, то есть надпись "нет выбранных элементов", соответственно количество дочерних элементов будет 1
      const child = $node.text(); //перевод в текст

      //смотрим сколько включенных таблиц есть. Если больше 0, то закрываем диалог, если нет ни одной, то выбираем
      if (l > 0 && child != 'Нет выбранных объектов') {
        //в данном случае выбранные элементы есть, поэтому просто закрываем диалог
        cy.get(
          '.q-bar>div[style = "position: absolute; right: 5px;"]> :nth-child(2)'
        ).click();
      } else {
        //в данном случае нет выбранных объектов, поэтому пишем в поиск "зарегистрированные участки", добавляем и сохраняем
        cy.get('#factDialogShowSelected').click(); //убирает чекбокс "показать выбранные"
        cy.get('#inputFactDialog>label [aria-label="Фильтр"]').type(
          'Зарегистрированные участки'
        ); //пишет в поиск
        cy.get(
          '#qTreeCardSection .q-tree__node-collapsible .q-tree__node-collapsible .q-checkbox '
        ).click(); //нажимает на чекбокс объекта
        cy.get('.q-card__actions>.q-gutter-sm> :nth-child(1)').click(); //нажатие на кнопку "применить" в факт диалоге
      }

    });
  });
});
