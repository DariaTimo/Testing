describe('Карта', () => {
    it('Создание объекта', () => {
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
        сy.get('.y-start.x-end > :nth-child(3)').click()
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
        cy.get('#createObjectBtn').click()
        cy.wait(4000)
        cy.get('.object-card').find('textarea').first().type('202212')

        //cy.get('.object-card').find('textarea :nth-child(2)')
        cy.get('#saveObjectBtn').click()
        cy.get('.q-dialog .q-card').contains('Да').click()

    });
});