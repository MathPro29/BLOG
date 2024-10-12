import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <section className="body-font">
        <h1
          className="text-center justify-center flex pt-10 text-3xl"
          style={{ color: mode === "dark" ? "white" : "black" }}
        >
          โพสต์มาแรง🔥
        </h1>
        <div className="container px-5 py-10 mx-auto max-w-7xl ">
          {/* Main Content  */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {/* Card 1  */}
            <div className="p-4 md:w-1/3">
              <div
                style={{
                  background: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                  borderBottom:
                    mode === "dark"
                      ? " 4px solid rgb(226, 232, 240)"
                      : " 4px solid rgb(30, 41, 59)",
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === "dark" ? "shadow-gray-700" : "shadow-xl"} 
               rounded-xl overflow-hidden`}
              >
                {/* Blog Thumbnail  */}
                <img
                  className=" w-full"
                  src={
                    "public/FHD.png"
                  }
                  alt="blog"
                />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"25 Sep 2023"}
                  </h2>

                  {/* Blog Title  */}
                  <h1
                    className="title-font text-lg font-bold text-gray-900 mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"คอมพิวเตอร์"}
                  </h1>

                  {/* Blog Description  */}
                  <p
                    className="leading-relaxed mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    คอมเปิดติดแต่ไม่ขึ้นภาพ
                    เคยให้ช่างแถวบ้านดูแต่ลงวินโดวส์ใหม่คิด 300 บาท
                    แบบนี้โดนหลอกไหมคะ ?
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2  */}
            <div className="p-4 md:w-1/3">
              <div
                style={{
                  background: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                  borderBottom:
                    mode === "dark"
                      ? " 4px solid rgb(226, 232, 240)"
                      : " 4px solid rgb(30, 41, 59)",
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === "dark" ? "shadow-gray-700" : "shadow-xl"} 
               rounded-xl overflow-hidden`}
              >
                {/* Blog Thumbnail  */}
                <img
                  className=" w-full"
                  src={
                    "public/FHD.png"
                  }
                  alt="blog"
                />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"25 Sep 2023"}
                  </h2>

                  {/* Blog Title  */}
                  <h1
                    className="title-font text-lg font-bold text-gray-900 mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"ของกิน ของโปรด"}
                  </h1>

                  {/* Blog Description  */}
                  <p
                    className="leading-relaxed mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {
                      "อยากให้มีไอติมรสทุเรียนที่ใส่ผงหม่าล่าด้วยครับ คือผมเลิฟทั้ง 2 เลย งื้ออ >///<"
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 md:w-1/3">
              <div
                style={{
                  background: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                  borderBottom:
                    mode === "dark"
                      ? " 4px solid rgb(226, 232, 240)"
                      : " 4px solid rgb(30, 41, 59)",
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === "dark" ? "shadow-gray-700" : "shadow-xl"} 
               rounded-xl overflow-hidden`}
              >
                {/* Blog Thumbnail  */}
                <img
                  className=" w-full"
                  src={
                    "public/FHD.png"
                  }
                  alt="blog"
                />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"25 Sep 2023"}
                  </h2>

                  {/* Blog Title  */}
                  <h1
                    className="title-font text-lg font-bold text-gray-900 mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"ดนตรี"}
                  </h1>

                  {/* Blog Description  */}
                  <p
                    className="leading-relaxed mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    ผมทะเลาะกับเพื่อนผมที่เป็นนักดนตรีนานมากว่า
                    พระอภัยมณีเป่าปี่หรือเป่าขลุ่ย ผมเลยสวนไปว่า เป่าแคน!!!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 mx-auto">
            <p className="text-lg font-md font-bold " style={{ color: mode === 'dark' ? 'white' : 'black' }}>หัวข้อสนทนา</p>
            <img
              src="public/megaphone-svgrepo-com.svg"
              alt="megaphone"
              className="w-9 h-9"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPostCard;
