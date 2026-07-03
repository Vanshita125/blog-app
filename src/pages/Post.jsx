import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../Comp";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    // SAFE: no crash even when post/userData is null
    const isAuthor = post?.userId === userData?.$id;

    useEffect(() => {
        if (!slug) {
            navigate("/");
            return;
        }

        appwriteService
            .getPost(slug)
            .then((post) => {
                if (post) {
                    setPost(post);
                } else {
                    navigate("/");
                }
            })
            .catch(() => navigate("/"));
    }, [slug, navigate]);

    const deletePost = () => {
        if (!post) return;

        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    // LOADING STATE (prevents crash)
    if (!post) {
        return (
            <div className="py-8 text-center">
                Loading post...
            </div>
        );
    }
   console.log(appwriteService.getFileView(post.featuredImage));
    return (
        <div className="py-8">
            <Container>
                {/* IMAGE SECTION */}
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={appwriteService.getFileView(post.featuredImage.toString())}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {/* AUTHOR ACTIONS */}
                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>

                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* TITLE */}
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">
                        {post.title}
                    </h1>
                </div>

                {/* CONTENT */}
                <div className="browser-css">
                    {post.content ? parse(post.content) : null}
                </div>
            </Container>
        </div>
    );
}