import React from 'react';
import articleData from "../../../public/NewsDetailData.json";
import { FaRegClock, FaUser } from "react-icons/fa";
import { useParams } from 'react-router-dom';

const NewsDetails = () => {
    const { id } = useParams(); // Lấy id từ URL params
    const data = articleData.find(article => article.query === id); // Tìm bài viết theo query.id

    // Kiểm tra nếu không tìm thấy bài viết
    if (!data) {
        return (
            <div className="mx-auto p-6 !text-white">
                <h1 className="text-3xl font-bold mb-4">Bài viết không tồn tại</h1>
            </div>
        );
    }

    return (
        <div className="mx-auto p-6 !text-white pt-10">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

            {/* Post Info */}
            <div className="flex flex-col md:flex-row md:space-x-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center mb-2 md:mb-0 !text-white">
                    <FaRegClock className="w-4 h-4 mr-2 !text-white" />
                    {data.date}
                </div>
                <div className="flex items-center !text-white">
                    <FaUser className="w-4 h-4 mr-2 !text-white" />
                    {data.author}
                </div>
            </div>

            {/* Sections */}
            <div className="rte">
                {data.sections.map((section, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                        {section.content && <p className="mb-4">{section.content}</p>}
                        {section.ingredients && (
                            <ul className="list-disc pl-5 space-y-2 mb-4">
                                {section.ingredients.map((ingredient, i) => (
                                    <li key={i}>{ingredient}</li>
                                ))}
                            </ul>
                        )}
                        {section.steps && (
                            <ol className="list-decimal pl-5 space-y-2 mb-4">
                                {section.steps.map((step, i) => (
                                    <li key={i}>{step}</li>
                                ))}
                            </ol>
                        )}
                    </div>
                ))}

                {/* Images */}
                {data.images.map((image, index) => (
                    <figure key={index} className="mb-4">
                        <img
                            src={image.src}
                            alt={image.caption}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                        <figcaption className="text-sm text-gray-600 text-center mt-2 !text-white">
                            {image.caption}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </div>
    );
};

export default NewsDetails;
