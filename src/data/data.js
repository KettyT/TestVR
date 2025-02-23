

const generatedData = {};

const wares = [
    {
        name: "Juvederm VOLBELLA, Волбелла 01",
        id: 100,
        sub: 33
    },
    {
        name: "Juvederm VOLBELLA, Волбелла 02",
        id: 101,
        sub: 33
    },
    {
        name: "Juvederm VOLBELLA, Волбелла 03",
        id: 102,
        sub: 33
    },
    {
        name: "Juvederm VOLBELLA, Волбелла 04",
        id: 103,
        sub: 33
    },
    {
        name: "Шприц Жане",
        id: 104,
        sub: 11
    },
    {
        name: 'Шприц стандарт 5 мл',
        id: 105,
        sub: 22
    }
];

const categoriesSyringes = [
    {
        name:'Шприц большого объема',
        id: 1,
        sub: [
            {
                name: 'Шприц Жане',
                id: 11
            },
            {
                name: 'Карпульный шприц',
                id: 12

            }
        ]

    },
    {
        name:'Шприц стандартного объема',
        id: 2,
        sub: [
            {
                name: 'Шприц стандарт 2 мл',
                id: 21
            },
            {
                name: 'Шприц стандарт 5 мл',
                id: 22

            },
            {
                name: 'Шприц стандарт 10 мл',
                id: 23

            }
        ]

    },
    {
        name:'Малообъемный шприц',
        id: 3,
        sub: [
            {
                name: 'Инсулиновый шприц',
                id: 31
            },
            {
                name: 'Туберкулиновый шприц',
                id: 32

            },
            {
                name: 'Juvederm VOLBELLA, Волбелла',
                id: 33

            }

            ]

    }
];

let categories = [];
let subcategories = [];
const catIdx = {};

categoriesSyringes.forEach((elm) => {
    const category = {
        id: elm.id,
        name: elm.name,
        subcategories: []
    };

    categories.push(category);

    elm.sub.forEach((subcat) => {
        const subcategory = {
            id: subcat.id,
            name: subcat.name,
            categoryId: elm.id
        }
        subcategories.push(subcategory);

        category.subcategories.push(subcategory)
    });

    catIdx[category.id] = category ;
});


const addNewWare = function (ware) {
    wares.push({
        name: ware.name,
        id: 999,
        sub: ware.sub
    });
}

generatedData.wares = wares;
generatedData.categories = categories;
generatedData.subcategories = subcategories;
generatedData.catIdx = catIdx;
generatedData.addNewWare = addNewWare;

export {generatedData};