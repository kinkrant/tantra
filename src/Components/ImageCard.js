import { Fragment } from "react";



const ImageCard = (props) =>{

    return(
        <Fragment>
            
                <div className="md:m-0  rounded-md p-1">
                    <div className=" font-semibold py-2 my-2 border-b border-gray-800">{props.name}</div>
                   <div className="relative">
                   <img src={props.img} alt="test" className="" />
                   <div className="absolute top-0 right-0 text-sm px-2 rounded-bl-md bg-green-700 text-gray-100">{props.le}</div>
                   <div className="absolute bottom-0 right-0 text-sm px-2 rounded-tl-md bg-red-700 text-gray-100">{props.sold}</div>
                   </div>
                   <div className="text-xs py-2 my-2 border-t border-gray-800 ">{props.art} <br/>{props.size} </div>
                </div>
        </Fragment>
    )
}

export default ImageCard;