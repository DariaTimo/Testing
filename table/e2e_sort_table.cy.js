describe('Карта', () => {
    it('Сортировка полей в таблице', () => {
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
        cy.get('#fact-list-component>:nth-child(1)>:nth-child(1)').click()
        cy.wait(6000);
        
        cy.get('.p-datatable-thead div').then(($els) => {
            //  const l = $node.children().length;
            //  const child = $node.text();
             const texts = Array.from($els, el=>el.innerText)

             
            texts.forEach(element => {
                cy.contains(element).click() 
                cy.wait(6000)
                cy.contains(element).click()
                cy.wait(6000)
            })


        })


    })
})