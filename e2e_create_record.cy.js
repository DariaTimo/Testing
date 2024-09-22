describe('Карта', () => {
    it('Создание записи в карточке', () => {
        cy.visit('/');
       // cy.wait(2000);
        
        
        cy.wait(10000);
        cy.get('#fact-list-component').then(($node) => {
            const l = $node.children().length;
            const child = $node.text();
            //alert(child)
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
        cy.get('#filterTableBtn').click();
        cy.get('#filterChangeMenu>:nth-child(1)').click();
        cy.get('div.q-menu> div').contains('оператор арх').click();
        cy.get('#filterChangeMenu>:nth-child(2)').click();
        cy.get('div.q-menu> div').contains('Содержит').click();
        cy.wait(6000)
        cy.get('#filterChangeMenu>:nth-child(3)').clear();
        cy.get('#filterChangeMenu>:nth-child(3)').type('timo');
        cy.get('#filterDoneBtn').click().wait(5000)

        //Создание записи
        cy.get('#createObjectBtn').click().wait(2000).get('textarea').first().type('12345').get(':nth-child(3) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .text-right > :nth-child(4)')
        .click().get('.q-list').within(($list) => { 
            cy.get($list).contains('Полный адрес').parents('.q-item-type').within(($list)=> {
                cy.get('textarea').type('Тест, Новосибирск, Котовского, 18/2')
            })
        })
        cy.get('.float-right > :nth-child(1)').click().wait(2000).get('.q-list').within(($list) => { 
            
                cy.contains('Тест')
           
        })
        
       
       







    });
});
