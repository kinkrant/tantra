import { Fragment } from "react";
import Background from "../assets/bg.jpeg";
import me from "../assets/person.jpg";
import { BsFillImageFill } from "react-icons/bs";
import ImageGallery from "../Components/ImageGallery";
import IMG24 from "../assets/art/IMG24.jpeg";
import IMG11 from "../assets/art/IMG11.jpeg";
import IMG2 from "../assets/art/IMG2.jpeg";
import IMG10 from "../assets/art/IMG10.jpeg";
import IMG22 from "../assets/art/IMG22.jpeg";
import IMG21 from "../assets/art/IMG21.jpeg";
import IMG20 from "../assets/art/IMG20.jpeg";
import IMG28 from "../assets/art/IMG28.jpeg";
import IMG8 from "../assets/art/IMG8.jpeg";
import IMG18 from "../assets/art/IMG18.jpeg";
import IMG17 from "../assets/art/IMG17.jpeg";
import IMG16 from "../assets/art/IMG16.jpeg";

const Index = () => {
  const ImagesData = [
    {
      id: "1",
      img: IMG24,
      discription: "some text",
      art: "Acrylic on Canvas",
      name: "Shiv Tatva",
      size: `48"x48" Inch`,
      le: "Limited Edition",
      sold: "SOLD",
    },
    {
      id: "2",
      img: IMG11,
      discription: "some text",
      art: "Acrylic on Canvas",
      name: "Kundalini",
      size: `48"x48" Inch`,
    },
    {
      id: "3",
      img: IMG2,
      discription: "some text",
      art: "Acrylic on Canvas",
      name: "Shri Yantra 3",
      size: `48"x48" Inch`,
      le: "Limited Edition",
    },
    {
      id: "4",
      img: IMG10,
      discription: "some text",
      art: "Acrylic on Canvas",
      name: "Bagalamukhi",
      size: `48"x48" Inch`,
      le: "Limited Edition",
    },
    {
      id: "5",
      img: IMG22,
      discription: "some text",
      art: "Acrylic on Canvas",
      name: "Dhyan",
      size: `48"x48" Inch`,
      le: "Limited Edition",
      sold: "SOLD",
    },

    {
      id: "6",
      img: IMG21,
      discription: "some text",
      art: "Acrylic on Canvas",
      name: "Dhyan 2",
      size: `48"x48" Inch`,
      le: "Limited Edition",
      sold: "SOLD",
    },
    {
      id: "7",
      img: IMG20,
      discription: "some text",
      art: "Acrylic on Canvas",
      name: "Dhyan 3",
      size: `48"x48" Inch`,
    },
    {
        id: "8",
        img: IMG28,
        discription: "some text",
        art: "Acrylic on Canvas",
        name: "Dhyan 4",
        size: `48"x48" Inch`,
      },
      {
        id: "9",
        img: IMG8,
        discription: "some text",
        art: "Acrylic on Canvas",
        name: "Shanti",
        size: `48"x48" Inch`,
      },
      {
        id: "10",
        img: IMG18,
        discription: "some text",
        art: "Acrylic on Canvas",
        name: "Name",
        size: `48"x48" Inch`,
      },
      {
        id: "11",
        img: IMG17,
        discription: "some text",
        art: "Acrylic on Canvas",
        name: "Name",
        size: `48"x48" Inch`,
        le: "Limited Edition",
      },
      {
        id: "12",
        img: IMG16,
        discription: "some text",
        art: "Acrylic on Canvas",
        name: "Name",
        size: `48"x48" Inch`,
        sold: "SOLD",
      },
  ];

  const sectionStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    backgroundAttachment: `fixed`,
  };

  return (
    <Fragment>
      <div
        className="bg-gray-400 w-full min-h-screen border-b border-gray-800"
        style={sectionStyle}
      >
        {/* <div className="container mx-auto px-4 md:px-28 pt-2 md:pt-0 h-full pb-4"> */}
        <div>
          <div className="grid grid-cols-12 min-h-screen">
            <div className="lg:col-span-8 md:col-span-7 col-span-12 h-full">
              <div className=" pt-32 md:pt-20 w-full h-screen md:h-full backdrop-blur-sm bg-white/10 flex items-center">
                <h3
                  className="w-full text-center  text-4xl font-bold drop-shadow-xl text-gray-200"
                  style={{ textShadow: `0 0 5px #000000` }}
                >
                  {" "}
                  Mind Altering art{" "}
                </h3>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-5 col-span-12 h-full">
              <div className="py-10 md:pt-20 px-4 md:px-12 w-full bg-gray-200 h-full  shadow-lg border-gray-900 border-l">
                <img
                  src={me}
                  className="items-center rounded-lg border-2 border-gray-700 w-1/2 mx-auto"
                  alt="Tanaji Awaghade"
                />
                <br />
                <p className="text-center text-lg">Tanaji Awaghade</p>
                <p className="text-center text-sm">(Artist)</p>
                <hr className="border-gray-700 border-1 my-4" />
                <p>
                  Mind Altering art by Tanaji Avghade: Meet the divine with art,
                  through this spiritual painter Tanaji Avghade. Tanaji avghade
                  is a spiritual painter from Karad in Maharashtra and has his
                  own studio, which allows the viewer to experience inner peace
                  through his paintings.
                </p>
                <div className="py-2 bg-gray-800 text-center rounded mt-4 text-gray-200 px-4">
                  More about me
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-200 w-full">
        <div className="container mx-auto px-4 md:px-28 h-full py-8 ">
          <div className="pt-4">
            <h3 className="text-2xl font-medium underline mb-10 flex display-inline">
              <span className="mt-2 mr-3">
                <BsFillImageFill />
              </span>
              Art Gallery
            </h3>

            <ImageGallery painting={ImagesData} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
