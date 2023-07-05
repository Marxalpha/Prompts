import Prompt from "../../../../../../models/prompt";
import { connectToDB } from "/utils/database";
export async function GET(request,{params}){
    try{
        console.log("hii")
        console.log(params)
        await connectToDB();
        const prompts=await Prompt.find({creator:params.id}).populate('creator')
        console.log({prompts})
        console.log("im in route of prompt api")
        return new Response(JSON.stringify(prompts),{status:200})
    }
    catch(error){
        return new Response("Failed to fetch the cards",{status:500})
    }
}