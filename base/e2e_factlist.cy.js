
describe('Карта', () => {

    it('Группировка', () => {

        cy.visit('/');
        cy.wait(4000);

        //выбор метамодели
        // cy.get("[aria-label='Метамодель']").type('ГИСОГД 2.0');
        // cy.wait(2000);
        // cy.get('div.q-item').click();


        // //ввод имени
        // cy.get("[aria-label='Имя пользователя']").type('test');

        // //ввод пароля
        // cy.get("[aria-label='Пароль']").type('test123');

        // //кнопка войти
        // cy.get('button.q-btn.bg-primary').click();
        // cy.wait(4000);
        //cy.get('.y-start.x-end > :nth-child(3)').click()
        //cy.get('.y-start.x-end > :nth-child(3)').click()
        // cy.get('#toolbarToggleBtn > :nth-child(2) > i').then(($btn) => {
        //     if ($btn.text() == 'menu') {
        //       cy.get('#toolbarToggleBtn').click();
        //     }
        //   })
        cy.get('#fact-list-component').then(($node) => {
            const l = $node.children().length;
            const child = $node.text();
            //alert(child)
            if (l > 0 && child.includes('Новые участки')) { //проверка есть ли объекты в списке, если есть то скрываем первый объект, иначе добавляем объект Зарегистрированные участки

                cy.get('#fact-list-component').contains('Новые участки').click()

            } else {
                cy.get('#settingsFactListBtn').click()

                cy.get('#inputFactDialog>label [aria-label="Фильтр"]').type('Новые участки')
                cy.get('.q-card__section .q-tree .q-checkbox').last().click()
                .get('.q-dialog .q-gutter-sm :nth-child(1)').first().click()
                .get('#fact-list-component').contains('Новые участки').click()
                .wait(4000)

            }
            if(l>0 && child.includes('Информационно-аналитическая поддержка'))
            {

            }
            else
            {
                cy.get('#showTreeListBtn').click()
            }
            //cy.get('#main-table-buttons-bar > :nth-child(4)').click()
            cy.get('#fact-list-component').contains('Новые участки').parents('.q-tree__node--parent').first()
            .within(($list) => {cy.get('.q-icon').first().click()})
             cy.get('#fact-list-component').contains('Новые участки').parents('.q-tree__node--parent').first()
             .within(($list) =>{
             cy.wait(3000).contains('Группировки').parents('.q-tree__node').first().within(($list) => {cy.get('#factlistMenuBtn').first().click().wait(4000)})
             })
             .get('.q-menu').contains('Добавить').click().get('.q-card').last()
             .within(($list) => {cy.contains('Поля').click().wait(4000) })
             .get('.q-menu').contains('оператор арх').click().get('.q-card').last().contains('Выбрать').click()
             cy.get('#fact-list-component').contains('Новые участки').parents('.q-tree__node--parent').first()
             .within(($list) =>{
                 cy.contains('Группировки').parents('.q-tree__node').first().within(($list) => {cy.get('.q-icon').first().click().wait(4000)})
             })
             .within(($list) => { cy.contains('оператор арх').parents('.q-tree__node').first().within(($list) => {cy.get('.q-icon').first().click().wait(4000)}).children().last().within(($list)=>{cy.get($list).children().children().first().click()}) })
             .get('.p-datatable-wrapper').scrollTo('right')

             cy.get('#fact-list-component').contains('Новые участки').parents('.q-tree__node--parent').first()
             .within(($list) =>{
                 cy.contains('Группировки').parents('.q-tree__node').first().within(($list) => { cy.contains('оператор арх').parents('.q-tree__node').first().within(($list)=> {cy.get('#factlistMenuBtn').first().click()})})

             })
             .get('.q-item').contains('Удалить').click()

             //если надо удалить все
            // cy.get('#fact-list-component').contains('Новые участки').parents('.q-tree__node--parent').first()
            //  .within(($list) =>{
            //  cy.contains('Группировки').parents('.q-tree__node').first().within(($list) => {cy.get('#factlistMenuBtn').first().click()})

            //  })
            // cy.get('.q-menu').contains('Удалить').click()

        });





    })
    it('Фильтр', () => {
        cy.visit('/');
        //cy.wait(4000);

        //выбор метамодели
        // cy.get("[aria-label='Метамодель']").type('ГИСОГД 2.0')

        // .get('div.q-item').click()


        // //ввод имени
        // .get("[aria-label='Имя пользователя']").type('test')

        // //ввод пароля
        // .get("[aria-label='Пароль']").type('test123')

        // //кнопка войти
        // .get('button.q-btn.bg-primary').click()
        cy.wait(10000);
        //cy.get('.y-start.x-end > :nth-child(3)').click()
        cy.get('#toolbarToggleBtn > :nth-child(2) > i').then(($btn) => {
            if ($btn.text() == 'menu') {
              cy.get('#toolbarToggleBtn').click();
            }
          })
        cy.get('#fact-list-component').then(($node) => {
            const l = $node.children().length;
            const child = $node.text();
            //alert(child)
            if (l > 0 && child.includes('Новые участки')) { //проверка есть ли объекты в списке, если есть то скрываем первый объект, иначе добавляем объект Зарегистрированные участки

                cy.get('#fact-list-component').contains('Новые участки').click()
                cy.wait(4000)
            } else {
                cy.get('#settingsFactListBtn').click()
                cy.wait(4000)
                cy.get('#inputFactDialog>label [aria-label="Фильтр"]').type('Новые участки')
                cy.get('.q-card__section .q-tree .q-checkbox').last().click()
                .get('.q-dialog .q-gutter-sm :nth-child(1)').first().click()
                .get('#fact-list-component').contains('Новые участки').click()
                .wait(10000)

            }
            if(l>0 && child.includes('Информационно-аналитическая поддержка'))
            {

            }
            else
            {
                cy.get('#showTreeListBtn').click()
            }

            cy.get('#filterTableBtn').click().get('#filterChangeMenu>:nth-child(1)').click()
           // .wait(4000)
            .get('div.q-menu> div').contains('оператор арх').click()
            .wait(4000)

            .get('#filterChangeMenu>:nth-child(2)').click()
            .get('div.q-menu> div').contains('Содержит').click()
            .wait(4000)
            .get('#filterChangeMenu>:nth-child(3)').clear()
            .get('#filterChangeMenu>:nth-child(3)').type('test')
            .wait(4000)
            .get('#saveFilterBtn').click()
            .get('.q-card').last().find('label').type('Тестовый 1')
            .get('.q-card').last().contains('ОК').click()
            .wait(4000)
            .get('#filterChangeMenu>:nth-child(1)').click()
            .get('div.q-menu> div').contains('п/п').click()
            .wait(4000)

            .get('#filterChangeMenu>:nth-child(2)').click()


            .get('div.q-menu> div').contains('Содержит').click()
         .wait(4000)

            .get('#filterChangeMenu>:nth-child(3)').clear()
            .get('#filterChangeMenu>:nth-child(3)').type('2')
            .wait(4000)

            .get('#saveFilterBtn').click()
            .get('.q-card').last().find('label').type('Тестовый 2')
            .wait(4000)
            .get('.q-card').last().contains('ОК').click()
            .get('#filterDoneBtn').click()
            cy.wait(6000)
            cy.get('#fact-list-component').contains('Новые участки').parents('.q-tree__node--parent').first()
            .within(($list) => {cy.get('.q-icon').first().click().wait(4000)})
             cy.get('#fact-list-component').contains('Новые участки').parents('.q-tree__node--parent').first()
             .within(($list) =>{
                cy.contains('Фильтры').parents('.q-tree__node').first().within(($list) => {cy.get('.q-icon').first().click()})
                })
                cy.get('#filterTableBtn').click().get('#loadFilterBtn').click().get('.q-menu').last().contains('Тестовый 1').click().get('#filterDoneBtn').click()
                cy.get('#fact-list-component').contains('Новые участки').parents('.q-tree__node--parent').first()
                .within(($list) =>{
                cy.contains('Фильтр').parents('.q-tree__node').first().within(($list) => { cy.contains('Тестовый 1').parents('.q-tree__node').first().within(($list) => {cy.get('#factlistMenuBtn').click() })})
                })

                .get('.q-menu').contains('Удалить').click()
                cy.get('#filterTableBtn').click().get('#loadFilterBtn').click().get('.q-menu').last().contains('Тестовый 2').click().get('#filterDoneBtn').click()
                cy.get('#fact-list-component').contains('Новые участки').parents('.q-tree__node--parent').first()
                .within(($list) =>{
                cy.contains('Фильтр').parents('.q-tree__node--parent').first().within(($list) => { cy.get('#factlistMenuBtn').first().click()})

                })
                .get('.q-menu').contains('Удалить').click()

        })

    })

})
