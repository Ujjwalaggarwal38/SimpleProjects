import React, { useEffect, useState } from "react";
import databaseservice from "../appwrite/database";
import { Container, PostCard } from "../Components/main";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    databaseservice.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post}></PostCard>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
