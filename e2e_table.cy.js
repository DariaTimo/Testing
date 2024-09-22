describe('Таблица', () => {
  it('', () => {
    // cy.clearCookies();
    // cy.clearLocalStorage();
    // cy.clearAllSessionStorage();
    cy.visit('/');
    cy.wait(2000);

    //выбор метамодели
    cy.get("[aria-label='Метамодель']").type('ГИСОГД 2.0');
    cy.get('div.q-item').click();

    //ввод имени
    cy.get("[aria-label='Имя пользователя']").type('test');

    //ввод пароля
    cy.get("[aria-label='Пароль']").type('test');

    //кнопка войти
    cy.get('button.q-btn.bg-primary').click();
    cy.wait(2000);

    // cy.get(
    //   '#q-notify > div > div.q-notifications__list.q-notifications__list--bottom.fixed.column.no-wrap.items-center > div > div > div.q-notification__actions.row.items-center.justify-end.q-notification__actions--with-media > button.q-btn.q-btn-item.non-selectable.no-outline.q-btn--flat.q-btn--rectangle.text-yellow.q-btn--actionable.q-focusable.q-hoverable'
    // ).click(); //закрытие нотификации (потом убрать)

    cy.get(
      '#q-app > div > div > header > div > button.q-btn.q-btn-item.non-selectable.no-outline.q-btn--flat.q-btn--rectangle.q-btn--actionable.q-focusable.q-hoverable.q-btn--dense > span.q-btn__content.text-center.col.items-center.q-anchor--skip.justify-center.row > i'
    ).then(($splitter) => {
      const t = $splitter.text();
      if (t === 'menu') {
        $splitter.click();
      }
    });
    cy.wait(2000);
    cy.get('#fact-list-component > div').then(($div) => {
      const text = $div.text();
      if (text === 'Нет данных для отображения') {
        /*Нажатие на кнопку "Настройка объектов", для выбора таблицы */
        cy.get(
          '.q-toolbar > .no-wrap > :nth-child(2) > .q-btn__content > .q-icon'
        ).click();
        cy.get('[aria-label="Фильтр"]').type('вид док');
        cy.wait(4000)
        cy.get(
          'div > div.q-dialog__inner.flex.no-pointer-events.q-dialog__inner--minimized.q-dialog__inner--standard.fixed-full.flex-center > div > div.pol-dialog-body > div:nth-child(2) > div > div > div.q-tree__node-header.relative-position.row.no-wrap.items-center.q-tree__node--link.q-hoverable.q-focusable > i'
        ).then(($arrow) => {
          if (!$arrow.hasClass('q-tree__arrow--rotate')) {
            cy.get(
              'div > div.q-dialog__inner.flex.no-pointer-events.q-dialog__inner--minimized.q-dialog__inner--standard.fixed-full.flex-center > div > div.pol-dialog-body > div:nth-child(2) > div > div > div.q-tree__node-header.relative-position.row.no-wrap.items-center.q-tree__node--link.q-hoverable.q-focusable > i'
            ).click();
            cy.get(
              'div > div.q-dialog__inner.flex.no-pointer-events.q-dialog__inner--minimized.q-dialog__inner--standard.fixed-full.flex-center > div > div.pol-dialog-body > div:nth-child(2) > div > div > div.q-tree__node-collapsible > div > div > div.q-tree__node-header.relative-position.row.no-wrap.items-center.q-tree__node--link.q-hoverable.q-focusable > i'
            ).click();
          }
        });
        /*Выбор таблицы в списке*/
        cy.wait(2000)
        cy.get(
          ':nth-child(1) > :nth-child(2) > :nth-child(1) > .q-tree__node--parent > .q-tree__node-collapsible > .q-tree__children > :nth-child(1) > .q-tree__node-header > .q-checkbox > .q-checkbox__inner > .q-checkbox__bg > .q-checkbox__svg > .q-checkbox__truthy'
        ).click();

        /*Кнопка применить в диалоге настройки объектов*/
         cy.get(
          '.q-gutter-sm > :nth-child(1) > .q-btn__content > .block'
        ).click();
        /*__________________________________________________________ */
      }
    });
    /*Раскрывает выбранную таблицу */
    cy.wait(4000)
    cy.get(
      '#fact-list-component > div > div > div.q-tree__node-header.relative-position.row.no-wrap.items-center.q-tree__node--link.q-hoverable.q-focusable > i'
    ).click();
    cy.wait(2000)
    cy.get('#fact-list-component > :nth-child(1)').click();
    cy.wait(2000);
    /*Фильтры, проверка на удаление */
    cy.get(
      '#fact-list-component > div > div > div.q-tree__node-collapsible > div > :nth-child(1)'
    ).then(($filter) => {
      if ($filter.hasClass('q-tree__node--parent')) {
        cy.get(
          '#fact-list-component > div > div > div.q-tree__node-collapsible > div > :nth-child(1)>div>div>div>button'
        ).click();
        cy.get('div>div.q-menu>div.q-list>:nth-child(1)').click();
        //очистка фильтров

        // cy.get(
          //   ':nth-child(3) > .q-tree__node-header > .q-tree__node-header-content > .q-item__section--main > :nth-child(1)'
          // ).click();
          //
        }
        cy.get(
          '#tablePromtId > div.table-header > div.q-toolbar.row.no-wrap.items-center.p-component.table-positioning > div > div:nth-child(3) > div > :nth-child(2)'
        ).then(($button) => {
          if (!$button.attr('disabled')) {
            $button.click();
            cy.get(
              '.q-gutter-sm > :nth-child(1) > .q-btn__content > .block'
            ).click();
          }
        });
      });
    /* */

    /*Группировки, проверка на удаление */
    cy.wait(4000)
    cy.get(
      '#fact-list-component > div > div > div.q-tree__node-collapsible > div > :nth-child(2)'
    ).then(($groups) => {
      if ($groups.hasClass('q-tree__node--parent')) {
        cy.get(
          '#fact-list-component > div > div > div.q-tree__node-collapsible > div > :nth-child(2)>div>div>div>button'
        ).click();
        cy.get('div>div.q-menu>div.q-list>:nth-child(2)').click();

        // cy.get(
        //   ':nth-child(3) > .q-tree__node-header > .q-tree__node-header-content > .q-item__section--main > :nth-child(1)'
        // ).click();
        //
      }
    });
    /* */

    /* Добавление группировки */
    cy.wait(4000)
    cy.get(
      '#fact-list-component > div > div > div.q-tree__node-collapsible > div > div:nth-child(2) > div > div.q-tree__node-header-content.col.row.no-wrap.items-center > div.q-item__section.column.q-item__section--side.justify-center.q-item__section--avatar > button > span.q-btn__content.text-center.col.items-center.q-anchor--skip.justify-center.row > i'
    ).click();
    cy.get('.q-list > :nth-child(1) > .q-item__section--main').click();
    cy.wait(4000)
    cy.get('[aria-label="Поля группировки"]').type('код тип');
    cy.wait(4000)
    cy.get('.q-item__label > span').click();
    cy.wait(4000)
    cy.get('.q-gutter-sm > :nth-child(1) > .q-btn__content > .block').click();

    cy.wait(4000)
    cy.get(':nth-child(2) > :nth-child(1) > .q-tree__arrow').click();
    cy.wait(4000)
    cy.get(
      ':nth-child(2) > [style=""] > :nth-child(1) > .q-tree__node--parent > :nth-child(1) > .q-tree__arrow'
    ).click();
    cy.wait(4000)
    /* */

    /*Находит поле договор с параметром 70 */

    cy.get(
      '#fact-list-component > div > div > div.q-tree__node-collapsible > div > div.q-tree__node.relative-position.q-tree__node--parent > div.q-tree__node-collapsible > div > div > div.q-tree__node-collapsible > div >:nth-child(3)>div>:nth-child(2)>div>div>div'
    ).should('have.text', '70');
    /* */

    // cy.get(
    //   '#tablePromtId > div.table-and-paginator > div.p-paginator.p-component.p-paginator-bottom > span'
    // ).should(($tableCount) => {
    //   expect($tableCount).to.contain('666');
    // });
    /*Кликает на группировку зачем то */
    // cy.get(
    //   'div.q-tree__children > :nth-child(3) > div > div.items-center > :nth-child(1) > div > div'
    // ).click()
    cy.wait(4000)
    cy.get(
      '#tablePromtId > div.table-header > div.q-toolbar.row.no-wrap.items-center.p-component.table-positioning > div > div:nth-child(3) > button:nth-child(1)'
    ).click();

    // cy.get(
    //   '#tablePromtId > div.table-and-paginator > div.p-paginator.p-component.p-paginator-bottom > span'
    // ).should(($tableCount) => {
    //   expect($tableCount).to.contain('666');
    // });

    /*Вызов диалога настройки колонок*/
    cy.wait(4000)
    cy.get(
      '#tablePromtId > div.table-header > div.q-toolbar.row.no-wrap.items-center.p-component.table-positioning > div > div:nth-child(3) > button:nth-child(8)'
    ).click(); //checkbox-icon-off
    /*выбор поля "код тип документа"*/
    cy.get('#column-setting-item-4 > div:nth-child(1) > i:nth-child(2)').then(
      ($search) => {
        if ($search.hasClass('checkbox-icon-off')) {
          $search.click();
        }
      }
    );
    /*Нажатие на кнопку ОК в диалоге настройки колонок*/
    cy.get(
      'div.q-card>div.q-card__actions>div.q-gutter-sm> :nth-child(1)'
    ).click();
    cy.get(
      'div.q-card>div.q-card__actions>div.q-gutter-sm> :nth-child(2)'
    ).click();

    cy.get('div>input[placeholder="Поиск"]').type('Прочие');
    cy.get(
      '#tablePromtId > div.table-header > div.q-toolbar.row.no-wrap.items-center.p-component.table-positioning > div > div.div-input > label > div > div > div.q-field__append.q-field__marginal.row.no-wrap.items-center > i'
    ).click();
    cy.get(
      '#tablePromtId > div.table-and-paginator > div.p-paginator.p-component.p-paginator-bottom > span'
    ).should(($tableCount) => {
      expect($tableCount).to.contain('111');
    });
    /* */

    /*Параметры для фильтра*/
    cy.get('.no-wrap > .q-mr-xs > .q-btn__content > .q-icon').click();
    cy.get(
      '#tree-section > div > div > div.q-tree__node-collapsible > div > div > div > div.q-tree__node-header-content.col.row.no-wrap.items-center > div > label:nth-child(1) > div > div > div.q-field__append.q-field__marginal.row.no-wrap.items-center.q-anchor--skip > i'
    ).click();
    cy.get(
      'div#q-app+div+div+div>div.q-menu > div.q-virtual-scroll__content>:nth-child(4)'
    ).click();
    cy.get(
      '#tree-section > div > div > div.q-tree__node-collapsible > div > div > div > div.q-tree__node-header-content.col.row.no-wrap.items-center > div > label:nth-child(2) > div > div > div.q-field__append.q-field__marginal.row.no-wrap.items-center.q-anchor--skip > i'
    ).click();
    cy.get(
      'div#q-app+div+div+div>div.q-menu > div.q-virtual-scroll__content>:nth-child(3)'
    ).click();
    cy.get(
      '#tree-section > div > div > div.q-tree__node-collapsible > div > div > div > div.q-tree__node-header-content.col.row.no-wrap.items-center > div > label.q-field.row.no-wrap.items-start.q-field--standard.q-input.q-field--float.q-field--dense.q-field--with-bottom > div > div.q-field__control.relative-position.row.no-wrap > div > input'
    ).clear();
    cy.get(
      '#tree-section > div > div > div.q-tree__node-collapsible > div > div > div > div.q-tree__node-header-content.col.row.no-wrap.items-center > div > label.q-field.row.no-wrap.items-start.q-field--standard.q-input.q-field--float.q-field--dense.q-field--with-bottom > div > div.q-field__control.relative-position.row.no-wrap > div > input'
    ).type('170');
    cy.get('#buttons-bar > button:nth-child(1)').click();
    cy.get('input[placeholder="Введите имя вашего фильтра"]').type('Код > 170');
    cy.get('.q-gutter-sm > :nth-child(1) > .q-btn__content > .block').click();
    // cy.get(
    //   'div#q-app+div+div+div+div>div>:nth-child(2)>div>:nth-child(5)>:nth-child(2)>:nth-child(1)'
    // ).click();
    cy.get('#buttons-bar > button:nth-child(4)').click();
    cy.get(
      '#tablePromtId > div.table-and-paginator > div.p-paginator.p-component.p-paginator-bottom > span'
    ).should(($tableCount) => {
      expect($tableCount).to.contain('95');
    });
    /* */

    // /*Раскраска по фильтру */
    // cy.get(
    //   '#tablePromtId > div.table-header > div.q-toolbar.row.no-wrap.items-center.p-component.table-positioning > div > div:nth-child(3) > button:nth-child(5)'
    // ).click();
    // cy.get('#color-filter-toolbar > button:nth-child(4)').click();

    // cy.get(
    //   'div.centerDiv > label > div > div > div.q-field__control-container.col.relative-position.row.no-wrap.q-anchor--skip>input'
    // ).clear();
    // cy.get(
    //   'div#q-app+div+div+div>div > div.q-dialog__inner.flex.no-pointer-events.q-dialog__inner--minimized.q-dialog__inner--standard.fixed-full.flex-center > div > div.pol-dialog-body > div > div:nth-child(1) > div.centerDiv > label > div > div > div.q-field__control-container.col.relative-position.row.no-wrap.q-anchor--skip>input.q-placeholder'
    // ).type('rgb(247,2,2)');
    // cy.get(
    //   ':nth-child(1) > .centerDiv > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-icon'
    // ).click();
    // cy.get(
    //   'div#q-app+div+div+div>div > div.q-dialog__inner.flex.no-pointer-events.q-dialog__inner--minimized.q-dialog__inner--standard.fixed-full.flex-center > div > div.q-card__actions.justify-start.q-card__actions--horiz.row.text-primary.pol-dialog-absolute.pol-dialog-footer > div.q-gutter-sm > button:nth-child(1)'
    // ).click();
    // /* */

    /*очистка введенного*/
    /*Вызов диалога настройки колонок*/
    cy.get(
      '#tablePromtId > div.table-header > div.q-toolbar.row.no-wrap.items-center.p-component.table-positioning > div > div:nth-child(3) > button:nth-child(8)'
    ).click();
    /*отключение всех полей*/
    cy.wait(4000)
    cy.get(
      'div > div.q-dialog__inner.flex.no-pointer-events.q-dialog__inner--minimized.q-dialog__inner--standard.fixed-full.flex-center > div > div.pol-dialog-body > div:nth-child(1) > div > div > div > div > header > div > div.q-toolbar.row.no-wrap.items-center > button:nth-child(2)'
    ).click();
    cy.get(
      'div > div.q-dialog__inner.flex.no-pointer-events.q-dialog__inner--minimized.q-dialog__inner--standard.fixed-full.flex-center > div > div.pol-dialog-body > div:nth-child(1) > div > div > div > div > header > div > div.q-toolbar.row.no-wrap.items-center > button:nth-child(2)'
    ).click();
    /*Нажатие на кнопку ОК в диалоге настройки колонок*/
    cy.get(
      'div.q-card>div.q-card__actions>div.q-gutter-sm> :nth-child(1)'
    ).click();
    cy.get(
      'div.q-card>div.q-card__actions>div.q-gutter-sm> :nth-child(2)' //потом убрать
    ).click();
    /* */

    cy.get(
      '[style="display: flex; padding: 5px 0px;"] > .no-wrap > :nth-child(2) > .q-btn__content > .q-icon'
    ).click();
    cy.get('.q-gutter-sm > :nth-child(1) > .q-btn__content > .block').click();

    // cy.get(
    //   ':nth-child(2) > :nth-child(2) > :nth-child(1) > .q-tree__node--parent > :nth-child(1) > .q-tree__arrow'
    // ).click();
    // cy.get(':nth-child(2) > :nth-child(1) > .q-tree__arrow').click();
    // cy.get(
    //   ':nth-child(2) > :nth-child(1) > .q-tree__node-header-content > .q-item__section--side > .q-btn > .q-btn__content > .q-icon'
    // ).click();
    cy.get(
      '#fact-list-component > div > div > div.q-tree__node-collapsible > div > :nth-child(1)>div>div>div>button'
    ).click();
    cy.get('div>div.q-menu>div.q-list>:nth-child(1)').click();

    cy.wait(1000);
    cy.get(
      '#fact-list-component > div > div > div.q-tree__node-collapsible > div > :nth-child(2)>div>div>div>button'
    ).click();
    cy.get('div>div.q-menu>div.q-list>:nth-child(2)').click();
    cy.get(
      '.q-toolbar > .no-wrap > :nth-child(2) > .q-btn__content > .q-icon'
    ).click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get(
      '.q-card__section.row > .q-checkbox > .q-checkbox__inner > .q-checkbox__bg > .q-checkbox__svg'
    ).click();
    cy.get(
      '.q-tree > :nth-child(1) > :nth-child(1) > .q-checkbox > .q-checkbox__inner > .q-checkbox__bg > .q-checkbox__svg'
    ).click();
    cy.get(
      '.q-tree > :nth-child(1) > :nth-child(1) > .q-checkbox > .q-checkbox__inner > .q-checkbox__bg > .q-checkbox__svg'
    ).click();
    cy.get('.q-gutter-sm > :nth-child(1) > .q-btn__content > .block').click();
  });
});
