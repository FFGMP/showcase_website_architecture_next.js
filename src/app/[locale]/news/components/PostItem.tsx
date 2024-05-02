"use client";
import Image from "next/image";
import { useState } from "react";

type NewsPost = {
  News: {
    Title: string;
    Date: string;
    Text: string;
    Category: string;
    Image: {
      name: string;
      url: string;
      description: string;
    };
  };
};

export function PostItem({ newsPost }: { newsPost: NewsPost }) {
  const [getChecked, setChecked] = useState(false);

  return (
    <label>
      <input hidden type="radio" name="radioNewspost" className="peer"></input>
      <div className="flex flex-col py-2">
        <p className="font-bold">{newsPost.News.Title}</p>
        <p className="text-xs">{newsPost.News.Date}</p>
      </div>
      <div className="max-h-0 overflow-hidden duration-700 ease-in-out peer-checked:max-h-[100rem] peer-checked:duration-1000">
        <div className="flex flex-col md:block">
          <Image
            src={newsPost.News.Image.url}
            alt={newsPost.News.Image.description}
            width={480}
            height={480}
            className="float-right mx-auto pb-3 md:mx-0"
          />
          <p className="text-sm font-light lg:max-w-[50%]">
            {newsPost.News.Text.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </label>
  );
}
