import { useState } from 'react';

import useCountdownTimer from '../../utils/hooks/useCountdownTimer';
import Modal from '../Modal/Modal';

import openSound from '../../assets/sound/atmosfernyiy.mp3';
import PreviewCard from '../PreviewCard/PreviewCard';

const PickGame = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { startTimer, resetTimer, countdown } = useCountdownTimer(3, 1000);

    const playModalOpenSound = () => {
        const audio = new Audio(openSound);
        audio.play();
    };
    const handleClick = () => {
        setIsOpen(true);
        startTimer();
        setTimeout(playModalOpenSound, 2500);
    };

    const handleClose = () => {
        setIsOpen(false);
        resetTimer();
    };

    return (
        <>
            <div className="pb-5 pt-5  sticky top-0 z-10 bg-dark">
                <button
                    type="button"
                    className="w-52 h-20 block mx-auto  rounded-md
                bg-[url('/button.webp')] bg-cover bg-no-repeat bg-center
                hover:-translate-y-1 duration-500 hover:shadow-[0px_6px_6px_0px_rgba(0,0,0,0.75)]
                active:-translate-y-[2px] outline-none"
                    onClick={handleClick}
                ></button>
            </div>

            <Modal
                containerId="modal_playPick"
                isOpen={isOpen}
                closeModal={handleClose}
            >
                <div
                    className="relative border w-[500px] h-[500px] 
                bg-[url('./border-removebg-preview.png')]
                bg-no-repeat bg-clip-border bg-cover bg-center"
                ></div>

                {countdown > 0 && (
                    <p
                        className="absolute top-[140px] left-[200px]
                     animate-bounce flex items-center justify-center h-[220px] text-[300px] font-bold "
                    >
                        {countdown}
                    </p>
                )}

                <div
                    className={`absolute top-[100px] left-[170px] -z-10 
              duration-500 ${countdown > 0 ? 'opacity-0' : 'opacity-100'}`}
                >
                    <PreviewCard imgURL="https://i.ibb.co/3v5JZdX/phasmophobia.jpg" />
                </div>
            </Modal>
        </>
    );
};

export default PickGame;
