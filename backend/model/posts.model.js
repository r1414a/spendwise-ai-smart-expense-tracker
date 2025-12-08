import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    postID: {
        type: String,
        unique: true, //index?
        required:true
    },
    title: {
        type: String,
        required: true,
        // minlength: [5, "Title must be at least 5 characters long"],
        // maxlength: [150, "Title cannot exceed 150 characters"],
    },
    images: {
        homeSectionDesktop: String,
        homeSectionMobile: String,
        individualPageDesktop: String,
        individualPageMobile: String,
    },
    content: {
        type: String,
    },
    contentText: {
      type: String,
    },
    tags: {
        type: [{type: String, index: true}],
    },
    // author: { type: Schema.Types.ObjectId, ref: 'AdminUser', required: true}, //author will be one user from user model
    author: {
        type: String,
        required: true
    }, //author will be one user from user model
    seoSettings: {
        title: {
            type: String,
            // maxlength: [70, "SEO Title cannot exceed 70 characters"],
        },
        slug: {
            type: String,
            unique: true,
            required:true,
            lowercase:true,
            index: true
        },
        metaDesc: {
            type: String,
        }
    },
    postStatus: {
        type: String,
        enum: ["draft","published","archived"],
        default: "draft",
        index: true
    },
    publishedAt: {
        type: Date,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    commentEnabled: {
        type: Boolean,
        default: false
    },
    // isAllTmpImagesRemoved: {
    //   type: Boolean,
    //   default: false,
    // },
    sourceSection: {
        type: String,
        enum: ["hero", "related", "new", "latest"],
        required: true,
    }
},{
    timestamps: true
})

const BlogPost = mongoose.models.BlogPost || mongoose.model('BlogPost', PostSchema)

export default BlogPost;