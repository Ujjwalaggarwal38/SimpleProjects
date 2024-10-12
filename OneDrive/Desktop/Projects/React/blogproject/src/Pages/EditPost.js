import React,{useEffect,useState} from 'react'
import { Container,Postform } from '../Components/main'
import databaseservice from '../appwrite/database'
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [posts,setPosts] = useState([]);
    const {slug} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        if(slug){
            databaseservice.getPost(slug).then((post) => {
                if(post){
                    setPosts(post)
                }
            })
        }
        else{
            navigate('/')
        }
    },[slug,navigate])
  return posts ? <div className='py-8'>
    <Container>
        <Postform post={posts} />
    </Container>
  </div>:null
    
}

export default EditPost