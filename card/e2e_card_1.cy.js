describe('Карта', () => {
    it('card test', () => {
        cy.visit('/');
        cy.wait(3000);
    
        //выбор метамодели
        cy.get("[aria-label='Метамодель']").type('ГИСОГД 2.0');
        cy.wait(2000);
        cy.get('div.q-item').click();

        //ввод имени
        cy.get("[aria-label='Имя пользователя']").type('test');

        //ввод пароля
        cy.get("[aria-label='Пароль']").type('test123');

        //кнопка войти
        cy.get('button.q-btn.bg-primary').click();
        cy.wait(4000);
        cy.get('#toolbarToggleBtn').click()
        cy.get('#fact-list-component').then(($node) => {
            const l = $node.children().length; 
            const child = $node.text();

            
            if (l > 0 && child != 'Нет данных для отображения') { //проверка есть ли объекты в списке, если есть то скрываем первый объект, иначе добавляем объект Зарегистрированные участки  
                
                //cy.get(':nth-child(1) > .q-tree__node-header > .q-tree__node-header-content > .q-item__section--main > div').click();
                cy.wait(2000);
                // cy.get('#factlistMenuBtn').click();
                // cy.get('.q-item > .q-item__section--side').click();
                cy.get('#toolbarToggleBtn > :nth-child(2) > i').then(($btn) => {
                    if ($btn.text() == 'menu') {
                      cy.get('#toolbarToggleBtn').click();
                    }
                  })
                cy.get('#settingsFactListBtn').click();
                cy.get('#compressBtn').click();
                cy.wait(2000);
                cy.get('#expandBtn').click();
                cy.wait(2000);
            } else {
                cy.get('#settingsFactListBtn').click();
                cy.get('#compressBtn').click();
                cy.wait(2000);
                cy.get('#expandBtn').click();
                cy.wait(2000);
                cy.get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки');
                
                cy.get(
                    '#qTreeCardSection .q-tree__node-collapsible .q-tree__node-collapsible .q-checkbox '
                ).click(); 

                cy.get('.q-card__actions>.q-gutter-sm> :nth-child(1)').click();
                cy.get(':nth-child(1) > .q-tree__node-header > .q-tree__node-header-content > .q-item__section--main > div').click();
                cy.wait(4000);
                cy.get('#factlistMenuBtn').click();
                cy.get('.q-item > .q-item__section--side').click();
            }

        });

        
    });
});
