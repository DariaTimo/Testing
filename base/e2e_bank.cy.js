describe('Карта', () => {
    it('Банк', () => {
        cy.visit('/');
       // cy.wait(2000);
        //выбор метамодели
        
        cy.wait(10000);
        
        cy.get('#bankButton').click()
       // cy.get('.q-dialog .q-card> :nth-child(2)').scrollTo('bottom')







    });
});
