import backgroundImage from '../../public/images/WelcomeImg.png';

const pageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
};

export default function PageWelcome() {
    return (
        <div style={pageStyle}>
            <a href="/sensor" className='bg-green-100 text-black text-xl font-nunito font-bold rounded-3xl px-16 py-8 mt-4 hover:bg-plantix-greenpalet absolute bottom-28'>
                <div>
                    Click Here To Start
                </div>
            </a>
        </div>
    );
}
