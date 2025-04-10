import React from "react";
import { useState } from "react";

export default function RoomOne(){
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
                    <path   onClick={() => headerPathClick(1)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 558,114.896 657.92719,139.45804 658,23 558.07634,22.986528 Z" />
                    <path   onClick={() => headerPathClick(2)}  className="fill-[#276545] stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="m 462.76927,113.2414 1.21829,-90.402657 94.08878,0.147785 L 558,114.896 551,113 l -21.5,-1.5 -20.42,-6.555 z" />
                    <path   onClick={() => headerPathClick(3)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 358,131.798 V 23 l 105.98756,-0.161257 -1.21829,90.402657 z" />
                    <path   onClick={() => headerPathClick(4)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 294.99737,291.554 20.488982,291.5438 c 0,0 -0.0033,-268.555124 -0.01907,-268.543554 C 20.454179,23.011766 358,23 358,23 l -0.22197,109.684 -62.80487,-0.17256 z" />
                    <path   onClick={() => headerPathClick(5)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="m 720.5182,196.17961 -0.008,-173.191578 296.9772,-0.01586 0.039,172.265958 L 913,195 v -33.259 l -93.5,-0.499 V 196 Z" />
                    <path   onClick={() => headerPathClick(6)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="M 720.4836,291.59049 720.5182,196.17961 819.5,196 v -34.758 l 93.5,0.499 V 195 l 104.5264,0.23813 v 96.37156 z" />
                    <path   onClick={() => headerPathClick(7)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="m 456.96904,291.60451 2.04838,-109.76274 100.01825,0.85249 -2.03939,108.98554 z" />
                    <path   onClick={() => headerPathClick(8)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="M 556.99628,291.6798 655.49419,291.54524 656,184.7 559.03567,182.69426 Z" />
                </svg>
                <img src="/public/map.svg" alt="SVG map" className="w-full h-full object-contain"/>;
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