import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    content: {
      type: String,
      required: true,
    },

    author: {
      name: {
        type: String,
        default: "Ankan Guha",
      },
      signature: {
        type: String,
        default: "— Ankan",
      },
    },

    stats: {
      views: { type: Number, default: 0 },
      likes: { type: Number, default: 0 },
      shares: { type: Number, default: 0 },
    },

    comments: [
      {
        name: String,
        message: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true, // createdAt, updatedAt AUTO
  }
);

export default mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema);
