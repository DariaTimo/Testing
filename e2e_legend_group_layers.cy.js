describe('Карта', () => {
    it('Банк', () => {
        
        cy.visit('/');
       // cy.wait(2000);
        //выбор метамодели
        
        cy.wait(10000);
        
        cy.get('#legendDialog').click()
       // cy.get('.q-dialog .q-card> :nth-child(2)').scrollTo('bottom')
       const dataTransfer = new DataTransfer();
       cy.get('.q-list--padding').then(($node) => {
        const l = $node.children().length;
        const child = $node.text();
        //alert(child)
        if(l>0 && child.includes('Информационно-аналитическая поддержка'))
            {

            }
            else
            {
                cy.get('#typeChange').click()
            }
            cy.get('.q-list--padding').contains('Тестовая 1').trigger("dragstart", { dataTransfer }).get('.q-list--padding').contains('поддержка').trigger("drop", { dataTransfer })
            cy.get('.q-list--padding').contains('Тестовая 1').parents('.q-tree > :nth-child(1) ').within(($list) => {
            cy.get($list).contains('Красные').trigger("dragstart", { dataTransfer }).get($list).contains('Вид').trigger("drop", { dataTransfer })
                
                // cy.get($list).contains('Красные').parents('.q-tree__node-header').within(($list) => {
                //     cy.get('img').trigger("dragstart", { dataTransfer })
                // }).get('.q-img > .q-img__container > .q-img__image').last().trigger("drop", { dataTransfer })
                // cy.get($list).contains('Вид').parents('.q-tree__node-header ').within(($list) => {
                //     cy.get('img').trigger("drop", { dataTransfer })
                // })
   
            })
            cy.get('#settingsTree').click().get(':nth-child(2) > .q-item__section').click().wait(4000)
            cy.get('.q-list--padding').contains('3D Здания').parents('.q-tree__node-header').trigger("dragstart", { dataTransfer }).wait(2000).get('.q-list--padding').contains('3D Сооружения').parents('.q-tree__node-header').trigger("drop", { dataTransfer })
             //.trigger("dragstart", { dataTransfer }).get('.q-list--padding').contains('Вид элемента планировочной структуры 433п').trigger("drop", { dataTransfer })
 
           // cy.get('.q-gutter-sm').within(($list) => {cy.contains('ОК').click()})

       
    })
    







    });
});
