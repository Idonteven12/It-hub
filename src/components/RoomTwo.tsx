import React from "react";
import { useState } from "react";

export default function RoomTwo(){
const [modalContent, setModalContent] = useState({
    isActive: false,
    title: "",
    description: ""
});

const CABINETS = {
    1: {
        title: "Кабинет 1",
        description: "Описание для первого кабинета",

    },
    2: {
        title: "Кабинет 2",
        description: "Информация о втором кабинете",

    },
    3: {
        title: "Кабинет 3",
        description: "Третий кабинет - технический",

    },
    4: {
        title: "Кабинет 4",
        description: "Четвертый кабинет администрации",

    },
    5: {
        title: "Кабинет 5",
        description: "Пятый кабинет переговоров",

    },

    6: {
        title: "Кабинет 5",
        description: "Пятый кабинет переговоров",

    },

    7: {
        title: "Кабинет 5",
        description: "Пятый кабинет переговоров",

    },

    8: {
        title: "Кабинет 5",
        description: "Пятый кабинет переговоров",

    }
    };

const headerPathClick = (cabinetNum) => {
const cabinet = CABINETS[cabinetNum];
    setModalContent({
        isActive: true,
        title: cabinet.title,
        description: cabinet.description
    });
}
const closeModal = () => {
    setModalContent(prev => ({
        ...prev,
        isActive: false
    }));
};


    return(
    <>
        <div className=" w-[100%] h-[100%] flex items-center content-center">
            <div className="relative ">
                <svg viewBox="0 0 1038 309" className="absolute -top-3 left-0 w-[100%] h-[100%]"> 
                    <path   onClick={() => headerPathClick(1)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 223.01494,291.50994 V 176.4264 L 316,176.5 v 115.10937 z" />
                    <path   onClick={() => headerPathClick(2)}  className="fill-[#276545] stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 223.01494,291.50994 H 19.4375 L 19.51563,221.4375 132.5,221.5 H 223 Z" />
                    <path   onClick={() => headerPathClick(3)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 19.51563,221.4375 19.484375,85.9375 132.5,86 v 46 h -8 v 44.5 h 8 v 45 z" />
                    <path   onClick={() => headerPathClick(4)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 19.484375,85.9375 19.470372,18.548674 223,19 v 67 z" />
                    <path   onClick={() => headerPathClick(5)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 222.99637,130.33166 316,130.355 315.99796,18.600595 223.005,18.553655 Z" />
                    <path   onClick={() => headerPathClick(6)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="m 383.46867,130.4619 0.0127,-111.733202 103.49155,0.0488 L 487,130.501 Z" />
                    <path   onClick={() => headerPathClick(6)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 487,130.501 H 627.47713 L 627.5,19 H 487 Z" />
                    <path   onClick={() => headerPathClick(6)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="m 801.5,132.5 v -36 H 740 V 19 h 179 v 113.5 z" />
                    <path   onClick={() => headerPathClick(7)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="M 740.99441,289.99183 741,177 h 91 v 112.98117 z" />
                    <path   onClick={() => headerPathClick(8)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="m 832,289.98117 h 187.656 L 1019.4088,175.97027 832,177 Z" />
                    <path   onClick={() => headerPathClick(8)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="" />
                </svg>
                <img src="./public/map2.svg" alt="SVG map" className="w-full h-full object-contain"/>;
            </div>
        </div>

            {modalContent.isActive && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
            <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
                    <h2 className="text-xl font-bold mb-4">{modalContent.title}</h2>
                    <p>{modalContent.description}</p>
                <button  className="mt-4 bg-[#36BA6B] text-white px-4 py-2 rounded hover:bg-[#2da15a] transition-colors" onClick={closeModal}>Закрыть</button>
            </div>
        </div>
        )}
        
    </>
    )
}