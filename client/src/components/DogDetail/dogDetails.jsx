import React from "react";
import { useEffect } from "react";
import {useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getDetail, getDogs, getDogTemperament } from "../../actions/index";
import { Link } from "react-router-dom";
import img from "../img/back.png"
import "./dogDetails.css"


export default function DogDetail() {
    useEffect(() => {
        dispatch(getDetail(id));
    },[])
    
    const selectedDog = useSelector((state) => state.dogs)
    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(selectedDog)
    

    let temp = "";
    typeof selectedDog[0].temperament === "object"
    ? temp = selectedDog[0].temperament.map(t => {
        return t.name
    }).join(", ") : selectedDog[0].temperament = selectedDog[0].temperament
    
    return (
        <div className="walpaperDetalle">
            {
                <div className="card-contenedor">
                    <div className="card-content">
                        <Link to='/home'>
                            <img
                                src={img}
                                alt=""
                                className="imgBackDetail"
                            />
                        </Link>
                        <h1 className="name">{selectedDog[0].name}</h1>
                        <div className="wightHeight">
                            <h3 className="wightHeightLifeSpan">Peso: {selectedDog[0].weight[0] + - + selectedDog[0].weight[1]} kg</h3>
                            <h3 className="wightHeightLifeSpan">Tamaño: {selectedDog[0].height[0] + - + selectedDog[0].height[1]} cm</h3>
                        </div>
                        <h3 className="wightHeightLifeSpan">Esperanza de vida: {selectedDog.createdAtDb ? selectedDog[0].lifeSpan + "years" : selectedDog[0].lifeSpan} </h3>
                        <h2 className="temperamentDetalle">Temperamentos: {selectedDog[0].createdAtDb ? temp : selectedDog[0].temperament }.</h2>
                        <div className="divImgDetail">
                        <img
                            src={selectedDog[0].image}
                            alt=""
                            className="pictureDetalle"
                        />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}