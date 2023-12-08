import React from 'react';

interface WelcomeProps {
    fontSize?: string;
    margin?: string;
}

const Welcome: React.FC<WelcomeProps> = ({ fontSize, margin }) => {
    return <h1 className="font-nunito font-bold text-3xl text-white" style={{ fontSize, margin }}>Selamat datang di <span className='text-plantix-yellow'>Plantix</span> !</h1>;
};

export default Welcome;