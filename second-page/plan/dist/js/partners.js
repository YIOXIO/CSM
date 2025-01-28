document.addEventListener('DOMContentLoaded', () => {
    // Server data exemple. 
    const planData = [
        {   
            id: 1,   
            name: 'Высшая школа Экономики и бизнеса',
            color: '#217AFF',
            items: [
                {   
                    id: 11,
                    name: 'Кафедра маркетинга (в т.ч. научно-исследовательская лаборатория «Маркетинговые исследования транспортного комплекса»)',
                    alias: 'Высшая школа Экономики и бизнеса',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',                    
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный',
                    dateOfUpdate: '15.04.2022'
                },
                {   
                    id: 11,
                    name: 'Кафедра маркетинга (в т.ч. научно-исследовательская лаборатория «Маркетинговые исследования транспортного комплекса»)',
                    alias: 'Высшая школа Экономики и бизнеса',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный',
                    dateOfUpdate: '15.04.2022'
                },
                {
                    id: 13,
                    name: 'Кафедра маркетинга (в т.ч. научно-исследовательская лаборатория «Маркетинговые исследования транспортного комплекса»)',
                    alias: 'Высшая школа Экономики и бизнеса',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный',
                    dateOfUpdate: '15.04.2022'
                },
                {
                    id: 14,
                    name: 'Кафедра маркетинга (в т.ч. научно-исследовательская лаборатория «Маркетинговые исследования транспортного комплекса»)',
                    alias: 'Высшая школа Экономики и бизнеса',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм', '43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный',
                    dateOfUpdate: '15.04.2022'
                }
            ]
        },
        {   
            id: 2,
            name: 'Высшая школа Финансов',
            color: '#EF8E8E',
            items: [
                {   
                    id: 21,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                    alias: 'Высшая школа Финансов',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
            ]
        },
        {   
            id: 3,
            name: 'Высшая школа Менеджмента',
            color: '#2BD6FB',
            items: [
                {   
                    id: 13,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                    alias: 'Высшая школа Менеджмента',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
                {   
                    id: 13,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                    alias: 'Высшая школа Менеджмента',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                }
            ]
        },
        {   
            id: 4,
            name: 'Высшая школа кибертехнологий, математики и статики',
            color: '#627DAE',
            items: [
                {   
                    id: 14,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы»',
                    alias: 'Высшая школа кибертехнологий, математики и статики',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
            ]
        },
        {   
            id: 5,
            name: 'Высшая инженерная школа «Новые материалы и технологии»',
            color: '#4CD382'
        },
        {   
            id: 6,
            name: 'Высшая школа Социально – гуманитарных наук',
            color: '#6C38FF',
            items: [
                {   
                    id: 41,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет» Союза судебных экспертов «Экспертный совет»Союза судебных экспертов',
                    alias: 'Высшая школа Социально – гуманитарных наук',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
                {   
                    id: 42,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет» Союза судебных экспертов «Экспертный совет»Союза судебных экспертов',
                    alias: 'Высшая школа Социально – гуманитарных наук',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
                {   
                    id: 43,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет» Союза судебных экспертов «Экспертный совет»Союза судебных экспертов',
                    alias: 'Высшая школа Социально – гуманитарных наук',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
            ]
        },
        {   
            id: 7,
            name: 'Высшая школа права',
            color: '#FB9B2B',
            items: [
                {   
                    id: 71,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет» Союза судебных экспертов «Экспертный совет»Союза судебных экспертов',
                    alias: 'Высшая школа права',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
            ]
        },
        {   
            id: 8,
            name: 'Высшая школа креативных индустрий',
            color: '#FBE62B',
            items: [
                {   
                    id: 81,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет» Союза судебных экспертов «Экспертный совет»Союза судебных экспертов',
                    alias: 'Высшая школа креативных индустрий',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
                {   
                    id: 82,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет» Союза судебных экспертов «Экспертный совет»Союза судебных экспертов',
                    alias: 'Высшая школа креативных индустрий',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
                {   
                    id: 83,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет» Союза судебных экспертов «Экспертный совет»Союза судебных экспертов',
                    alias: 'Высшая школа креативных индустрий',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
                {    
                    id: 84,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет» Союза судебных экспертов «Экспертный совет»Союза судебных экспертов',
                    alias: 'Высшая школа креативных индустрий',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
                {   
                    id: 85,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет» Союза судебных экспертов «Экспертный совет»Союза судебных экспертов',
                    alias: 'Высшая школа креативных индустрий',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
                {   
                    id: 86,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет» Союза судебных экспертов «Экспертный совет»Союза судебных экспертов',
                    alias: 'Высшая школа креативных индустрий',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
                {   
                    id: 81,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет» Союза судебных экспертов «Экспертный совет»Союза судебных экспертов',
                    alias: 'Высшая школа креативных индустрий',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
                {   
                    id: 82,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет» Союза судебных экспертов «Экспертный совет»Союза судебных экспертов',
                    alias: 'Высшая школа креативных индустрий',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
                {   
                    id: 83,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет» Союза судебных экспертов «Экспертный совет»Союза судебных экспертов',
                    alias: 'Высшая школа креативных индустрий',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
                {   
                    id: 84,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет» Союза судебных экспертов «Экспертный совет»Союза судебных экспертов',
                    alias: 'Высшая школа креативных индустрий',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
                {   
                    id: 85,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет» Союза судебных экспертов «Экспертный совет»Союза судебных экспертов',
                    alias: 'Высшая школа креативных индустрий',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
                {   
                    id: 86,
                    name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет» Союза судебных экспертов «Экспертный совет»Союза судебных экспертов',
                    alias: 'Высшая школа креативных индустрий',
                    icon: '',
                    occupation: 'Туризм',
                    interests:'Наука/образование',
                    internships: 11,
                    employment: 3,
                    activity: 'наука/образование',
                    preparation: ['43.03.02 Туризм'],
                    director: 'Зарина Валерьевна Догузова',
                    haveCorporateUniversity: 'нет',
                    level: 'Высший орган',
                    contacts: 'Лысенкова Елена Вячеславовн - заместитель руководителя Федерального агентства по туризму (Ростуризм)',
                    curator: 'Васякин Богдан Сергеевич - заведующий кафедрой психологии',
                    phone: '89035494458',
                    contractConclusionDate: '23.12.2022',
                    contractType:'бессрочный'
                },
            ]
        },
    ]

    // ф-ия для установки заголовка.
    const setTitle = title => document.querySelector('.plan__header-title').textContent = title

    // ф-ия для установки в подзаголовок кол-ва элементов в отображемом списке.
    const setSubtitle = num =>  document.querySelector('.plan__header-subtitle span').textContent =  num

    // Установка заголовка по умолчанию.
    const defaultTitle = 'Индустриальные партнеры'
    setTitle(defaultTitle)

    // ф-ия создающая блок меню.
    const menuItem = item => {
        const {name, color, id} = item

        return `
            <div class="plan__menu-block" data-id=${id}>
                <svg class="plan__graphiс" width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect class="plan__graphiс-row" height="5%"  width="10%" fill="${color}" x="3" y="0.4" />
                    <rect  class="plan__graphiс-right-rect" stroke="${color}" x="10%" y="0"  fill="white"/>
                    <rect  class="plan__graphiс-left-rect" stroke="${color}" x="0" y="0" fill="transparent"/>
                </svg>
                <div class="plan__menu-wrap">
                    <div class="plan__menu-descr">${name}</div>
                </div>
            </div>
        `
    }


    // ф-ия выводит меню на страницу.
    function setMenu(data) {
        let out = document.querySelector('.plan__tabcontent-block__wrap_menu')
        let menuResult = ''
       
        data.map(item => {
            menuResult += menuItem(item)
        })
    
        out.innerHTML = menuResult 
    }
    
    setMenu(planData)


    // Преребор блоков меню с последующим навешиванием прослушки клика на каждый блок. 
    const menuBlocks = Array.from(document.querySelectorAll('.plan__menu-block')) 

    // Анимация меню при клике на блок.
    const setLinesSelection = () => {
        menuBlocks.forEach(i => {
            let line = i.children[0].children[0]
            let rect = i.children[0].children[1]
            
            line.setAttribute('width', '10%')
            rect.setAttribute('x', '10%')
        })
    }

    // Анимация меню по умолчанию или при сбросе параметров ввода.
    const setLinesDefault = () => {
        let array = []
        
        planData.map(partner => {
            
                if (partner.items) {
                    array.push(partner.items.length)
                } else {
                    array.push(0)
                }
                

        })
        
        menuBlocks.forEach((i, index) => {
            let line = i.children[0].children[0]
            let rect = i.children[0].children[1]

            let value = array[index] + 10

            value = value > 10 ? value : 10
            value = value > 90 ? value = 90 : value
            
            line.setAttribute('width', `${value}%`)
            rect.setAttribute('x', `${value}%`)
        })
    }

    setLinesDefault(planData)

    menuBlocks.forEach(elem => {  
        elem.addEventListener('click', function() {
            setLinesSelection()

            let line  = this.children[0].children[0]
            let rect  = this.children[0].children[1]
            let title = this.children[1].children[0].textContent
            let id    = this.getAttribute('data-id')

            line.setAttribute('width', '100%')
            rect.setAttribute('x', '100%')

            // Установка заголовка.
            setTitle(title)

            // Рендер контента.
            setContent(getSortData(planData, id))
        }) 
    }) 


    // Сброс фильтра.
    document.querySelector('.header__link_get-all-plan').addEventListener('click', () => {
        setContent(getSortData(planData))
        setTitle(defaultTitle)
        setLinesDefault()
    })


    // Сортировка массива данных. 
    function getSortData(data, id) {
        let result = []
        
        // Сортировка при выборе категории в меню.
        if (id !== undefined) {
           
                data.find(partner => {
                    if (partner.items && partner.id == id) {
                        partner.items.map(item => {
                            item.color = partner.color
                            result.push(item)
                        })
                    }
                })
            
        } 
        // Сортировка по умолчанию.
        else {
            data.map(partner => {
                if (partner.items) {
                    partner.items.map(item => {
                        item.color = partner.color
                        result.push(item)
                    })
                }  
            })
        }
        // Установка подзаголовка.
        setSubtitle(result.length)
        return result
    }


    // Класс генерирующий отдельный блок контента со списком элементов выбранной категории. 
    class Partner {
        constructor(array, modifier) {
            this.array          = array,
            this.className      = 'plan__tabcontent-block__wrap',
            this.modifier       = modifier,
            this.parent         = document.querySelector(`.plan__tabcontent-block_${this.modifier}`),
            this.count          = this.array.length
        }

        get length() {
            let str = '';
            for (let i = 0; i < this.array.length; i++) {
                str += this.array[i].name;
            }
            return str.length
        }

        // Mетод создающий отдельный элемент списка.
        createBlockItem(item) {            
            return `
                <div class="plan__tabcontent-block__item" data-id="${item.id}"> 
                    <div class="plan__tabcontent-block__info">
                        <svg class="plan__tabcontent-block__mark" width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect stroke="${item.color}" x="0" y="0" fill="white"/>
                        </svg>
                        <img src="./assets/img/plan-icons/${item.icon ? item.icon : 'default-icon.svg'}" alt="icon" class="plan__tabcontent-block__icon">
                        <div class="plan__tabcontent-block__descr ${item.name.length < 55 ? 'plan__tabcontent-block__descr_mt' : null}">${item.name}</div>
                    </div>
                </div>
            `;
        }

        
        // Рендер ф-ия.
        render() {
            const element = document.createElement('div');
            element.classList.add(this.className);
    
            if (this.array.length > 3) {
                element.classList.add(this.className);
            } 
            else {
                element.classList.add(this.className);
                element.classList.add('plan__tabcontent-block__wrap_min-content');
            }
            let str = '';
            this.array.forEach((i, index) => str += this.createBlockItem(i, index));
            element.innerHTML = '';
            element.innerHTML = str;
            this.parent.append(element);  
        }

        // Рендер пустого блока.
        renderEmptyBlock() {
            const element = document.createElement('div');
            element.classList.add(this.className);
            this.parent.innerHTML = '';  
        }
    }

    // Ф-ия выполняет отрисовку контента на странице.
    function setContent(data) {
        
        // Инициализация данных.
        let currentPage = 1
        let flag = true
        let pagination = []
        
        const itemsInPage = 12
        const pages = Math.ceil(data.length / itemsInPage)
        const sliceData = (array, position, limit) => array.slice(position, limit)


        // Создание табов.
        function createPages(modifier) {
            const tabContent = document.createElement('div')
            tabContent.classList.add('plan__tabcontent', `plan__tabcontent_p${modifier}`)
     
            document.querySelector('.plan__tabcontainer').append(tabContent)
        }
        
        function setPages() {
            if (pages === 0) {
                createPages(1)
            }
            for (let i = 1; i <= pages; i++) {
                createPages(i)
            }
        }

        setPages()

    
        // Oтображение текущего таба и скрытие прочих.
        const tabsContent = document.querySelectorAll('.plan__tabcontent')

        function showCurrentPage(page = 0) {
            tabsContent.forEach(i => i.classList.add('hide'))
            tabsContent[page].classList.remove('hide')
        }

        showCurrentPage()


        // Переключение табов (пагинация).

        // Инициализация кнопок-переключателей.
        const btn = num => {
            return `
                <div class="plan__tabitem plan__tabitem-btn ${num === 1 ? 'plan__tabitem_active' : null}" data-page=${num}>
                    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z"/>	
                    </svg>
                    <div class="plan__tabitem-value">${num}</div>	
                </div>
            `
        }

        const next = `
            <div class="plan__tabitem plan__tabitem-prev">
                <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z"/>	
                </svg>
                <div class="plan__tabitem-value">&lt;</div>	
            </div>
        `

        const prev = `
            <div class="plan__tabitem plan__tabitem-next">
                <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z"  stroke="#217AFF"/>	
                </svg>
                <div class="plan__tabitem-value">&gt;</div>	
            </div>
        `

        // Создание массива данных содержащих представление панели переключателей пагинации. 
        for (let i = 1; i <= pages; i++) {
            pagination.push(btn(i))
        } 

        // Вывод пагинации на страниу, с последующим навешиванием прослушки клика 
        // на кнопки со стрелками стрелки и кнопки с номерами страниц.
        function innerPaginationToPage() {
            document.querySelector('.plan__tabheader-btns').innerHTML =  ''
            let result = []
            if (pages == 1) {
                return
            }
            if (pagination.length == 2) {
                if (currentPage < pages) {
                    result = pagination.slice(currentPage - 1, currentPage + 1)
                   
                } 
                else if (currentPage == pages) {
                    result = pagination.slice(currentPage - 2, currentPage + 1)
                   
                }  
            } 
            else {
                if (currentPage < pages - 1) {
                    result = pagination.slice(currentPage - 1, currentPage + 2)
                   
                } 
                else if (currentPage < pages) { 
                    result = pagination.slice(currentPage - 2, currentPage + 1)
                   
                }    
                else if (currentPage == pages) {
                    result = pagination.slice(currentPage - 3, currentPage)
                    
                } else {
                    return
                }
            }
            
            result.unshift(next)
            result.push(prev)

            document.querySelector('.plan__tabheader-btns').innerHTML =  `
                ${result.join('')}
            `;

            document.querySelector('.plan__tabitem-next').addEventListener('click', nextClick)
            document.querySelector('.plan__tabitem-prev').addEventListener('click', prevClick)
            togglePage()
        }

        innerPaginationToPage();

        // Ф-ия переключает табы вперед.
        function nextClick() {
            flag = true
            if (currentPage >= pagination.length){
                return false
            } 
            else if (pages == 1) {
                return false
            }
            else if (pages > 1) {
                currentPage++
                if (currentPage < pagination.length - 1 || flag)  innerPaginationToPage() 
                document.querySelectorAll('.plan__tabitem-btn').forEach(i => {
                    i.classList.remove('plan__tabitem_active')
                    if (i.getAttribute('data-page') == currentPage) {
                        i.classList.add('plan__tabitem_active')
                    }
                })
                
                showCurrentPage(currentPage - 1)
            }
        }

        // Ф-ия переключает табы назад.
        function prevClick() {
            flag = true
            if (currentPage <= 1) return false
            currentPage--
            if (currentPage < pagination.length - 1) innerPaginationToPage()
            
            document.querySelectorAll('.plan__tabitem-btn').forEach(i => {
                i.classList.remove('plan__tabitem_active')
                if (i.getAttribute('data-page') == currentPage) {
                    i.classList.add('plan__tabitem_active')
                }
            })
          
            showCurrentPage(currentPage - 1)
        }
        
        // Ф-ия переключает табы при нажатии на кнопку соответствующую порядковому номеру таба.
        function togglePage() {
            document.querySelectorAll('.plan__tabitem-btn').forEach(i => {
                i.addEventListener('click', (e) => {
                    document.querySelectorAll('.plan__tabitem-btn').forEach(item => {
                        item.classList.remove('plan__tabitem_active')
                    });
                    
                    i.classList.add('plan__tabitem_active')
                    let pageNum = i.getAttribute('data-page')
                    currentPage = pageNum;
                    flag = false
                    showCurrentPage(currentPage - 1)
                })
            })
        }
        
        document.querySelector('.plan__tabheader').addEventListener('selectstart', () => {
            return false;
        })

        togglePage()


        // Создание и вывод на страницу контейнеров для контента. 
        const setPage = pageNumber => {
            return  `
                <div class="plan__tabcontent-wrap">
                    <div class="plan__tabcontent-element">
                        <div class="plan__tabcontent-block plan__tabcontent-block_p${pageNumber}-m">
                                <svg class="plan__tabcontent-block-bg" viewBox="0 0 1269 1703" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.00024 1631.95L1.0001 99.5907L1.0001 36.1923L38.5906 0.999875L248.186 0.999856L267.551 19.1292L315.394 19.1292L329.063 5.2656L414.496 5.26559L440.695 30.8599L1003.41 30.8599L1029.61 5.26554L1233.83 5.26552L1268 38.325L1268 1641.55L1225.85 1681L565.997 1681L544.354 1701.27L113.772 1701.27L92.1288 1681L53.3992 1681L1.00024 1631.95Z" fill="#112054" fill-opacity="0.68" stroke="#217AFF" stroke-width="2"/>
                            </svg>
                            <div class="plan__tabcontent-block__wrap plan__tabcontent-block__wrap_p${pageNumber}-m"></div>
                        </div>		
                    </div>

                    <div class="plan__tabcontent-element">
                        <div class="plan__tabcontent-block plan__tabcontent-block_p${pageNumber}-r">
                            <svg class="plan__tabcontent-block-bg" viewBox="0 0 1269 1703" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.00024 1631.95L1.0001 99.5907L1.0001 36.1923L38.5906 0.999875L248.186 0.999856L267.551 19.1292L315.394 19.1292L329.063 5.2656L414.496 5.26559L440.695 30.8599L1003.41 30.8599L1029.61 5.26554L1233.83 5.26552L1268 38.325L1268 1641.55L1225.85 1681L565.997 1681L544.354 1701.27L113.772 1701.27L92.1288 1681L53.3992 1681L1.00024 1631.95Z" fill="#112054" fill-opacity="0.68" stroke="#217AFF" stroke-width="2"/>
                            </svg>

                            <div class="plan__tabcontent-block__wrap plan__tabcontent-block__wrap_p${pageNumber}-r"></div>
                        </div>	
                    </div>
                </div>
            `
        }

        for (let i = 0; i < pages; i++) {
            tabsContent[i].innerHTML = setPage(i + 1)
        }


        // Ф-ця выводит данные на страцицу. 
        function innerData() {
            count = 0;

            if (pages === 0) {
                for (let i = 1; i <= pages + 1; i++) {
                    new Partner([], `p${i}-m`).renderEmptyBlock()
                    new Partner([], `p${i}-r`).renderEmptyBlock()
                } 
            } else {
                for (let i = 1; i <= pages; i++) {
                    new Partner(sliceData(data, count, count + 4), `p${i}-m`).render()
                    count = count + 4
                    new Partner(sliceData(data, count, count + 4), `p${i}-r`).render()
                    count = count + 4   
                } 
            }  
        }

        innerData()

        // Открытие модального окна.
        document.querySelectorAll('.plan__tabcontent-block__item').forEach(elem => {
            elem.addEventListener('click', createModal)
        }) 
    }

    setContent(getSortData(planData))  













    
    // Ф-ия приводит номер телефона к установленному виду.
    // function transormPhoneNumber(phone) {
    //     let array = phone.toString().split('')
    //     let result = ''

    //     for (let i = 0; i < array.length; i++) {
    //         if (i === 1 || i === 4 || i === 7 || i === 9) {
    //             result += ' ' + array[i]
    //         } 
    //         else {
    //             result += array[i]
    //         }
    //     }

    //     return result
    // }
   
    // // Модальное окно.

    // const modalField = item =>  {
    //     return item ? item : ''
    // }

    // //Ф-ия для гинирации модального окна.
    // function setModal(item) {
    //     const {
    //         name,
    //         alias,
    //         icon,
    //         color,
    //         occupation,
    //         interests,
    //         internships,
    //         employment,
    //         activity,
    //         preparation,
    //         director,
    //         haveCorporateUniversity,
    //         contacts,
    //         level,
    //         curator,
    //         phone,
    //         contractConclusionDate,
    //         contractType,
    //         dateOfUpdate
    //     } = item 

        

    //     return `
    //         <div class="modal__header">
    //             <div class="modal__icon">
    //                 <img src="./assets/plan/dist/img/plan-icons/${icon ? icon : 'default-icon.svg'}" alt="icon">
    //             </div>
    //             <div class="modal__info">
    //                 <div class="modal__title">${modalField(name)}</div>
    //                 <div class="modal__subtitle">
    //                     <svg class="modal__mark" width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                         <rect stroke="${modalField(color)}" x="0" y="0" fill="white"/>
    //                     </svg>
    //                     <div class="modal__partner-name">${modalField(alias)}</div> 
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="modal__body">
    //             <div class="modal__block modal__block_left">
    //                 <div class="modal__block-item">
    //                     <div class="modal__block-item__title">Сфера деятельности</div>
    //                     <div class="modal__block-item__descr">${modalField(occupation)}</div>
    //                 </div>
    //                 <div class="modal__block-item">
    //                     <div class="modal__block-item__title">Интересы в области</div>
    //                     <div class="modal__block-item__descr">${modalField(interests)}</div>
    //                 </div>
    //                 <div class="modal__block-item">
    //                     <div class="modal__block-item__title">Формы взаимодействия</div>
    //                     <div class="modal__block-item__descr">Практики/стажировки: <span>${modalField(internships)}</span></div>
    //                     <div class="modal__block-item__descr">Трудоустройство: <span>${modalField(employment)}</span></div>
    //                     <div class="modal__block-item__descr">По выбору (образовательная деятельность, наука, дпо, и т.д.): <span>${modalField(activity)}</span></div>
    //                 </div>
    //                 <div class="modal__block-item">
    //                     <div class="modal__block-item__title">Направления подготовки</div>
    //                     ${preparation ? preparation.map(i => '<div class="modal__block-item__descr">' + i + '</div>').join('') : ''}
    //                 </div>
    //             </div>
    //             <div class="modal__block modal__block_right">
    //                 <div class="modal__block-item">
    //                     <div class="modal__block-item__title">Генеральный директор</div>
    //                     <div class="modal__block-item__descr">${modalField(director)}</div>
    //                 </div>
    //                 <div class="modal__block-item">
    //                     <div class="modal__block-item__title">Наличие корпоративного университета</div>
    //                     <div class="modal__block-item__descr">${modalField(haveCorporateUniversity)}</div>
    //                 </div>
    //                 <div class="modal__block-item">
    //                     <div class="modal__block-item__title">Уровень взаимодействия</div>
    //                     <div class="modal__block-item__descr">${modalField(level)}</div>
    //                 </div>
    //                 <div class="modal__block-item">
    //                     <div class="modal__block-item__title">Контакты со стороны индустриального партнера</div>
    //                     <div class="modal__block-item__descr">${modalField(contacts)}</div>
    //                 </div>
    //                 <div class="modal__block-item">
    //                     <div class="modal__block-item__title">Куратор взаимодействия со стороны Университета</div>
    //                     <div class="modal__block-item__descr">${modalField(curator)}</div>
    //                     <div class="modal__block-item__descr">тел.: <span class="modal__block-item__phone">${transormPhoneNumber(modalField(phone))}</span></div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="modal__date">
    //             <div class="modal__contract-date">Данные по состоянию на <span>${modalField(dateOfUpdate)}</span></div>
    //         </div>
    //         <div class="modal__contract">
    //             <div class="modal__contract-date">Дата заключения договора: <span>${modalField(contractConclusionDate)}</span></div>
    //             <div class="modal__contract-type">Период действия договора: <span>${modalField(contractType)}</span></div>
    //         </div>
    //     `
    // } 

    // const overlay = document.querySelector('.overlay');
    // const modal = document.querySelector('.modal');
    // const modalWrapper = document.querySelector('.modal__wrapper');
    // const modalClose = modal.querySelector('.modal__close');

    // Открытие подального окна при клике на выбранный эелемент списка.
    // function createModal() {
    //     modalWrapper.innerHTML = ''
    //     overlay.classList.add('overlay_show');
    //     modal.classList.add('modal_show');
    //     let id = this.getAttribute('data-id')
    //     let obj = {}
    //     planData.map(group => {
    //         group.groupItems.map(partner => {
    //             if (partner.items) {
    //                 partner.items.find(item => {
    //                     if (item.id == id) {
    //                         obj = item
    //                     }
    //                 })
    //             }  
    //         })
    //     })
    //     modalWrapper.innerHTML = setModal(obj)
    // }

    // // Открытие модального окна.
    // document.querySelectorAll('.plan__tabcontent-block__item').forEach(elem => {
    //     elem.addEventListener('click', createModal)
    // }) 

    // // Закрытие модального окна.
    // modalClose.addEventListener('click', () => {
    //     overlay.classList.remove('overlay_show');
    //     modal.classList.remove('modal_show');
    // })

  
})


