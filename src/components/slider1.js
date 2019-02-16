import _ from 'lodash'
import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import Slider from "react-slick";

import {connect} from 'react-redux'
import { actions } from './../redux/modules/students'
import { sliderCurenciesSelector, isFetchingSelector } from './../redux/selectors/studentsSelector'


class SimpleSlider extends Component {
    render() {
        const {pupils, isFetching, rtl} = this.props
        const settings = {
            dots: false,
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 5,
            swipeToSlide: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            rtl
        };
        return pupils && !isFetching ?
            <div>
                <h2> Slider {this.props.sliderValue}</h2>
                    <Slider {...settings}>
                        {
                            _.map(pupils.data, curensy=>
                            <div key={curensy.id} className="">
                                <div>{curensy.symbol}</div>
                                <div>{curensy.name}</div>
                                <div>{curensy.price}</div>
                                <div>
                                    <NavLink to={`/currency/${curensy.symbol}`} className="a-padding-adding">
                                        check details...
                                    </NavLink>
                                </div>
                            </div>
                            )
                        }
                    </Slider>
            </div>
            :
            <div>Loading...</div>
    };
}

const mapDispatchToProps = {
    ...actions
}

const mapStateToProps = (state) => ({
    pupils:sliderCurenciesSelector(state),
    isFetching: isFetchingSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSlider)