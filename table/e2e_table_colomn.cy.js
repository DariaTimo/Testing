describe('Карта', () => {
    it('card test', () => {
        cy.visit('/')

       cy.wait(5000)

       cy
        .get("[aria-label='Метамодель']").type('ГИСОГД 2.0').get('div.q-item').click()
        .get("[aria-label='Имя пользователя']").type('test').get("[aria-label='Пароль']").type('test123')
     
        .get('button.q-btn.bg-primary').click()
        .wait(8000)
        const dataTransfer = new DataTransfer();
        cy.get('#fact-list-component').then(($node) => {
            const l = $node.children().length;
            const child = $node.text();
            if (l > 0 && child.includes('Новые участки')) { //проверка есть ли объекты в списке, если есть то скрываем первый объект, иначе добавляем объект Зарегистрированные участки

                cy.get('#fact-list-component').contains('Новые участки').click()

            } else {
                cy.get('#settingsFactListBtn').click()

                cy.get('#inputFactDialog>label [aria-label="Фильтр"]').type('Новые участки')
                cy.get('.q-card__section .q-tree .q-checkbox').last().click()
                .get('.q-dialog .q-gutter-sm :nth-child(1)').first().click()
                .get('#fact-list-component').contains('Новые участки').click()
                .wait(10000)

            }
        })
        
        cy.get('.table-bar').within(($lidt) => {
            cy.get('.q-btn').last().click()
        })
        cy.get('.q-card').last().within(($list) => {
            cy.get('#column-setting-item-0').trigger("dragstart", { dataTransfer }).get('#column-setting-item-3').trigger("drop", { dataTransfer })
            cy.get('.q-gutter-sm').within(($list) => {cy.contains('ОК').click()})
            
        })
        cy.get('.p-datatable-thead div').then(($els) => {
            
            
             const texts = Array.from($els, el=>el.innerText)
            
             const firEl = texts.indexOf('№ п/п')
             
           cy.get('.p-datatable-thead div').eq(3).within(($lists) => {
            cy.contains('№')
           })
    
    
        })
        cy.visit('/')

       cy.wait(5000)
       cy.get('.p-datatable-thead div').then(($els) => {
        
        
         const texts = Array.from($els, el=>el.innerText)
        
         const firEl = texts.indexOf('№ п/п')
         
       cy.get('.p-datatable-thead div').eq(3).within(($lists) => {
        cy.contains('№')
       })
       cy.get('.table-bar').within(($lidt) => {
        cy.get('.q-btn').last().click()
    })
    cy.get('.q-card').last().within(($list) => {
        cy.get('#column-setting-item-3').trigger("dragstart", { dataTransfer }).get('#column-setting-item-0').trigger("drop", { dataTransfer })
        cy.get('.q-gutter-sm').within(($list) => {cy.contains('ОК').click()})
        
    })


    })
        
    })
})