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
        const offset = Math.min((this.state.sliderOffset + (clientX - this.state.clientX)), 0);

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
        let existedSubs = {};
        // Фильтр на категорию
        if (this.props.filter.category && this.props.filter.category !== "None"
            && (!this.props.filter.subcategory || this.props.filter.subcategory === "None")) {
            const subcategories = generatedData.catIdx[this.props.filter.category].subcategories;

            subcategories.forEach((sub) => {
                existedSubs[sub.id] = true;
            });
        }

        if (this.props.filter.subcategory && this.props.filter.subcategory !== "None") {
            existedSubs[this.props.filter.subcategory] = true;
        }

        this.props.wares.forEach((ware) => {
            if (this.props.filter.wareName) {
                // && !ware.name.startsWith(this.props.filter.wareName)
                const words = ware.name.split(" ");

                let suitable = false;
                for (let i = 0; i < words.length ; i++) {
                    if (words[i].startsWith(this.props.filter.wareName)) {
                        suitable = true;
                        break;
                    }
                }

                if (!suitable) {
                    return;
                }
            }

            if (existedSubs && existedSubs[ware.sub]
                || Object.keys(existedSubs).length === 0) {
                wares.push(ware);
            }
        })

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