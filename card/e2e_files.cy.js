describe('Карта', () => {
    it('card test', () => {
        
        cy.visit('/');
        cy.wait(6000);
        
        //выбор метамодели
        cy.get("[aria-label='Метамодель']").type('ГИСОГД 2.0');
        cy.wait(2000);
        cy.get('div.q-item').click();


        //ввод имени
        cy.get("[aria-label='Имя пользователя']").type('d.timoshenko');

        //ввод пароля
        cy.get("[aria-label='Пароль']").type('Maks25kas52');

        //кнопка войти
        cy.get('button.q-btn.bg-primary').click();
        cy.wait(6000);
       // cy.get('.y-start.x-end > :nth-child(3)').click()
        cy.get('#toolbarToggleBtn > :nth-child(2) > i').then(($btn) => {
          if ($btn.text() == 'menu') {
            cy.get('#toolbarToggleBtn').click();
          }
        })
      cy.get('#fact-list-component').then(($node) => {
          const l = $node.children().length;
          const child = $node.text();
          //alert(child)
          if (l > 0 && child.includes('Новые участки')) { //проверка есть ли объекты в списке, если есть то скрываем первый объект, иначе добавляем объект Зарегистрированные участки

              cy.get('#fact-list-component').contains('Новые участки').click()

          } else {
              cy.get('#settingsFactListBtn').click()

              cy.get('#inputFactDialog>label [aria-label="Фильтр"]').type('Новые участки')
              cy.get('.q-card__section .q-tree .q-checkbox').last().click()
              .get('.q-dialog .q-gutter-sm :nth-child(1)').first().click()
              .get('#fact-list-component').contains('Новые участки').click()
              .wait(4000)

          }
        })
        

           // if (document.querySelectorAll())
           //{
            cy.wait(10000)
            cy.get('.q-card--bordered >:nth-child(4) >:nth-child(6)').click()
            cy.wait(4000)









            cy.get('.q-uploader__input').selectFile(['S:/Common/Тимошенко Дарья/Тестирование/Novosibirsk.jpg', 
            'S:/Common/Тимошенко Дарья/Тестирование/Тесты.txt'])
            cy.wait(10000)
            cy.contains('Без классификации').click()









            
            cy.wait(4000)
            cy.get('.q-card').contains('Сохранить').click()
            cy.wait(4000)
          .get('.q-uploader__header > .no-wrap > :nth-child(4)').click()
            cy.get('.q-uploader__list').contains('ИИИИИ').click()
            cy.get('.q-dialog .q-card .q-splitter >:nth-child(3) >:nth-child(1) >:nth-child(1)').click()
            cy.wait(2000)
            cy.get('.q-dialog .q-card .q-splitter >:nth-child(3) >:nth-child(1) >:nth-child(1)').click()
            cy.get('.q-dialog .q-card .q-splitter >:nth-child(3) >:nth-child(1) >:nth-child(2)').click()
            cy.wait(2000)
            cy.get('.q-dialog .q-card .q-splitter >:nth-child(3) >:nth-child(1) >:nth-child(2)').click()
            cy.get(':nth-child(2) > .q-item__section--main').first().click()
            cy.get('.q-uploader__list :nth-child(1) :nth-child(4)').first().click()
            cy.get('div.q-menu> div').contains('Скачать').click()
            cy.get('.q-uploader__list :nth-child(1) :nth-child(4)').first().click()
            cy.get('div.q-menu> div').contains('Переименовать').click()
            cy.get('.q-uploader__list :nth-child(1) :nth-child(4)').first().click()
            cy.get('div.q-menu> div').contains('Классификация').click()
            cy.get('.q-card').contains('Сохранить').click()
            cy.get('.q-uploader__list :nth-child(1) :nth-child(4)').first().click()
            cy.get('div.q-menu> div').contains('Подписать').click()
            cy.get('.q-uploader__list :nth-child(1) :nth-child(4)').first().click()
            cy.get('div.q-menu> div').contains('Удалить').click()
            cy.get('.q-dialog__inner .q-card').last().contains('Да').click()
            cy.wait(8000)
            cy.get('.q-uploader__list :nth-child(1) :nth-child(4)').first().click()
            cy.get('div.q-menu> div').contains('Удалить').click()
            cy.get('.q-dialog__inner .q-card').last().contains('Да').click()
            






          // }
       

    })
})