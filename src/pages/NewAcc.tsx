import React, { useState } from "react";
import {GetAllFavedPeople, GetAllLikesPeople, signIn, GetAllFavedPlanets, GetAllLikesPlanets, GetAllFavedFilms, GetAllLikesFilms, GetAllFavedSpecies, GetAllLikesSpecies, GetAllFavedVechicle, GetAllLikesVechicle, GetAllFavedStarships, GetAllLikesStarships} from "../components/Firebase"
import '../main.scss';
import { user } from "./HomePage";


window.onload = function() {
    GetAllFavedPeople()
    GetAllLikesPeople()
    GetAllFavedPlanets()
    GetAllLikesPlanets()
    GetAllFavedFilms()
    GetAllLikesFilms()
    GetAllFavedSpecies()
    GetAllLikesSpecies()
    GetAllFavedVechicle()
    GetAllLikesVechicle()
    GetAllFavedStarships()
    GetAllLikesStarships()
} 

export function NewAcc () {
    const [chosen, setChosen] = useState("")
    if(localStorage.getItem("name") == null){
        return <div><div><h1 className="NotLoginText">You must be logged in to see posts</h1></div>
        <div className="SignInButton"> <button className="SignInBut" onClick={signIn}>Sign in using Google</button></div></div>
    }
    function CheckIfLoggedIn(): any{
        if(localStorage.getItem("name") == null){
            return <div><h1>You must be logged in to see liked posts </h1></div>
        }else{
            if(chosen == " People"){
                return <div>
                <h1>People likes: {localStorage.getItem("LikedPeoplebyUser")}</h1>
                <h2>People Faved: {localStorage.getItem("FavedPeoplebyUser")}</h2></div>
            }else if(chosen == " Planets"){
                return <div>
                <h1>Planets likes: {localStorage.getItem("LikedPlanetsbyUser")}</h1>
                <h2>Planets Faved: {localStorage.getItem("FavedPlanetsbyUser")}</h2></div>
            }else if(chosen == " Films"){
                return <div>
                <h1>Films likes: {localStorage.getItem("LikedFilmsbyUser")}</h1>
                <h2>Films Faved: {localStorage.getItem("FavedFilmsbyUser")}</h2></div>
            }else if(chosen == " Species"){
                return <div>
                <h1>Species likes: {localStorage.getItem("LikedSpeciesbyUser")}</h1>
                <h2>Species faved: {localStorage.getItem("FavedSpeciesbyUser")}</h2></div>
            }else if(chosen == " Starships"){
                return <div>
                <h1>Starships likes: {localStorage.getItem("LikedStarshipsbyUser")}</h1>
                <h2>Starships faved: {localStorage.getItem("FavedStarshipsbyUser")}</h2></div>
            }else if(chosen == " Vechicle"){
                return <div>
                <h1>Vechicle likes: {localStorage.getItem("LikedVechiclebyUser")}</h1>
                <h2>Vechicle faved: {localStorage.getItem("FavedVechiclebyUser")}</h2></div>
            }else if(chosen ==" All"){
                return <div><div>
                <h1>People likes: {localStorage.getItem("LikedPeoplebyUser")}</h1>
                <h1>People Faved: {localStorage.getItem("FavedPeoplebyUser")}</h1></div>
                <div>   
                <h1>Planets likes: {localStorage.getItem("LikedPlanetsbyUser")}</h1>
                <h1>Planets Faved: {localStorage.getItem("FavedPlanetsbyUser")}</h1></div>
                <div>
                <h1>Films likes: {localStorage.getItem("LikedFilmsbyUser")}</h1>
                <h1>Films Faved: {localStorage.getItem("FavedFilmsbyUser")}</h1></div>
                <div>
                <h1>Species likes: {localStorage.getItem("LikedSpeciesbyUser")}</h1>
                <h1>Species faved: {localStorage.getItem("FavedSpeciesbyUser")}</h1></div>
                <div>
                <h1>Starships likes: {localStorage.getItem("LikedStarshipsbyUser")}</h1>
                <h1>Starships faved: {localStorage.getItem("FavedStarshipsbyUser")}</h1></div>
                <div>
                <h1>Vechicle likes: {localStorage.getItem("LikedVechiclebyUser")}</h1>
                <h1>Vechicle faved: {localStorage.getItem("FavedVechiclebyUser")}</h1></div>
                </div>}
        }
    }
    
    return (
    <div className="SignInButton"> <button className="SignInBut" onClick={signIn}>Sign in using Google</button>
    <div>
        <select className="filter-button"
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
            <option value=" All"> Show all</option>
        </select>
       <h1>Chosen: {chosen}</h1>
        </div>
        <div>
            <CheckIfLoggedIn/>
        </div>
    </div>
    )
    
}

export default NewAcc