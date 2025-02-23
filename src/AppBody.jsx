import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import NativeSelect from '@mui/material/NativeSelect';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Slider from "./Slider";
import {generatedData} from "./data/data";

class AppBody extends React.Component  {

    constructor() {
        super();

        this.BootstrapInput = styled(InputBase)(({ theme }) => ({
            'label + &': {
                marginTop: theme.spacing(3),
            },
            '&': {
                width: "100%"
            },
            '& .MuiInputBase-input': {
                borderRadius: 4,
                position: 'relative',
                backgroundColor: '#F3F6F9',
                border: '1px solid',
                borderColor: '#E0E3E7',
                fontSize: 16,
                width: '100%',
                padding: '10px 12px',
                transition: theme.transitions.create([
                    'border-color',
                    'background-color',
                    'box-shadow',
                ]),
                // Use the system font instead of the default Roboto font.
                fontFamily: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                ].join(','),
                '&:focus': {
                    boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
                    borderColor: theme.palette.primary.main,
                },
                ...theme.applyStyles('dark', {
                    backgroundColor: '#1A2027',
                    borderColor: '#2D3843',
                }),
            },
        }));

        this.state = {
            currentCategory: "None",
            currentSubcategory: "None",
            currentItemName: ""
        }
    }

    render() {
        const self = this;
        console.log(generatedData);

        const createWare = (event) => {
            const wareName = document.querySelector(".standart-input input");

            const subSelect = document.querySelector("#val2");
            const wareSub = subSelect.value;

            if (!wareName || !wareSub) {
                // todo Добавить ошибку
                return;
            }

            generatedData.addNewWare({
                name: wareName.value,
                sub: +wareSub
            });

            this.setState(this.state);
        };

        const handleItemNameInput = (event) => {
            let currentItemName = event.target.value;

            self.setState(Object.assign(this.state, {currentItemName: currentItemName}));
        };

        const handleChangeCategory = (event) => {
            let currentCategory = event.target.value;

            self.setState(Object.assign(this.state, {currentCategory: currentCategory}));
        };

        const handleChangeSubCategory = (event) => {
            let currentCategory = event.target.value;

            self.setState(Object.assign(this.state, {currentSubcategory: currentCategory}));
        };

        const categories = generatedData.categories;
        const subcategories = (this.state.currentCategory && this.state.currentCategory !== "None") ?
            generatedData.catIdx[this.state.currentCategory].subcategories  : generatedData.subcategories;
        const BootstrapInput = this.BootstrapInput;

        return (
            <main className="container">
                <div className="arrow-caption">
                    <div className="arrow-img">
                        <img src="img/arrow.svg" width="52" height="47" alt="Стрелка"/>
                    </div>
                    <h1 className="caption">Создать карточку товара</h1>
                </div>

                <h2 className="product-selection">Выберите товар из каталога</h2>
                <section className="input-wrapper">
                    <FormControl className="stretch" variant="standard">
                        <InputLabel shrink htmlFor="bootstrap-input">
                            Поиск по названию
                        </InputLabel>
                        <BootstrapInput
                            className="standart-input"
                            defaultValue=""
                            id="item-title"
                            onChange={handleItemNameInput}
                        />
                    </FormControl>
                    <div className="second-input">
                        <FormControl className="second-input--selector margin-right" sx={{ m: 1 }} variant="standard">
                            {/*<InputLabel htmlFor="demo-customized-select-native">Категория</InputLabel>*/}
                            <label className="css-1ew92b2-MuiFormLabel-root-MuiInputLabel-root">Категория</label>

                            <NativeSelect
                                key = "1"
                                id="val1"
                                value={this.state.currentCategory}
                                onChange={handleChangeCategory}
                                input={<BootstrapInput value = "BootstrapInput"/>}
                            >
                                <option aria-label="None" value="" />
                                {categories.map((category) => {
                                    return <option key={category.id} value = {category.id}>{category.name}</option>
                                })}

                            </NativeSelect>
                        </FormControl>
                        <div>

                        </div>
                        <FormControl className="second-input--selector margin-left" sx={{ m: 1 }} variant="standard">
                            {/*<InputLabel htmlFor="demo-customized-select-native">Подкатегория</InputLabel>*/}
                            <label className="css-1ew92b2-MuiFormLabel-root-MuiInputLabel-root">Подкатегория</label>
                            <NativeSelect
                                key = "2"
                                id="val2"
                                value={this.state.currentSubcategory}
                                onChange={handleChangeSubCategory}
                                input={<BootstrapInput />}
                            >
                                <option aria-label="None" value="" />
                                {subcategories.map((subcategory) => {
                                    return <option key={subcategory.id} value = {subcategory.id}>{subcategory.name}</option>
                                })}
                            </NativeSelect>
                        </FormControl>
                    </div>

                </section>

                <section className="slider-section">
                    <h2 className="visually-hidden">Карусель доступных товаров</h2>
                    <p className="available-products">Доступные товары</p>
                    <Slider wares = {generatedData.wares}
                        filter = {{
                            category: this.state.currentCategory,
                            subcategory: this.state.currentSubcategory,
                            wareName: this.state.currentItemName
                        }}
                    />
                </section>

                <section className="create-new-product">
                    <p className="last-par">Товара нет в списке?</p>
                    <button className="button-create"
                        onClick={createWare}>Создать новый товар +</button>
                </section>

            </main>
        );
    };

}


export default AppBody;
