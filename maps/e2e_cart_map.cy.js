describe('Карта', () => {
    it('Избранное', () => {
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
        cy.wait(5000);



        cy.document().then((doc) => {
            cy.wait(4000);
            const i = doc.querySelectorAll('#mapToolsBtn').length; //Существует ли кнопка с инструментами
            const a = doc.querySelectorAll('#favouritesBtn').length;//Существует ли кнопка Избранное
            cy.wait(4000);
            if (a != 0) {
                cy.get('#favouritesBtn').click(); //нажимаем на Избранное
                cy.get('#addPlacesBtn').click(); //Нажимаем на Добавить
                cy.get('#renamePlaceBtn').click();//Переименовываем               
                cy.get("[placeholder='Место 1']").type('Тест2');
                cy.get('.q-card__actions > :nth-child(2)> :nth-child(1)').last().click();
                cy.get('#objectsTab').click();//открываем Объекты
                cy.get('#notesTab').click()//открываем Заметки
                .wait(4000)
                cy.get('.q-card__actions > .q-btn').click();//создать заметку
                cy.get("[aria-label='Наименование']").type('Тест 1');
                cy.get("[aria-label='Описание']").type('Тест-полигон');
                cy.get('canvas').click(210, 290);
                cy.get('canvas').click(215, 291);
                cy.get('canvas').click(211, 289);
                cy.get('canvas').click(210, 290);
                cy.get('#saveNotesBtn').click(); //сохраняем
                cy.get('.q-card__actions > .q-btn').click();
                cy.get('#poligonBtn> :nth-child(2)').click(); //выбираем Линию
                cy.get("[aria-label='Наименование']").type('Тест 2');
                cy.get("[aria-label='Описание']").type('Тест-линия');
                cy.get('canvas').click(210, 290);
                cy.get('canvas').click(215, 291);
                cy.get('canvas').click(211, 289);
                cy.get('#saveNotesBtn').click();
                cy.get('.q-card__actions > .q-btn').click();
                cy.get('#poligonBtn> :nth-child(3)').click(); //выбираем точку
                cy.get("[aria-label='Наименование']").type('Тест 3');
                cy.get("[aria-label='Описание']").type('Тест-точка');
                cy.get('canvas').click(223, 272);
                cy.get('#saveNotesBtn').click();
                cy.get('#notesList > :nth-child(1)').click();
                cy.get('#editNotesBtn').click();
                cy.wait(2000);
                cy.get('#closeEditNotesBtn').click();
                cy.get('#locationNotesBtn').click();
                cy.get('#deleteNotesBtn').click();
                cy.get('#notesList > :nth-child(1)').click();
                cy.get('#deleteNotesBtn').click();
                cy.get('#notesList > :nth-child(1)').click();
                cy.get('#locationNotesBtn').click();
                cy.get('#deleteNotesBtn').click();
                cy.get('#placesTab').click();
                cy.get('#deletePlaceBtn').click();
            }
            else {
                if (i != 0) {
                    cy.get('#mapToolsBtn').click();
                    if (a != 0) {
                        cy.get('#favouritesBtn').click();
                        cy.get('#addPlacesBtn').click();
                        cy.get('#renamePlaceBtn').click();

                        cy.get("[placeholder='Место 1']").type('Тест');
                        cy.get('.q-card__actions > :nth-child(2)> :nth-child(1)').last().click();


                        cy.get('#objectsTab').click();
                        cy.get('#notesTab').click();
                        cy.get('.q-card__actions > .q-btn').click();
                        cy.get("[aria-label='Наименование']").type('Тест 1');
                        cy.get("[aria-label='Описание']").type('Тест-полигон');
                        cy.get('canvas').click(215, 290);
                        cy.get('canvas').click(350, 240);
                        cy.get('canvas').click(230, 350);
                        cy.get('canvas').click(215, 290);
                        cy.get('#saveNotesBtn').click();
                        cy.get('.q-card__actions > .q-btn').click();
                        cy.get('#poligonBtn> :nth-child(2)').click();
                        cy.get("[aria-label='Наименование']").type('Тест 2');
                        cy.get("[aria-label='Описание']").type('Тест-линия');
                        cy.get('canvas').click(209, 260);
                        cy.get('canvas').click(340, 190);
                        cy.get('canvas').click(203, 256);
                        cy.get('#saveNotesBtn').click();
                        cy.get('.q-card__actions > .q-btn').click();
                        cy.get('#poligonBtn> :nth-child(3)').click();
                        cy.get("[aria-label='Наименование']").type('Тест 3');
                        cy.get("[aria-label='Описание']").type('Тест-точка');
                        cy.get('canvas').click(209, 260);
                        cy.get('#saveNotesBtn').click();
                        cy.get('#notesList > :nth-child(1)').click();
                        cy.get('#editNotesBtn').click();
                        cy.wait(2000);
                        cy.get('#closeEditNotesBtn').click();
                        cy.get('#locationNotesBtn').click();
                        cy.get('#deleteNotesBtn').click();
                        cy.get('#notesList > :nth-child(1)').click();
                        cy.get('#deleteNotesBtn').click();
                        cy.get('#notesList > :nth-child(1)').click();
                        cy.get('#locationNotesBtn').click();
                        cy.get('#deleteNotesBtn').click();
                        cy.get('#placesTab').click();
                        cy.get('#deletePlaceBtn').click();
                    }
                }
            }
        })

    });
    it('Легенда', () => {
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
        cy.wait(2000);


        cy.get('#legendDialog').click(); //нажать а легенду, откроется диалог
        cy.wait(4000);


        if (document.querySelectorAll('#select-work-set') !== null) //проверка есть ли рабочий набор
        {
            // cy.get('#addWorkSet').click(); // создание нового рабочего набора
            // cy.wait(2000);
            // cy.get("[placeholder='Введите имя']").type('test'); 
            // cy.get('.q-gutter-sm > :nth-child(1)').click();
            //cy.wait(2000);
            cy.get('#addLayers').click(); //добавить новый слой


            if (document.querySelectorAll('.q-virtual-scroll__content > :nth-child(1) .q-checkbox') !== null) { //проверка наличия слоев

                cy.get('.q-virtual-scroll__content > :nth-child(1) .q-checkbox').last().click(); //выбрать первый слой

                /* cy.get('#typeChangeLayers').click(); //сменить вид отображения
                 cy.get('#settingsTree').click(); //настройки дерева
                 cy.get('#menuTree > :nth-child(2)').click(); // выбрать пункт свернуть
                 cy.get('#settingsTree').click();
                 cy.get('#menuTree > :nth-child(1)').click(); //выбрать пункт развернуть
                 cy.get('#settingsTree').click();
                 cy.get('#menuTree > :nth-child(3)').click(); //выбрать пункт показать выбранное
                 
                 cy.get('#typeChangeLayers').click();*/

                cy.get('[placeholder="Фильтр"]').type('Территория РФ'); // поиск слоя территория РФ
                if (document.querySelectorAll('.q-virtual-scroll__content > :nth-child(1) .q-checkbox') !== null) { //проверк наличия слоя
                    //cy.get('.q-virtual-scroll__content > :nth-child(1) .q-checkbox').last().click(); //добавление слоя
                    cy.get('.q-card .q-gutter-sm > :nth-child(1)').click(); //кнопка применить
                    // cy.get('#layerVisibility').click();
                    // cy.get('#delWorkSet').click(); //удаление рабочего набора
                    // cy.get('.q-card__actions > :nth-child(2)> :nth-child(1)').click();




                }
                else {
                    cy.get('.q-card__actions > :nth-child(2)> :nth-child(1)').click();

                }


            }
            else {

            }



        }
        else {
            if (document.querySelectorAll('#typeChange') !== null) {
                cy.get('#typeChange').click();
                cy.get('#settingsTree').click();
                cy.get('#menuTree > :nth-child(2)').click();
                cy.get('#settingsTree').click();
                cy.get('#menuTree > :nth-child(1)').click();
                cy.get('#settingsTree').click();
                cy.get('#menuTree > :nth-child(3)').click();
                cy.get('#layerVisibility').click();
                cy.wait(2000);
                cy.get('#layerVisibility').click();
                cy.get('#typeChange').click();

            }
            else {

                cy.get('#settingsTree').click();
                cy.get('#menuTree > :nth-child(2)').click();
                cy.get('#settingsTree').click();
                cy.get('#menuTree > :nth-child(1)').click();
                cy.get('#settingsTree').click();
                cy.get('#menuTree > :nth-child(3)').click();
                cy.get('#layerVisibility').click();
                cy.wait(2000);
                cy.get('#layerVisibility').click();
            }
        }
    });
    it('Подложка', () => {
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
        cy.wait(2000);

        if (document.querySelectorAll('#cartBase') != null) //Проверка есть ли копка картографическая основа, открыть если есть и сменить подложку
        {
            cy.get('#cartBase').click();
            cy.get('#baseCart>:nth-child(5)').click();
        }








    });
    it('Микшер', () => {
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
        cy.wait(2000);

        // cy.document().then((doc) => {
        cy.wait(4000);
        const data = new DataTransfer;
        // const i = doc.querySelectorAll('#mapToolsBtn').length; //Существует ли кнопка с инструментами
        //const a = doc.querySelectorAll('#shadingLayers').length;//Существует ли кнопка Микшер слоев
        // const b = doc.querySelectorAll('#shadingLayersMenu').length;
        // const c = doc.querySelectorAll('#shadingLayersHorizontal').length;
        // const d = doc.querySelectorAll('#shadingLayersVertical').length;
        cy.wait(4000);
        cy.get('#shadingLayers').click();
        cy.get('#shadingLayersHorizontal').click();

        //cy.get('.horizontal-inside').trigger('mousedown');
        //cy.get('.clip-map-child-horizontal').trigger('center');
        /* cy.get('.q-tree__node-header-content').first().trigger('dragstart', { data }, { force: true });
         cy.get('body').trigger('drop', 50, 360, { data }, { force: true });*/
        //cy.get('.clip-map-child-region').trigger('dragstart', { data });
        // cy.get('.q-splitter__separator').last().trigger('drop', { data });

        cy.get('.clip-map-child-horizontal').trigger('mousedown');//Нажатие
        cy.wait(5000);//перетаскиваем по экрану
        cy.get('.clip-map-child-horizontal').trigger('mouseup');//отпускаем кнопку мыши

        cy.get('#shadingLayers').click();
        cy.get('#shadingLayers').click();
        cy.get('#shadingLayersVertical').click();
        cy.get('.vertical-inside').first().trigger('mousedown');//Нажатие
        cy.wait(5000);//перетаскиваем по экрану
        cy.get('.vertical-inside').trigger('mouseup');//отпускаем кнопку мыши

        cy.get('#shadingLayers').click();
        cy.get('#shadingLayers').click();
        cy.get('#shadingLayersArea').click();
        cy.get('.clip-map-child-region').first().trigger('mousedown');//Нажатие
        cy.wait(5000);//перетаскиваем по экрану
        cy.get('.clip-map-child-region').trigger('mouseup');//отпускаем кнопку мыши

        cy.get('#shadingLayers').click();
        cy.get('#shadingLayers').click();

        cy.get('#shadingBase').click();//сменить подложку
        cy.get('div.q-menu > .q-virtual-scroll__content > .q-item > :nth-child(2)').first().click(); //применить



        //})









    });
    it('Масштаб', () => {
        cy.visit('/');
        cy.wait(3000);
        
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
        cy.wait(5000);



        cy.document().then((doc) => {
            cy.wait(4000);
            const zoomin = doc.querySelectorAll('.map-toolbar.x-end> :nth-child(1)').length; //Проверка есть ли кнопка увелечения
            const zoomout = doc.querySelectorAll('.map-toolbar.x-end> :nth-child(2)').length;//Проверка есть ли кнопка уменьшения
            const mylocation = doc.querySelectorAll('.map-toolbar.x-end> :nth-child(3)').length; //Проверка есть ли кнопка мое местоположение
            cy.wait(4000);
            if (zoomin != 0) {
                cy.get('.map-toolbar.x-end> :nth-child(1)').last().click();//если есть нажимаем на кнопку увеличить
                cy.wait(2000);
                if (zoomout != 0) {
                    cy.get('.map-toolbar.x-end> :nth-child(2)').last().click();//если есть нажимаем на кнопку уменьшить
                    cy.wait(2000);
                    if (mylocation != 0) {
                        cy.get('.map-toolbar.x-end> :nth-child(3)').last().click();//если есть нажимаем на кнопку Мое местоположение 
                        cy.wait(2000);
                    }

                }
                else {
                    if (mylocation != 0) {
                        cy.get('.map-toolbar.x-end> :nth-child(3)').last().click();

                    }
                }

            }
            else {
                if (zoomout != 0) {
                    cy.get('.map-toolbar.x-end> :nth-child(2)').last().click();
                    if (mylocation != 0) {
                        cy.get('.map-toolbar.x-end> :nth-child(3)').last().click();

                    }

                }
                else {
                    if (mylocation != 0) {
                        cy.get('.map-toolbar.x-end> :nth-child(3)').last().click();

                    }
                }
            }


        })



    });
});
