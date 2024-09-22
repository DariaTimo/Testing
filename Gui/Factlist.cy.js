describe('карта', () => {
    it('фактлист', () =>{
        cy.visit('/').wait(8000)

        cy
        .get("[aria-label='Метамодель']").type('ГИСОГД 2.0').get('div.q-item').click()
        .get("[aria-label='Имя пользователя']").type('test').get("[aria-label='Пароль']").type('test123')
        // .get(".login-card").matchImageSnapshot('login-auto')
        .get('button.q-btn.bg-primary').click()
        .wait(8000)
        //.get('#settingsFactListBtn').click().get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
        cy.get('#settingsFactListBtn').click().get('#compressBtn').click()
        cy.get('.q-card').last().matchImageSnapshot('factlist1')
        cy.get('#inputFactDialog').within(($list)=> { cy.get('.q-checkbox').click()})
        .get('.q-card').last().within(($list) => { cy.get('.q-card__section').last().then(($node) => {
            const l = $node.children().length;
            const child = $node.text();
            //alert(child)
            if (l > 0 && child == 'Нет выбранных объектов')
            {
                cy.contains('Фильтр').type('Зарегистрированные участки').get('.q-checkbox').click().get('#expandBtn').click().wait(6000).matchImageSnapshot('factlist2')
            }
        })
        cy.contains('Зарегистрированные участки').parents('.q-tree__node-header').within(($list) => { cy.get('.q-checkbox').click()})
        cy.contains('Применить').click()
        
    })
        cy.get('#fact-list-component').matchImageSnapshot('Factlist')
        cy.get('.q-page-container').first().matchImageSnapshot('FactListbase')
    })
})