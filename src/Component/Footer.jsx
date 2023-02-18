import '../footer.css'

const Footer = ({ style }) => {
    return (
        <div className='footer'>
            <div className='contact-span'>

                <span>
                    Interested in working together?
                </span>
                <span>
                    <a className='contact-link' style={style} href="mailto:sundayvictane@gmail.com">contact me here</a>
                </span>
            </div>
            <div className='project-span' >
                <span><a style={style} href="https://github.com/victane">Github</a> </span>
                <span><a style={style} href="https://medium.com/@sundayvictane">Medium</a> </span>
            </div>
        </div>
    );
};

export default Footer;