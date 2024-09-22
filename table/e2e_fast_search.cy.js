describe('Карта', () => {
    it('Поиск', () => {
        cy.viewport(1920, 1080)
        cy.visit('/');
        cy.wait(2000);

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
        cy.wait(6000);

        // cy.document().then((document) => {

        // if (document.querySelectorAll())
        //{
        //cy.wait(6000);
        //cy.get('#cartObject .q-tabs >:nth-child(1)>:nth-child(2)')



        cy.wait(10000);
        cy.get('.table-bar').within(($lidt) => {
            cy.get('.q-btn').last().click()
        })
       

        // cy.get('.q-page-container .text-caption').then(($els) => {
        //     cy.wait(4000)
        //     const texts = Array.from($els, el => el.innerText)
        //     var m1 = texts.slice(0, 5)

        //          m1.forEach(element => {
        //             alert(element)

        //             // cy.contains(element).click()
        //             // cy.wait(4000)
                    
        //          })
        //  })
        cy.get('.dialog-header .q-toolbar >:nth-child(1)').click()
        cy.get('.dialog-header .q-toolbar >:nth-child(2)').click()
        cy.get('.dialog-header .q-toolbar >:nth-child(2)').click()
        cy.wait(4000)
        cy.get('.dialog-list >:nth-child(1) >:nth-child(1)>:nth-child(1)').click()
        cy.get('.dialog-list >:nth-child(1) >:nth-child(1)>:nth-child(2)').click()
        cy.get('.dialog-list >:nth-child(3) >:nth-child(1)>:nth-child(1)').click()
        cy.get('.dialog-list >:nth-child(3) >:nth-child(1)>:nth-child(2)').click()
        cy.get('.dialog-list >:nth-child(4) >:nth-child(1)>:nth-child(1)').click()
        cy.get('.dialog-list >:nth-child(4) >:nth-child(1)>:nth-child(2)').click()
        cy.get('.q-dialog__inner .q-gutter-sm').contains('ОК').click()
        cy.get('#tablePromtId input').type('17.05.2023').type('{enter}')
        cy.wait(10000);
        cy.get('.table-bar').within(($lidt) => {
            cy.get('.q-btn').last().click()
        })
        cy.get('.dialog-header .q-toolbar >:nth-child(1)').click()
        cy.get('.dialog-header .q-toolbar >:nth-child(2)').click()
        cy.get('.q-dialog__inner .q-gutter-sm').contains('ОК').click()







        // }
    })

    // })
})