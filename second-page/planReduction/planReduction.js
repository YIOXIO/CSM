       // Функция для определения цвета прогресс-бара
       function getProgressColor(fact, plan) {
        if (fact === 0 && plan === 0) {
            return 'no-data'; // Серый для отсутствия данных
        }
        const percentage = plan > 0 ? (fact / plan) * 100 : 0;
        if (percentage <= 33.3) {
            return 'linear-gradient(90deg, #5F1426 0%, #831832 100%)'; // Красный
        } else if (percentage <= 66.6) {
            return 'linear-gradient(90deg, rgba(125, 69, 29, 0.60) 0%, rgba(227, 125, 53, 0.60) 100%)'; // Оранжевый
        } else {
            return 'linear-gradient(90deg, rgba(10, 125, 75, 0.60) 0%, rgba(18, 227, 137, 0.60) 100%)'; // Зеленый
        }
    }

    // Функция для генерации HTML
    function renderEmployees() {
        const container = document.getElementById('employee-container');
        container.innerHTML = ''; // Очищаем контейнер перед генерацией

        employeeData.forEach(employee => {
            // Создаем секцию для сотрудника
            const employeeSection = document.createElement('div');
            employeeSection.className = 'employee-section';

            // Добавляем имя сотрудника
            const employeeName = document.createElement('div');
            employeeName.className = 'employee-name';
            employeeName.textContent = employee.name;
            employeeSection.appendChild(employeeName);

            // Создаем обертку для подразделений
            const departmentWrapper = document.createElement('div');
            departmentWrapper.className = 'department-wrapper';

            // Проверяем, есть ли подразделения с plan = 0
            const hasZeroPlan = employee.departments.some(dept => dept.plan === 0);

            // Вычисляем сумму fact и plan
            const totalFact = employee.departments.reduce((sum, dept) => sum + dept.fact, 0);
            const totalPlan = employee.departments.reduce((sum, dept) => sum + dept.plan, 0);
            const totalPercentage = totalPlan > 0 ? (totalFact / totalPlan) * 100 : 0;

            // Добавляем подразделения
            employee.departments.forEach(department => {
                const percentage = department.plan > 0 ? (department.fact / department.plan) * 100 : 0;

                const departmentDiv = document.createElement('div');
                departmentDiv.className = 'department';

                const departmentName = document.createElement('div');
                departmentName.className = 'department-name';
                departmentName.textContent = department.name;
                departmentDiv.appendChild(departmentName);

                const progressContainer = document.createElement('div');
                progressContainer.className = 'progress-container';

                // Создаем кастомный прогресс-бар
                const customProgress = document.createElement('div');
                customProgress.className = 'custom-progress';

                const customProgressBar = document.createElement('div');
                customProgressBar.className = 'custom-progress-bar';

                customProgressBar.style.width = department.fact === 0 && department.plan === 0 ? '100%' : department.plan === 0 ? '0%' : `${percentage}%`;

                const progressColor = getProgressColor(department.fact, department.plan);
                if (progressColor === 'no-data') {
                    customProgressBar.classList.add('no-data');
                } else {
                    customProgressBar.style.backgroundImage = progressColor;
                }

                customProgress.appendChild(customProgressBar);
                progressContainer.appendChild(customProgress);

                const score = document.createElement('div');
                score.className = 'score';
                // Разделяем fact и plan, подсвечиваем только plan
                score.innerHTML = `${department.fact} из <span${department.plan === 0 ? ' class="plan-zero"' : ''}>${department.plan}</span>`;
                progressContainer.appendChild(score);

                departmentDiv.appendChild(progressContainer);
                departmentWrapper.appendChild(departmentDiv);
            });

            // Добавляем итоговую строку
            const totalRow = document.createElement('div');
            totalRow.className = 'total-row';

            const totalName = document.createElement('div');
            totalName.className = 'department-name';
            totalName.textContent = 'Итого';
            totalRow.appendChild(totalName);

            const totalProgressContainer = document.createElement('div');
            totalProgressContainer.className = 'progress-container';

            const totalCustomProgress = document.createElement('div');
            totalCustomProgress.className = 'custom-progress';

            const totalCustomProgressBar = document.createElement('div');
            totalCustomProgressBar.className = 'custom-progress-bar';
            // Устанавливаем ширину: 100% для totalFact = 0, totalPlan = 0; 0% для totalPlan = 0; иначе по проценту
            totalCustomProgressBar.style.width = totalFact === 0 && totalPlan === 0 ? '100%' : totalPlan === 0 ? '0%' : `${totalPercentage}%`;

            const totalProgressColor = getProgressColor(totalFact, totalPlan);
            if (totalProgressColor === 'no-data') {
                totalCustomProgressBar.classList.add('no-data');
            } else {
                totalCustomProgressBar.style.backgroundImage = totalProgressColor;
            }

            totalCustomProgress.appendChild(totalCustomProgressBar);
            totalProgressContainer.appendChild(totalCustomProgress);

            const totalScore = document.createElement('div');
            totalScore.className = 'score';
            // Разделяем totalFact и totalPlan, подсвечиваем только totalPlan
            totalScore.innerHTML = `${totalFact} из <span${hasZeroPlan ? ' class="plan-zero"' : ''}>${totalPlan}</span>`;
            totalProgressContainer.appendChild(totalScore);

            totalRow.appendChild(totalProgressContainer);
            departmentWrapper.appendChild(totalRow);

            employeeSection.appendChild(departmentWrapper);
            container.appendChild(employeeSection);
        });
    }

    // Вызываем функцию для генерации при загрузке страницы
    window.onload = renderEmployees;