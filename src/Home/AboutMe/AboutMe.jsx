import ProfilePic from "../../../images/Picsart_23-04-23_21-59-32-352.jpg";

const AboutMe = () => {
  return (
    <div className="card  lg:card-side bg-base-100 shadow-xl my-4">
      <div className="w-1/2">
        <figure>
          <img src={ProfilePic} alt="ProfilePic" className="w-[400px] shadow-2xl shadow-[#00FFFF]" />
        </figure>
      </div>
      <div className="card-body flex flex-col justify-center items-left">
        <h2 className="font-bold text-4xl text-[#00FFFF]">Hi,I'm AAkil 🙋‍♂️.</h2>
        <p className="font-semibold text-2xl lg:w-[500px] my-2">
          I am a web developer. I have completed my B.Sc. (Hons) in Computer
          Science and Engineering from Daffodil International University.
          Currently I'm learning MERN Stack and also trying new programming languages like Python and C++ alongside JavaScript.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
