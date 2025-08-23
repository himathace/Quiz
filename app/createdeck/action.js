"use server"

async function CreateNewDeck(formData){
    try{

        const DECKtitlte=formData.get("deckname")
    
        await fetch("http://localhost:3000/api/newdeck",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                title:DECKtitlte
            })
        })
    }
    catch(error){
        console.log(error)

    }

}


export default CreateNewDeck