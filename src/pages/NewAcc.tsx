import React, { useState } from "react";
import {GetAllFavedPeople, GetAllLikesPeople, signIn, GetAllFavedPlanets} from "../components/Firebase"
import '../main.scss';


window.onload = function() {
    GetAllFavedPeople()
    GetAllLikesPeople()
    GetAllFavedPlanets()
} 

export function NewAcc () {
    const [chosen, setChosen] = useState("")
    const [wybrane, setWybrane] = useState("")

    function FilterHandler(): any{
        if(chosen == " People"){
            return <div>
            <h1>People likes: {localStorage.getItem("LikedPeople")}</h1>
            <h2>People Faved: {localStorage.getItem("FavedPeople")}</h2></div>
        }else if(chosen == " Planets"){
            return <div>
            <h1>Planets likes: {localStorage.getItem("LikedPlanets")}</h1>
            <h2>Planets Faved: {localStorage.getItem("FavedPlanets")}</h2></div>
        }else if(chosen == " Films"){
            return <div>
            <h1>Films likes: {localStorage.getItem("LikedFilms")}</h1>
            <h2>Films Faved: {localStorage.getItem("FavedFilms")}</h2></div>
        }else if(chosen == " Species"){
            return <div>
            <h1>Species likes: {localStorage.getItem("LikedSpecies")}</h1>
            <h2>Species faved: {localStorage.getItem("FavedSpecies")}</h2></div>
        }else if(chosen == " Starships"){
            return <div>
            <h1>Starships likes: {localStorage.getItem("LikedStarships")}</h1>
            <h2>Starships faved: {localStorage.getItem("FavedStarships")}</h2></div>
        }else if(chosen == " Vechicle"){
            return <div>
            <h1>Vechicle likes: {localStorage.getItem("LikedVechicle")}</h1>
            <h2>Vechicle faved: {localStorage.getItem("FavedVechicle")}</h2></div>
        }else if(chosen ==" All"){
            return <div><div>
            <h1>People likes: {localStorage.getItem("LikedPeople")}</h1>
            <h1>People Faved: {localStorage.getItem("FavedPeople")}</h1></div>
            <div>   
            <h1>Planets likes: {localStorage.getItem("LikedPlanets")}</h1>
            <h1>Planets Faved: {localStorage.getItem("FavedPlanets")}</h1></div>
            <div>
            <h1>Films likes: {localStorage.getItem("LikedFilms")}</h1>
            <h1>Films Faved: {localStorage.getItem("FavedFilms")}</h1></div>
            <div>
            <h1>Species likes: {localStorage.getItem("LikedSpecies")}</h1>
            <h1>Species faved: {localStorage.getItem("FavedSpecies")}</h1></div>
            <div>
            <h1>Starships likes: {localStorage.getItem("LikedStarships")}</h1>
            <h1>Starships faved: {localStorage.getItem("FavedStarships")}</h1></div>
            <div>
            <h1>Vechicle likes: {localStorage.getItem("LikedVechicle")}</h1>
            <h1>Vechicle faved: {localStorage.getItem("FavedVechicle")}</h1></div>
            </div>
        }
    }
    
    return (
    <div className="SignInButton"> <button className="SignInBut" onClick={signIn}>Sign in using Google</button>
    <div>
        <select className="custom-select"
        onChange={(e)=>{
            const selectedType = e.target.value
            setChosen(selectedType)
            setWybrane(selectedType)
            
        }}>
            <option value=" People"> People</option>
            <option value=" Planets"> Planets</option>
            <option value=" Films"> Films</option>
            <option value=" Species"> Species</option>
            <option value=" Starships"> Starships</option>
            <option value=" Vechicle"> Vechicle</option>
            <option value=" All"> Show all</option>
        </select>
        {chosen}
        </div>
        <div>
            <FilterHandler></FilterHandler>

        </div>
    </div>
    )
    
}

export default NewAcc