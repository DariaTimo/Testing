describe('Карта', () => {
    it('card test', () => {
        cy.visit('/')
       cy.wait(5000)
       

       //cy.screenshot()
        cy.get(".login-card").matchImageSnapshot('login')
        .get("[aria-label='Метамодель']").type('ГИСОГД 2.0').get('div.q-item').click()
        .get(".login-card").matchImageSnapshot('login-auto')
        .get("[aria-label='Имя пользователя']").type('test').get("[aria-label='Пароль']").type('test123')
        .get('.login-card').matchImageSnapshot('login-auto')
    })
})