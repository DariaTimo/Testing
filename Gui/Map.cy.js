describe('Карта', () => {
    it('card test', () => {
        cy.visit('/')
       cy.wait(5000)
       

       //cy.screenshot()
        cy
        .get("[aria-label='Метамодель']").type('ГИСОГД 2.0').get('div.q-item').click()
        .get("[aria-label='Имя пользователя']").type('test').get("[aria-label='Пароль']").type('test123')
       // .get(".login-card").matchImageSnapshot('login-auto')
        .get('button.q-btn.bg-primary').click()
        .wait(8000)
       //.get('#settingsFactListBtn').click().get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
       .get('#map').matchImageSnapshot('Map')
       cy.get('#fact-list-component').matchImageSnapshot('Factlist')
       .get('.map-toolbar').first().matchImageSnapshot('toolsCart1')
       .get('.x-end').first().matchImageSnapshot('toolsCart2')
       //.get('.map-toolbar .x-end')
    })
})