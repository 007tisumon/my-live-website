import React from 'react'

const Card = ({title , des ,imgsrc}) => {
    console.log(title)
    return (
        <>
             <div className="w-full mx-auto  ">
                <div className="bg-white  shadow-md border border-gray-200 w-70 h-auto rounded-lg max-w-sm mb-5">
                    <a href="#">
                        <img className="rounded-t-lg" src={imgsrc} alt="product" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
                        </a>
                        <p className="font-normal text-gray-700 text-sm mb-3">{des}</p>
                        <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
