describe('Карта', () => {
    it('Создание объекта', () => {
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
        cy.get('.y-start.x-end > :nth-child(3)').click()
        cy.get('#fact-list-component').then(($node) => {
            const l = $node.children().length;
            const child = $node.text();
            if (l > 0 && child.includes('Зарегистрированные участки')) { //проверка есть ли объекты в списке, если есть то скрываем первый объект, иначе добавляем объект Зарегистрированные участки

                cy.get('#fact-list-component').contains('Зарегистрированные участки').click()

            } else {
                cy.get('#settingsFactListBtn').click()

                cy.get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
                cy.get('.q-card__section .q-tree .q-checkbox').last().click()
                .get('.q-dialog .q-gutter-sm :nth-child(1)').first().click()
                .get('#fact-list-component').contains('Зарегистрированные участки').click()
                .wait(4000)

            }
        });
        cy.wait(4000)
        cy.get('#createObjectBtn').click()
        cy.wait(4000)
        cy.get('.object-card').find('textarea').first().type('202212')

        //cy.get('.object-card').find('textarea :nth-child(2)')
        cy.get('#saveObjectBtn').click()
        cy.get('.q-dialog .q-card').contains('Да').click()

    });
    it('Редактирование и удаление объекта ', () => {
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
        cy.get('#fact-list-component').then(($node) => {
            const l = $node.children().length;
            const child = $node.text();
            if (l > 0 && child != 'Нет данных для отображения') { //проверка есть ли объекты в списке, если есть то скрываем первый объект, иначе добавляем объект Зарегистрированные участки  

                cy.get('#fact-list-component').contains('Зарегистрированные участки').click()
                cy.wait(4000)
            } else {
                cy.get('#settingsFactListBtn').click()
                cy.get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
            }
        });
        cy.wait(4000)
        cy.get('#filterTableBtn').click();
        cy.get('#filterChangeMenu>:nth-child(1)').click();
        cy.get('div.q-menu> div').contains('оператор арх').click();
        cy.get('#filterChangeMenu>:nth-child(2)').click();
        cy.get('div.q-menu> div').contains('Содержит').click();
        cy.get('.q-dialog .q-card >:nth-child(1)> :nth-child(3)>:nth-child(1)').click();
        cy.get('#filterChangeMenu>:nth-child(3)').clear();
        cy.get('#filterChangeMenu>:nth-child(3)').type('test');
        cy.get('#filterDoneBtn').click()
        cy.wait(6000)
        cy.get('.p-datatable-tbody').then(($node) => {
            const l = $node.children().length;
            const child = $node.text();


            if (child == "Данные не найдены") {

                cy.get('#createObjectBtn').click()
                cy.wait(4000)
                cy.get('.object-card').find('textarea').first().type('34345345')
                cy.get('#saveObjectBtn').click()
                cy.get('.q-dialog .q-card').contains('Да').click()
            }



        });
        cy.get('#saveObjectBtn').click()
        cy.get('.object-card').find('textarea').first().type('4444')

        //cy.get('.object-card').find('textarea :nth-child(2)')
        cy.get('#saveObjectBtn').click()
        cy.get('.q-dialog .q-card').contains('Да').click()
         cy.wait(4000)
         cy.get('#deleteObjectBtn').click()
         cy.get('.q-dialog .q-card').contains('Да').click()




    });
    it('Связь', () => {
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

        cy.get('#fact-list-component').then(($node) => {
            const l = $node.children().length;
            const child = $node.text();
            if (l > 0 && child != 'Нет данных для отображения') { //проверка есть ли объекты в списке, если есть то скрываем первый объект, иначе добавляем объект Зарегистрированные участки  

                cy.get('#fact-list-component').contains('Зарегистрированные участки').click()
                cy.wait(4000)
            } else {
                cy.get('#settingsFactListBtn').click()
                cy.get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
            }
        });
        cy.wait(10000)
       // cy.get('.p-datatable-thead div').contains('Объект').click()
       // cy.wait(10000)
        //cy.get('.p-datatable-tbody :nth-child(1) :nth-child(1)').first().click()
        cy.get('#createObjectBtn').click()
        cy.wait(4000)
        cy.get('.object-card').find('textarea').first().type('444444')

        //cy.get('.object-card').find('textarea :nth-child(2)')
        cy.get('#saveObjectBtn').click()
        cy.get('.q-dialog .q-card').contains('Да').click()
        cy.wait(4000)
        cy.get('#saveObjectBtn').click()
        cy.get('canvas').click(100, 100)
        cy.get('canvas').click(150, 110)
        cy.get('canvas').click(200, 150)
        cy.get('canvas').click(190, 160)
        cy.get('canvas').dblclick(100,120)
        cy.get('#lineBuiltBtn').click()
        cy.get('canvas').click(200, 100)
        cy.get('canvas').click(250, 110)
        cy.get('canvas').click(200, 150)
        cy.get('canvas').dblclick(200, 220)
        cy.get('#bindingObjectBtn').click()
        cy.get('canvas').click(250, 110)
        cy.get('#addPointLineBtn').click()
        cy.get('canvas').dblclick(320, 250)
        cy.get('#bindingObjectBtn').click()
        cy.get('#pointBuiltBtn').click()
        cy.get('canvas').dblclick(220, 150)
        cy.get('#saveGraphObjectBtn').click()
        cy.get('.q-dialog .q-gutter-sm :nth-child(1)').first().click()
        cy.wait(4000)
        cy.get('#locationObjectsBtn').click()
        cy.wait(4000)
        cy.get('#saveObjectBtn').click()
        cy.wait(4000)
        cy.get('#deleteObjectBtn').click()
        cy.get('.q-dialog .q-card').contains('Да').click()
        

        



    })
    it('Показ выделенных объектов на карте', () => {
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

        cy.get('#fact-list-component').then(($node) => {
            const l = $node.children().length;
            const child = $node.text();
            if (l > 0 && child != 'Нет данных для отображения') { //проверка есть ли объекты в списке, если есть то скрываем первый объект, иначе добавляем объект Зарегистрированные участки  

                cy.get('#fact-list-component').contains('Зарегистрированные участки').click()
                cy.wait(4000)
            } else {
                cy.get('#settingsFactListBtn').click()
                cy.get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
            }
        });
        cy.wait(10000)
        cy.get('.p-datatable-thead div').contains('Объект')
        
        cy.get('.p-datatable-tbody> :nth-child(1) >:nth-child(1)').click().get('.p-datatable-tbody> :nth-child(5) >:nth-child(1)').click({shiftKey:true})
        cy.get('#selectedEntriesBtn').click()




    })
    it('Координаты объектов', () => {

        cy.visit('/');
        cy.wait(4000);

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
        cy.wait(10000);

        cy.document().then((doc) => {
            cy.wait(4000);
            cy.get('#toolbarToggleBtn > :nth-child(2) > i').then(($btn) => {
                if ($btn.text() == 'menu') {
                  cy.get('#toolbarToggleBtn').click();
                }
              })
            cy.get('#fact-list-component').then(($node) => {
                const l = $node.children().length;
                const child = $node.text();
                if (l > 0 && child != 'Нет данных для отображения') { //проверка есть ли объекты в списке, если есть то скрываем первый объект, иначе добавляем объект Зарегистрированные участки

                    cy.get('#fact-list-component').contains('Зарегистрированные участки').click()
                    cy.wait(4000)
                } else {
                    cy.get('#settingsFactListBtn').click()
                    cy.wait(4000)
                    cy.get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
                    cy.get('.q-card__section .q-tree :nth-child(3)').first().click()
                    cy.get('.q-dialog .q-gutter-sm :nth-child(1)').first().click()
                    cy.get('#fact-list-component').contains('Зарегистрированные участки').click()
                    cy.wait(4000)
                }
            });
            cy.get('#createObjectBtn').click()

            cy.get('.object-card').find('textarea').first().type('202212')
            cy.get('canvas').click(100, 100)
            cy.get('canvas').click(150, 110)
            cy.get('canvas').click(200, 150)
            cy.get('canvas').click(190, 160)
            cy.get('canvas').dblclick(100,120)
            cy.wait(4000)
            cy.get('#saveObjectBtn').click()
            cy.get('.q-dialog .q-card').contains('Да').click()
            cy.wait(4000)

            //координаты
            cy.get('#coordObjectsBtn').click()

            cy.wait(4000)
            cy.get('#grapPrimitiesTable').get('.q-virtual-scroll__content').first().click()
            .get('#coordinatesPointTable .q-virtual-scroll__content .q-tr .q-td :nth-child(1)').first().clear().type('7381421').get('#grapPrimitiesTable').click()
            .get("#coordinatesPointTable .q-virtual-scroll__content .q-tr :nth-child(6)").first().should('not.have.text', '3877.29')
            .get('#mapToolsBtn').click().get('#saveCoordinateBtn').click()
            .get('#importExportFab').click().get('#exportCoordinateBtn').click()
            cy.readFile('cypress/downloads/download.zip')

            cy.get('#deleteGrapBtn').click().get('.q-card').last().contains('Да').click()
            cy.get('#coordObjectsBtn').click().get('#importExportFab').click().get('#importCoordinateBtn').click().get('#importCoordinateDialog').find('input').first().selectFile(['S:/Common/Тимошенко Дарья/Тестирование/object_coords_13826854.mid', 'S:/Common/Тимошенко Дарья/Тестирование/object_coords_13826854.mif'])
            .get('#importCoordinateDialog').find('label').last().click().get('.q-menu').contains('Проекция Меркатора').click().get('#importCoordinateDialog').contains('Выбрать').click()
            .get('#grapPrimitiesTable').get('.q-virtual-scroll__content').first().should('be.visible').get('#coordinateSystemField').click().get('.q-menu').contains('WGS84').click().get('.q-card').last().contains('Да').click()

            cy.get('#filterTableBtn').click()
            .get('#filterChangeMenu>:nth-child(3)').clear()
            .get('#filterChangeMenu>:nth-child(3)').type('202212')
            .get('#filterDoneBtn').click().wait(1000)
            .get('#deleteTableBtn').click()
            .get('.q-menu').contains('все').click()
            .get('.q-dialog .q-card').contains('Да').click()






        })


        })
});