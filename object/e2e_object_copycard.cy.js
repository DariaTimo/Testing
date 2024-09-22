describe('Карта', () => {
    it('Банк', () => {
        cy.visit('/');
       cy.wait(10000)
       cy.get('#fact-list-component').then(($node) => {
        const l = $node.children().length;
        const child = $node.text();
        if(l>0 && child.includes('Информационно-аналитическая поддержка'))
            {
                cy.get('#showTreeListBtn').click()
            }
            if (l > 0 && child.includes('Зарегистрированные участки')) { //проверка есть ли объекты в списке, если есть то скрываем первый объект, иначе добавляем объект Зарегистрированные участки

                cy.get('#fact-list-component').contains('Зарегистрированные участки').click()

            } else {
                cy.get('#settingsFactListBtn').click()

                cy.get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
                cy.get('.q-card__section .q-tree .q-checkbox').last().click()
                .get('.q-dialog .q-gutter-sm :nth-child(1)').first().click()
                .get('#fact-list-component').contains('Зарегистрированные участки').click()
                .wait(4000)

            }
       })
       cy.get('#filterTableBtn').click().get('#filterChangeMenu>:nth-child(1)').click()
       // .wait(4000)
        .get('div.q-menu> div').contains('оператор арх').click()
        
        .get('#filterChangeMenu>:nth-child(2)').click()
        .get('div.q-menu> div').contains('Содержит').click()
        
        .get('#filterChangeMenu>:nth-child(3)').clear()
        .get('#filterChangeMenu>:nth-child(3)').type('timo')
        
        .get('#filterDoneBtn').click()
       



       .get('#copyObjectBtn').click()
       .get('.q-gutter-sm > :nth-child(1) > .q-btn__content').click()
       .get('#saveObjectBtn').click().get('.q-gutter-sm > :nth-child(1) > .q-btn__content').click()







    });
})