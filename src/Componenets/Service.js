import React from 'react'
import Card from './Card'
import sData from './Data'

const Service = () => {
    return (
        <>
            <div className="mt-5">
                <div className="">
                    <div className="md:grid md:grid-cols-3 gap-4  ">
                        {
                            sData.map((val, index) => {
                                const {id, imgsrc,title , des} = val
                                return <Card
                                    key={id}
                                    imgsrc={imgsrc}
                                    title={title}
                                    des={des}
                                />

                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Service