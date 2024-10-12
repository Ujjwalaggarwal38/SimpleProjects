import React, { useEffect, useState } from "react";
import databaseservice from "../appwrite/database";
import { Container, PostCard } from "../Components/main";

function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  databaseservice.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
