"use client"
import { useState,useEffect} from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Profile from "../../../components/Profile"
const MyProfile = () => {

    const {data: session}=useSession();
    const [posts, setPosts] = useState([])
    const router = useRouter();

    const fetchPosts=async()=>{
        const response = await fetch(`/api/users/${session?.user?.id}/posts`);
        const data=await response.json();
        setPosts(data);
        console.log("Inside fetchPosts data is ",data)
      }

    useEffect(()=>{
        if (session?.user.id) fetchPosts()
    },[])

    const handleEdit = (post) =>
    {
      router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async(post)=>
    {
      const hasConfirmed = confirm("Are you sure u want to delete this prompt? ");
      if (hasConfirmed)
      {
        try{
          await fetch(`api/prompt/${post._id}`,{
            method: 'DELETE'
          })

          const filteredPosts = posts.filter((p)=>p._id !== post._id)
          setPosts(filteredPosts)
        }
        catch(error)
        {
          console.log(error)
        }
      }
    }

  return (
    <Profile
        name={session?.user.name}
        desc=""
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile