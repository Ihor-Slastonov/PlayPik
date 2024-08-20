/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedText = () => {
  const textRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 1, // delay between each paragraph animation
        ease: 'power2.out',
      }
    );
  }, []);

  const paragraphs = [
    'A world where choosing a game is no longer a dilemma! Here, you can easily add your favorite games, set filters, and let our unique PlayPik button decide your next gaming adventure.',
    <span key="2">
      <span className="block text-accent xl:text-2xl text-lg font-bold text-center my-2">
        But that's just the beginning!
      </span>
    </span>,
    ' Sign up to unlock the full experience: save your favorite games, leave comments, upload screenshots, and join the general chat with fellow gamers.',
    <span key="3">
      <span className="block text-accent_green xl:text-2xl text-lg font-bold text-center my-2">
        And the best part?
      </span>
    </span>,
    " You'll gain access to the exclusive tournament page, where you can compete with friends and find out whose game will reign supreme. Ready to test your luck? Welcome to PlayPik!",
  ];

  return (
    <div className="flex flex-col ">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          ref={el => (textRef.current[index] = el)}
          className="inline-block text-justify xl:text-xl"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default AnimatedText;
