describe('Карта', () => {
    it('Легенда', () => {
        cy.visit('')
       cy.wait(5000)
       cy.viewport(1280, 720)

       //cy.screenshot()
        cy
        .get("[aria-label='Метамодель']").type('ГИСОГД 2.0').get('div.q-item').click()
        .get("[aria-label='Имя пользователя']").type('test').get("[aria-label='Пароль']").type('test123')
       // .get(".login-card").matchImageSnapshot('login-auto')
        .get('button.q-btn.bg-primary').click()
        .wait(8000)
       //.get('#settingsFactListBtn').click().get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
      
       cy.get('#toolbarToggleBtn > :nth-child(2) > i').then(($btn) => {
        if ($btn.text() == 'menu') {
          cy.get('#toolbarToggleBtn').click();
        }
      });
       // alert(i)
       
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
                .wait(4000)

            }
        


            
        cy.get('#legendDialog').click()
        .get('.header').matchImageSnapshot('Легенда (шапка)')




    
       })
       //.get('.map-toolbar .x-end')
    })
    it('Настройка колонок', () => {
        cy.visit('')
       cy.wait(5000)
       cy.viewport(1280, 720)

       //cy.screenshot()
        cy
        .get("[aria-label='Метамодель']").type('ГИСОГД 2.0').get('div.q-item').click()
        .get("[aria-label='Имя пользователя']").type('test').get("[aria-label='Пароль']").type('test123')
       // .get(".login-card").matchImageSnapshot('login-auto')
        .get('button.q-btn.bg-primary').click()
        .wait(8000)
       //.get('#settingsFactListBtn').click().get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
       cy.document().then((doc) => {
        const i = doc.querySelectorAll('#settingsFactListBtn').length
        
       // alert(i)
        if(i==0)
        {
            cy.get('#toolbarToggleBtn').click()
        }
        else{
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
                .wait(4000)

            }
        })
        }
        

    
       })
        cy.get('.table-bar').within(($lidt) => {
            cy.get('.q-btn').last().click()
        })
        cy.get('.q-card').last().get('.header').matchImageSnapshot('Настройка колонок (шапка)')
       //.get('.map-toolbar .x-end')
    })
    
    it('Поиск и замена', () => {
        cy.visit('')
       cy.wait(5000)
       cy.viewport(1280, 720)

       //cy.screenshot()
        cy
        .get("[aria-label='Метамодель']").type('ГИСОГД 2.0').get('div.q-item').click()
        .get("[aria-label='Имя пользователя']").type('test').get("[aria-label='Пароль']").type('test123')
       // .get(".login-card").matchImageSnapshot('login-auto')
        .get('button.q-btn.bg-primary').click()
        .wait(8000)
       //.get('#settingsFactListBtn').click().get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
       cy.document().then((doc) => {
        const i = doc.querySelectorAll('#settingsFactListBtn').length
        
       // alert(i)
        if(i==0)
        {
            cy.get('#toolbarToggleBtn').click()
        }
        else{
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
                .wait(4000)

            }
        })
        }
        

    
       })
        cy.get('#main-table-buttons-bar > :nth-child(2)').click()
        cy.get('.q-card').last().get('.header').matchImageSnapshot('Поиск и замена (шапка)')
       //.get('.map-toolbar .x-end')
    })
    it('Раскраска', () => {
        cy.visit('')
       cy.wait(5000)
       cy.viewport(1280, 720)

       //cy.screenshot()
        cy
        .get("[aria-label='Метамодель']").type('ГИСОГД 2.0').get('div.q-item').click()
        .get("[aria-label='Имя пользователя']").type('test').get("[aria-label='Пароль']").type('test123')
       // .get(".login-card").matchImageSnapshot('login-auto')
        .get('button.q-btn.bg-primary').click()
        .wait(8000)
       //.get('#settingsFactListBtn').click().get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
       cy.document().then((doc) => {
        const i = doc.querySelectorAll('#settingsFactListBtn').length
        
       // alert(i)
        if(i==0)
        {
            cy.get('#toolbarToggleBtn').click()
        }
        else{
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
                .wait(4000)

            }
        })
        }
        

    
       })
        cy.get('#main-table-buttons-bar > :nth-child(5)').click()
        cy.get('.q-card').last().get('.header').matchImageSnapshot('Раскраска (шапка)')
       //.get('.map-toolbar .x-end')
    })
    it('Процедуры', () => {
        cy.visit('')
       cy.wait(5000)
       cy.viewport(1280, 720)

       //cy.screenshot()
        cy
        .get("[aria-label='Метамодель']").type('ГИСОГД 2.0').get('div.q-item').click()
        .get("[aria-label='Имя пользователя']").type('test').get("[aria-label='Пароль']").type('test123')
       // .get(".login-card").matchImageSnapshot('login-auto')
        .get('button.q-btn.bg-primary').click()
        .wait(8000)
       //.get('#settingsFactListBtn').click().get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
       cy.document().then((doc) => {
        const i = doc.querySelectorAll('#settingsFactListBtn').length
        
       // alert(i)
        if(i==0)
        {
            cy.get('#toolbarToggleBtn').click()
        }
        else{
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
                .wait(4000)

            }
        })
        }
        

    
       })
        cy.get('#proceduresTableBtn').click()
        cy.get('.q-card').last().get('.header').matchImageSnapshot('Процедуры (шапка)')
       //.get('.map-toolbar .x-end')
    })
    it('Избранное', () => {
        cy.visit('')
       cy.wait(5000)
       cy.viewport(1280, 720)

       //cy.screenshot()
        cy
        .get("[aria-label='Метамодель']").type('ГИСОГД 2.0').get('div.q-item').click()
        .get("[aria-label='Имя пользователя']").type('test').get("[aria-label='Пароль']").type('test123')
       // .get(".login-card").matchImageSnapshot('login-auto')
        .get('button.q-btn.bg-primary').click()
        .wait(8000)
       //.get('#settingsFactListBtn').click().get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
       cy.document().then((doc) => {
        const i = doc.querySelectorAll('#settingsFactListBtn').length
        
       // alert(i)
        if(i==0)
        {
            cy.get('#toolbarToggleBtn').click()
        }
        else{
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
                .wait(4000)

            }
        })
        }
        

    
       })
        cy.get('#favouritesBtn').click()
        cy.get('.q-card').last().get('.header').matchImageSnapshot('Избранное (шапка)')
       //.get('.map-toolbar .x-end')
    })
    it('Файлы', () => {
        cy.visit('')
       cy.wait(5000)
       cy.viewport(1280, 720)

       //cy.screenshot()
        cy
        .get("[aria-label='Метамодель']").type('ГИСОГД 2.0').get('div.q-item').click()
        .get("[aria-label='Имя пользователя']").type('test').get("[aria-label='Пароль']").type('test123')
       // .get(".login-card").matchImageSnapshot('login-auto')
        .get('button.q-btn.bg-primary').click()
        .wait(8000)
       //.get('#settingsFactListBtn').click().get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
       cy.document().then((doc) => {
        const i = doc.querySelectorAll('#settingsFactListBtn').length
        
       // alert(i)
        if(i==0)
        {
            cy.get('#toolbarToggleBtn').click()
        }
        else{
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
                .wait(4000)

            }
        })
        }
        

    
       })
        cy.get('.q-my-xs.float-right').click()
        cy.get('.q-card').last().get('.header').matchImageSnapshot('Файлы (шапка)')
       //.get('.map-toolbar .x-end')
    })
    it('Настройка фильтра', () => {
        cy.visit('')
       cy.wait(5000)
       cy.viewport(1280, 720)

       //cy.screenshot()
        cy
        .get("[aria-label='Метамодель']").type('ГИСОГД 2.0').get('div.q-item').click()
        .get("[aria-label='Имя пользователя']").type('test').get("[aria-label='Пароль']").type('test123')
       // .get(".login-card").matchImageSnapshot('login-auto')
        .get('button.q-btn.bg-primary').click()
        .wait(8000)
       //.get('#settingsFactListBtn').click().get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
       
       
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
                .wait(4000)

            }
        })
        
        

    
       
        cy.get('#filterTableBtn').click()
        cy.get('.q-card').last().get('.header').matchImageSnapshot('Настройка фильтра (шапка)')
       //.get('.map-toolbar .x-end')
    })
    
    it('Фильтра', () => {
        cy.visit('')
       cy.wait(5000)
       cy.viewport(1280, 720)

       //cy.screenshot()
        cy
        .get("[aria-label='Метамодель']").type('ГИСОГД 2.0').get('div.q-item').click()
        .get("[aria-label='Имя пользователя']").type('test').get("[aria-label='Пароль']").type('test123')
       // .get(".login-card").matchImageSnapshot('login-auto')
        .get('button.q-btn.bg-primary').click()
        .wait(8000)
       //.get('#settingsFactListBtn').click().get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
       cy.document().then((doc) => {
        const i = doc.querySelectorAll('#settingsFactListBtn').length
        
       // alert(i)
        if(i==0)
        {
            cy.get('#toolbarToggleBtn').click()
        }
        else{
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
                .wait(4000)

            }
        })
        }
        

    
       })
        cy.get('.map-toolbars > :nth-child(2) > .q-btn').click()
        cy.get('.q-card').last().get('.header').matchImageSnapshot('Фильтр (шапка)')
       //.get('.map-toolbar .x-end')
    })
})