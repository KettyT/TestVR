import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import NativeSelect from '@mui/material/NativeSelect';

function AppBody() {

    const BootstrapInput = styled(InputBase)(({ theme }) => ({
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

    const handleChange = () => {};

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
                    <BootstrapInput className="standart-input" defaultValue="" id="item-title" />
                </FormControl>
                <div className="second-input">
                    <FormControl className="second-input--selector margin-right" sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="demo-customized-select-native">Категория</InputLabel>
                        <NativeSelect
                            id="val1"
                            value=""
                            onChange={handleChange}
                            input={<BootstrapInput />}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                    <FormControl className="second-input--selector margin-left" sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="demo-customized-select-native">Подкатегория</InputLabel>
                        <NativeSelect
                            id="val2"
                            value=""
                            onChange={handleChange}
                            input={<BootstrapInput />}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                </div>

            </section>

            <section>
                <h2 className="visually-hidden">Карусель доступных товаров</h2>
                <p className="available-products">Доступные товары</p>
                <div className="slider-wrapper">
                    <ul className="slider">
                        <li className="product-card">
                            <div className="border-product">
                                <img src="img/product.svg" width="98" height="90" alt="Товар 1"/>
                                    <p>Juvederm VOLBELLA, <br/> Волбела 01</p>
                            </div>
                        </li>
                        <li className="product-card">
                            <div className="border-product">
                                <img src="img/product.svg" width="98" height="90" alt="Товар 2"/>
                                    <p>Juvederm VOLBELLA, <br/> Волбела 02</p>
                            </div>
                        </li>
                        <li className="product-card">
                            <div className="border-product">
                                <img src="img/product.svg" width="98" height="90" alt="Товар 3"/>
                                    <p>Juvederm VOLBELLA, <br/> Волбела 03</p>
                            </div>
                        </li>
                        <li className="product-card">
                            <div className="border-product">
                                <img src="img/product.svg" width="98" height="90" alt="Товар 4"/>
                                    <p>Juvederm VOLBELLA, <br/> Волбела 04</p>
                            </div>
                        </li>
                        <li className="product-card">
                            <div className="border-product">
                                <img src="img/product.svg" width="98" height="90" alt="Товар 5"/>
                                    <p>Juvederm VOLBELLA, <br/> Волбела 05</p>
                            </div>
                        </li>
                        <li className="product-card">
                            <div className="border-product">
                                <img src="img/product.svg" width="98" height="90" alt="Товар 6"/>
                                    <p>Juvederm VOLBELLA, <br/> Волбела 06</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="create-new-product">
                <p className="last-par">Товара нет в списке?</p>
                <button className="button-create">Создать новый товар +</button>
            </section>

        </main>
    );
}

export default AppBody;
