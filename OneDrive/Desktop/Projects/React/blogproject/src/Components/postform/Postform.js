import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../main";
import databaseservice from "../../appwrite/database";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Postform({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? databaseservice.uploadFile(data.image[0])
        : null;

      if (file) {
        databaseservice.deleteFile(post.featuredImage);
      }
      const dbPost = await databaseservice.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/posts/${dbPost.$id}`);
      }
    } else {
      const file = await databaseservice.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await databaseservice.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }
    return "";
  }, []);
  React.useEffect(() => {
    const subscripton = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });
    return () => {
      subscripton.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title : "
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        ></Input>
        <Input
          label="Slug : "
          placeholder="Slug"
          className="mb-4"
          {...register("Slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        ></Input>
        <RTE
          label="Content : "
          name="content"
          control={control}
          defaultValue={getValues("content")}
        ></RTE>
      </div>
      <div className="w-1/3 px-2">
        <Input
          className="mb-4"
          label="Featured Image : "
          type="file"
          accept="image/png,image/jpg,image/jpeg, image/gif"
          {...register("image", { required: !post })}
        ></Input>
        {post && (
          <div className="w-full mb-4">
            <img
              src={databaseservice.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        ></Select>
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default Postform;
