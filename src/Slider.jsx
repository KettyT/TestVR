import * as React from 'react';
import {generatedData} from "./data/data";

class Slider extends React.Component {

    constructor() {
        super();

        this.state = {
            sliderOffset: 0,
            isMouseDown: false,
            clientX: -1
        };

        this.slider = null;
        this.sliderOffset = 0;
        this.lastClientX = 0;
    }

    mouseMove(evt) {
        if (!this.state.isMouseDown) {
            return;
        }

        evt.preventDefault();
        evt.stopPropagation();

        const clientX = evt.clientX;
        const offset = (this.state.sliderOffset + (clientX - this.state.clientX));
        this.slider.style.marginLeft = offset + "px"
        this.sliderOffset = offset;
        this.lastClientX = evt.clientX;
        /*const clientX = evt.clientX;

        this.setState(Object.assign(this.state, {
            sliderOffset: (clientX - this.state.clientX) - this.state.sliderOffset
        }));

        console.log(evt);*/
    }

    mouseDown(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        this.lastClientX = evt.clientX;
        // this.state.isMouseDown = true;
        this.setState(Object.assign(this.state, {
            isMouseDown: true,
            clientX: evt.clientX
        }));
    }

    mouseUp() {

        this.setState(Object.assign(this.state, {
            isMouseDown: false,
            sliderOffset: this.sliderOffset
        }));
    }

    render () {
        let wares = [];

        console.log(this.props.filter.category);

        // Фильтр на категорию
        if (this.props.filter.category && this.props.filter.category !== "None") {
            const subcategories = generatedData.catIdx[this.props.filter.category].subcategories;

            let existedSubs = {};
            subcategories.forEach((sub) => {
                existedSubs[sub.id] = true;
            });

            this.props.wares.forEach((ware) => {
                if (existedSubs[ware.sub]) {
                    wares.push(ware);
                }
            })

        } else {
            wares = this.props.wares;
        }


        return (
            <div className="slider-wrapper">
                <ul className="slider"
                    style={{marginLeft: this.state.sliderOffset}}
                    onMouseMove={(evt) => {this.mouseMove.call(this, evt)}}
                    onMouseDown={(evt) => {this.mouseDown.call(this, evt)}}
                    onMouseUp={() => {this.mouseUp.call(this)}}>

                    {wares.map((ware) => {
                        return (
                            <li className="product-card">
                                <div data-id={ware.id} className="border-product">
                                    <img src="img/product.svg" width="98" height="90" alt="Товар 1"/>
                                    <p>{ware.name}</p>
                                </div>
                            </li>
                        );
                    })}


                    {/*<li className="product-card">
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
                    </li>*/}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        const slider = document.querySelector(".slider-wrapper .slider");

        this.slider = slider;
    }
}


export default Slider;