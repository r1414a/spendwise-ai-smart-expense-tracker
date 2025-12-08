import BlogPost from "../model/posts.model.js";


export const getPostByID = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const post = await BlogPost.findById(id).select("title images.individualPageDesktop").lean();
        console.log(post)

        if (!post) {
            return res
                .status(404)
                .json({ message: "Post not found" });
        }
        post.content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ...";
        post.title = "Frying pan"

        res.status(200).json({ data: post, message: "post fetched." })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "error while fetching post by id" });
    }
}