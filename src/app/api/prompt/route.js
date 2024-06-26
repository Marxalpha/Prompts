import { connectToDB } from "../../../../utils/database";
import Prompt from "../../../../models/prompt";

export async function GET(request){
    try{
        await connectToDB();
        const prompts=await Prompt.find({}).populate('creator')

        // console.log(prompts.reverse())
        console.log("im in route of prompt api")
        return new Response(JSON.stringify(prompts.reverse()),{status:200})
    }
    catch(error){
        return new Response("Failed to fetch the cards",{status:500})
    }   
}