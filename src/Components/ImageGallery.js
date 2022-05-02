import { Fragment } from "react";
import ImageCard from "./ImageCard";




const ImageGallery = (props) =>{

    const cols = props.painting.map((fetchData) => (
            <div className="lg:col-span-3 md:col-span-4 col-span-12 md:px-6" key={fetchData.id}>
                    <ImageCard img={fetchData.img} name={fetchData.name} art={fetchData.art} sold={fetchData.sold} le={fetchData.le} size={fetchData.size} />
                </div>
        ));

    return(
        <Fragment>
                <div className="grid grid-cols-12 gap-4">
                    {cols}
            </div>
        </Fragment>
    );
}

export default ImageGallery;