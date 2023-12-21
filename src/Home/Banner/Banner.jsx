import banner from '../../../images/Landing Page.png'

const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-center relative'>
            <div><img src={banner} alt="Banner"/></div>
            <div className='absolute bottom-64'><button className='btn btn-outline btn-info'><a href="https://drive.google.com/file/d/1_8Q1km4ZrGudnBejmTkpF1jbMA-5EC9w/view?usp=drive_link" target='blank' download> Download Resume</a></button></div>
        </div>
    );
};

export default Banner;