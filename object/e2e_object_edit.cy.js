describe('Карта', () => {
    it('Редактирование и удаление объекта ', () => {
        cy.visit('/');
        cy.wait(2000);
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
        cy.get('#toolbarToggleBtn > :nth-child(2) > i').then(($btn) => {
            if ($btn.text() == 'menu') {
              cy.get('#toolbarToggleBtn').click();
            }
          })
        cy.get('#fact-list-component').then(($node) => {
            const l = $node.children().length;
            const child = $node.text();
            if (l > 0 && child != 'Нет данных для отображения') { //проверка есть ли объекты в списке, если есть то скрываем первый объект, иначе добавляем объект Зарегистрированные участки  

                cy.get('#fact-list-component').contains('Зарегистрированные участки').click()
                cy.wait(4000)
            } else {
                cy.get('#settingsFactListBtn').click()
                cy.get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
            }
        });
        cy.wait(4000)
        cy.get('#filterTableBtn').click();
        cy.get('#filterChangeMenu>:nth-child(1)').click();
        cy.get('div.q-menu> div').contains('оператор арх').click();
        cy.get('#filterChangeMenu>:nth-child(2)').click();
        cy.get('div.q-menu> div').contains('Содержит').click();
        cy.get('.q-dialog .q-card >:nth-child(1)> :nth-child(3)>:nth-child(1)').click();
        cy.get('#filterChangeMenu>:nth-child(3)').clear();
        cy.get('#filterChangeMenu>:nth-child(3)').type('test');
        cy.get('#filterDoneBtn').click()
        cy.wait(6000)
        cy.get('.p-datatable-tbody').then(($node) => {
            const l = $node.children().length;
            const child = $node.text();


            if (child == "Данные не найдены") {

                cy.get('#createObjectBtn').click()
                cy.wait(4000)
                cy.get('.object-card').find('textarea').first().type('34345345')
                cy.get('#saveObjectBtn').click()
                cy.get('.q-dialog .q-card').contains('Да').click()
            }



        });
        cy.get('#saveObjectBtn').click()
        cy.get('.object-card').find('textarea').first().type('4444')

        //cy.get('.object-card').find('textarea :nth-child(2)')
        cy.get('#saveObjectBtn').click()
        cy.get('.q-dialog .q-card').contains('Да').click()
         cy.wait(4000)
         cy.get('#deleteObjectBtn').click()
         cy.get('.q-dialog .q-card').contains('Да').click()




    });
});