import React, { useState } from "react";
import {GetAllFavedPeople, GetAllLikesPeople, signIn, GetAllFavedPlanets} from "../components/Firebase"
import '../main.scss';


window.onload = function() {
    GetAllFavedPeople()
    GetAllLikesPeople()
    GetAllFavedPlanets()
} 

function PeopleFilter() {
    alert('asd')
    return <h1>People like: {localStorage.getItem("LikedPeople")}</h1>

}

function NewAcc () {
    const [chosen, setChosen] = useState("")
    
    return (
    <div className="SignInButton"> <button className="SignInBut" onClick={signIn}>Sign in using Google</button>
    <div>
        <select className="custom-select"
        onChange={(e)=>{
            const selectedType = e.target.value
            setChosen(selectedType)
        }}>
            <option value=" People"> People</option>
            <option value=" Planets"> Planets</option>
            <option value=" Films"> Films</option>
            <option value=" Species"> Species</option>
            <option value=" Starships"> Starships</option>
            <option value=" Vechicle"> Vechicle</option>
        </select>
        {chosen}
        </div>
    <div className="LoggedInText">Logged in : {localStorage.getItem("name")}</div>
    <div className="Text">Faved People : {localStorage.getItem("FavedPeople")}</div>
    <div className="Text">Liked People : {localStorage.getItem("LikedPeople")} </div>
    <div className="Text">Faved Planets : {localStorage.getItem("FavedPlanets")} </div>
    <div className="Text">Liked Planets : {localStorage.getItem("LikedPlanets")}</div>
    <div className="Text">Liked Films : {localStorage.getItem("LikedFilms")}</div>
    <div className="Text">Faved Films : {localStorage.getItem("FavedFilms")}</div>
    <div className="Text">Liked Species : {localStorage.getItem("LikedSpecies")}</div>
    <div className="Text">Faved Species : {localStorage.getItem("FavedSpecies")}</div>
    <div className="Text">Liked Starships : {localStorage.getItem("LikedStarships")}</div>
    <div className="Text">Faved Starships : {localStorage.getItem("FavedStarships")}</div>
    <div className="Text">Liked Vechicle : {localStorage.getItem("LikedVechicle")}</div>
    <div className="Text">Faved Vechicle : {localStorage.getItem("FavedVechicle")}</div>
    </div>
    )
    
}

export default NewAcc