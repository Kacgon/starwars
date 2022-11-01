import React from "react";
import {GetAllFavedPeople, GetAllLikesPeople, signIn, GetAllFavedPlanets} from "../components/Firebase"
import '../main.scss';


window.onload = function() {
    GetAllFavedPeople()
    GetAllLikesPeople()
    GetAllFavedPlanets()
} 


function NewAcc () {

    return (
    <div className="SignInButton"> <button className="SignInBut" onClick={signIn}>Sign in using Google</button>   
    <div className="LoggedInText">Logged in : {localStorage.getItem("name")}</div>
    <h1 className="Text">Faved People : {localStorage.getItem("FavedPeople")}</h1>
    <h1 className="Text">Liked People : {localStorage.getItem("LikedPeople")} </h1>
    <h1 className="Text">Faved Planets : {localStorage.getItem("FavedPlanets")} </h1>
    <h1 className="Text">Liked Planets : {localStorage.getItem("LikedPlanets")}</h1>
    <h1 className="Text">Liked Films: {localStorage.getItem("LikedFilms")}</h1>
    <h1 className="Text">Faved Films: {localStorage.getItem("FavedFilms")}</h1>
    <h1 className="Text">Liked Species: {localStorage.getItem("LikedSpecies")}</h1>
    <h1 className="Text">Faved Species: {localStorage.getItem("FavedSpecies")}</h1>
    <h1 className="Text">Liked Starships: {localStorage.getItem("LikedStarships")}</h1>
    <h1 className="Text">Faved Starships: {localStorage.getItem("FavedStarships")}</h1>
    <h1 className="Text">Liked Vechicle: {localStorage.getItem("LikedVechicle")}</h1>
    <h1 className="Text">Faved Vechicle: {localStorage.getItem("FavedVechicle")}</h1>
    </div>
    )
    
}

export default NewAcc