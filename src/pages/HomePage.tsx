import '../main.scss'

export function HomePage() { 
    return <h1 className="MainPageText">Glowna dziala</h1> 
  }
  

  export const user : any = localStorage.getItem("name")
  export const email: any = localStorage.getItem("email")