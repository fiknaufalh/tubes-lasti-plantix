import React from 'react';

interface WelcomeProps {
    fontSize?: string;
    margin?: string;
    user: string;
}

const Welcome: React.FC<WelcomeProps> = ({ fontSize, margin, user }) => {
    return <h1 className="font-nunito font-bold text-xl text-black-1000" style={{ fontSize, margin }}>Welcome, {user}!</h1>;
};

export default Welcome;