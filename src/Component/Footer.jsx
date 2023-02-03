import '../footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='contact-span'>

                <span>
                    Interested in working together?
                </span>
                <span>
                    <a href="#">contact me here</a>
                </span>
            </div>
            <div className='project-span' >
                <span><a href="#">Github</a> </span>
                <span><a href="#">Medium</a> </span>
            </div>
        </div>
    );
};

export default Footer;