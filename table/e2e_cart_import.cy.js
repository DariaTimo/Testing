describe('Карта', () => {
    it('import MID MIF', () => {
        cy.visit('');
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
        //cy.get('.y-start.x-end > :nth-child(3)').click()
        cy.get('#toolbarToggleBtn > :nth-child(2) > i').then(($btn) => {
            if ($btn.text() == 'menu') {
              cy.get('#toolbarToggleBtn').click();
            }
          })
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
        cy.wait(5000);
        cy.get('#proceduresTableBtn').click();
        cy.get('#procedureMenuBtn').click();
        cy.get('#tabPanels').contains('Импорт').click();
        cy.wait(2000);
        cy.get('#procedersTabMenu >:nth-child(2)').contains('MID-MIF').click();
        cy.get('.q-card').contains('Далее').click();
        cy.get('.q-card').contains('Путь').selectFile(['S:/Common/Волкова Аня/ОБЩАЯ/Типы файлов для загрузки/MapInfo MIF (массовый)/1.mid', 'S:/Common/Волкова Аня/ОБЩАЯ/Типы файлов для загрузки/MapInfo MIF (массовый)/1.mif']);
        cy.get('.q-card').contains('Система координат').click();
        cy.get('div.q-menu> div>:nth-child(1)').click();
        cy.get('.q-card').contains('Преобразовать').click();
        cy.get('div.q-menu> div>:nth-child(1)').click();
        cy.get('.q-card').contains('Далее').click();
        cy.get('.q-card .bg-green-1').contains('Код').click();
        cy.get('div.q-menu> div').contains('Код').click();
        cy.get('.q-card').contains('Далее').click();
        cy.get('.q-card').contains('Далее').click();
        cy.get('.q-card').contains('Далее').click();
        cy.wait(4000);
        cy.get('.q-card').contains('Готово').click();
        cy.wait(5000);
       
    })
        
    });
    it('import DXF', () => {
        cy.visit('');
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


        cy.get('#toolbarToggleBtn > :nth-child(2) > i').then(($btn) => {
            if ($btn.text() == 'menu') {
              cy.get('#toolbarToggleBtn').click();
            }
          })
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
        cy.wait(5000);
        cy.get('#proceduresTableBtn').click();
        cy.get('#procedureMenuBtn').click();
        cy.get('#tabPanels').contains('Импорт').click();
        cy.wait(2000);
        cy.get('#procedersTabMenu >:nth-child(2)').contains('DXF').click();
        cy.get('.q-card').contains('Далее').click();
        cy.get('.q-card').contains('Путь').selectFile('S:/Common/Волкова Аня/ОБЩАЯ/Типы файлов для загрузки/Автокад DXF/теставтокад.dxf');

        cy.get('.q-card').contains('Система координат').click();
        cy.get('div.q-menu> div>:nth-child(1)').click();
        cy.get('.q-card').contains('Преобразовать').click();
        cy.get('div.q-menu> div>:nth-child(1)').click();
        cy.get('.q-card').contains('Далее').click();
        cy.get('.q-card').contains('Далее').click();
        cy.wait(2000)
        cy.get('.bg-green-1').contains('Наименование').click();
        cy.get('div.q-menu> div').contains('Text').click();
        cy.get('body').click(33, 400)
        cy.get('.q-card').contains('Далее').click()
        cy.get('.q-card').contains('Поля формы').click()
        cy.get('div.q-menu> div>:nth-child(2)').click()
        cy.get('.q-card').contains('Далее').click()
        cy.get('.q-card').contains('Далее').click()
        cy.get('.q-card').contains('Готово').click();
    });
    it('import GeoJson', () => {
        cy.visit('');
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
        // cy.get('#fact-list-component').should('have.text', 'Зарегистрированные участки');
        

        cy.get('#toolbarToggleBtn > :nth-child(2) > i').then(($btn) => {
            if ($btn.text() == 'menu') {
              cy.get('#toolbarToggleBtn').click();
            }
          })
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
        cy.wait(5000);
        cy.get('#proceduresTableBtn').click();
        cy.get('#procedureMenuBtn').click();
        cy.get('#tabPanels').contains('Импорт').click();
        cy.wait(2000);
        cy.get('#procedersTabMenu >:nth-child(2)').contains('GeoJson').click();
        cy.get('.q-card').contains('Далее').click();
        cy.get('.q-card').contains('Путь').selectFile('S:/Common/Волкова Аня/ОБЩАЯ/Типы файлов для загрузки/JSON/Текстовый документ.GEOJSON');

        cy.get('.q-card').contains('Система координат').click();
        cy.get('div.q-menu> div>:nth-child(1)').click();
        cy.get('.q-card').contains('Преобразовать').click();
        cy.get('div.q-menu> div>:nth-child(1)').click();
        cy.get('.q-card').contains('Далее').click();
        cy.get('.q-card').contains('Далее').click();
        cy.wait(4000);
        cy.get('.q-card').contains('Готово').click();
    });
    it('import GML', () => {
        cy.visit('');
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


        cy.get('#toolbarToggleBtn > :nth-child(2) > i').then(($btn) => {
            if ($btn.text() == 'menu') {
              cy.get('#toolbarToggleBtn').click();
            }
          })
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
        cy.wait(5000);
        cy.get('#proceduresTableBtn').click();
        cy.get('#procedureMenuBtn').click();
        cy.get('#tabPanels').contains('Импорт').click();
        cy.wait(2000);
        cy.get('#procedersTabMenu >:nth-child(2)').contains('GML').click();
        cy.get('.q-card').contains('Далее').click();
        cy.get('.q-dialog .q-card .q-field').first().selectFile('S:/Common/Волкова Аня/ОБЩАЯ/Типы файлов для загрузки/GML/Geography Markup Language.gml');
        // cy.get('.q-card').contains('Файл').selectFile('S:/Common/Волкова Аня/ОБЩАЯ/Типы файлов для загрузки/GML/Geography Markup Language.gml');

        cy.get('.q-card').contains('Система координат').click();
        cy.get('div.q-menu> div>:nth-child(1)').click();
        cy.get('.q-card').contains('Преобразовать').click();
        cy.get('div.q-menu> div>:nth-child(1)').click();
        cy.get('.q-card').contains('Далее').click();
        cy.get('.q-card').contains('слой').click();
        cy.get('div.q-menu> div>:nth-child(1)').click();
        cy.get('.q-card').contains('Далее').click();
        cy.get('.q-card .bg-green-1').contains('Наименование').click();
        cy.get('div.q-menu> div').contains('name').click();
        cy.get('body').click(33, 400)
        cy.get('.q-card').contains('Далее').click()
        cy.get('.q-card').contains('Поля формы').click()
        cy.get('div.q-menu> div>:nth-child(2)').click()
        cy.get('.q-card').contains('Далее').click()
        cy.get('.q-card').contains('Далее').click()
        cy.wait(4000)
        cy.get('.q-card').contains('Готово').click()
    });
    it('Delete', () => {
        cy.visit('');
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
        cy.get('#toolbarToggleBtn > :nth-child(2) > i').then(($btn) => {
            if ($btn.text() == 'menu') {
              cy.get('#toolbarToggleBtn').click();
            }
          })
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
        cy.wait(5000);
        cy.get('#filterTableBtn').click();
        cy.get('#filterChangeMenu>:nth-child(1)').last().click();
        cy.get('div.q-menu> div').contains('оператор арх').click();
        cy.get('#filterChangeMenu>:nth-child(2)').click();
        cy.get('div.q-menu> div').contains('Содержит').click();
        cy.get('#filterChangeMenu>:nth-child(3)').clear();
        cy.get('#filterChangeMenu>:nth-child(3)').type('test');
        cy.get('#filterDoneBtn').click();
        cy.get('.p-datatable-wrapper').scrollTo('right');
        cy.wait(5000);
        cy.get('#deleteTableBtn').click();
        cy.get('.q-list').contains('Удалить все').click();
        cy.get('.q-gutter-sm>:nth-child(1)').click();
    });

});
