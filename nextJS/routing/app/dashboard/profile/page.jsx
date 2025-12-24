"use client";

import React from "react";
import Card from "@/components/Card"; // adjust path if needed
import Image from "next/image";

export default function Profile() {
  const user = {
    name: "Nina Valentine",
    job: "Actress",
    email: "nina_val@example.com",
    bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet odio augue, in dapibus lacus imperdiet ut. Quisque elementum placerat neque rhoncus tempus.`,
    avatar: "/avatars/avatar3.png",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://www.x.com",
      facebook: "https://facebook.com",
    },
  };

  return (
    <div className="bg-[url('/user1.png')] bg-cover bg-center h-64 w-full">
   <Card className="max-w-4xl w-full p-6">
        {/* Go Back Link */}
        <div className="mb-4">
          <a href="#" className="text-blue-600 hover:underline">
            &larr; Go back
          </a>
        </div>

        {/* Top Section: Avatar + Info + Social */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 border-b pb-6 mb-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <Image
              src={user.avatar}
              alt={user.name}
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>

          {/* User Info */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">Name</p>
              <p className="text-gray-900 font-medium">{user.name}</p>

              <p className="text-gray-500 text-sm mt-2">Job Title</p>
              <p className="text-gray-900 font-medium">{user.job}</p>

              <p className="text-gray-500 text-sm mt-2">Email</p>
              <p className="text-blue-600 hover:underline">{user.email}</p>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-500 text-sm">LinkedIn</p>
              <a
                href={user.social.linkedin}
                className="text-blue-600 hover:underline"
              >
                {user.social.linkedin}
              </a>

              <p className="text-gray-500 text-sm mt-2">Twitter</p>
              <a
                href={user.social.twitter}
                className="text-blue-600 hover:underline"
              >
                {user.social.twitter}
              </a>

              <p className="text-gray-500 text-sm mt-2">Facebook</p>
              <a
                href={user.social.facebook}
                className="text-blue-600 hover:underline"
              >
                {user.social.facebook}
              </a>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-4">
          <p className="text-gray-500 text-sm mb-1">Bio</p>
          <p className="text-gray-700">{user.bio}</p>
        </div>

        {/* Edit Profile Link */}
        <div>
          <a href="#" className="text-blue-600 hover:underline">
            Edit Profile
          </a>
        </div>
      </Card>
    </div>
  );
}
