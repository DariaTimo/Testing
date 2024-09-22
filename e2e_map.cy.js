describe('Карта', () => {
  it('', () => {
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
        cy.get(
          ':nth-child(1) > :nth-child(2) > :nth-child(1) > .q-tree__node--parent > .q-tree__node-collapsible > .q-tree__children > :nth-child(1) > .q-tree__node-header > .q-checkbox > .q-checkbox__inner > .q-checkbox__bg > .q-checkbox__svg > .q-checkbox__truthy'
        ).click();
        /*Кнопка применить в диалоге настройки объектов*/
        cy.get(
          '.q-gutter-sm > :nth-child(1) > .q-btn__content > .block'
        ).click();
        /*____________________________________________ */
      }
    });

    cy.get(
      '#q-app > div > div > div > div.q-splitter__panel.q-splitter__after.col > div > div > div.q-splitter.no-wrap.q-splitter--horizontal.column.q-splitter--workable.full-height.overflow-hidden > div.q-splitter__panel.q-splitter__before'
    ).then(($splitterTop) => {
      if ($splitterTop.height() > 0) {
        cy.get(
          '#map > div.map-toolbars > div.map-toolbar.y-start.x-end > button:nth-child(3)'
        ).click();
      } else if ($splitterTop.height() === 0) {
        cy.get(
          '#map > div.map-toolbars > div.map-toolbar.y-start.x-end > button:nth-child(3)'
        ).click();
        cy.get(
          '#map > div.map-toolbars > div.map-toolbar.y-start.x-end > button:nth-child(3)'
        ).click();
      }
    });
    cy.get(
      '#q-app > div > div > div > div.q-splitter__panel.q-splitter__after.col > div > div > div.q-splitter.no-wrap.q-splitter--horizontal.column.q-splitter--workable.full-height.overflow-hidden > div.q-splitter__panel.q-splitter__before'
    ).should(($el) => {
      expect($el.height()).to.equal(0);
    });
  });
});
