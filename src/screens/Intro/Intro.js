import React, {useEffect, useRef} from 'react';
import './Intro.css';
import bigGear from '../../assets/intro/big-gear.svg';
import middleGear from '../../assets/intro/middle-gear.svg';
import smallGear from '../../assets/intro/small-gear.svg';
import extraSmallGear from '../../assets/intro/extra-small-gear.svg';


const Intro = () => {
    const introRef = useRef();
    useEffect(() => {
        if(introRef.current) {
            introRef.current.style.height = `${window.innerHeight}px`;
        }
    }, []);

    return (
        <div ref={introRef} className={'Intro'}>
            <div className="Intro__container">
                <img className={'Intro__gear--big'} src={bigGear} alt=""/><img className={'Intro__gear--middle'} src={middleGear} alt=""/><img className={'Intro__gear--small'} src={smallGear} alt=""/><img className={'Intro__gear--extra-small'} src={extraSmallGear} alt=""/>
            </div>
        </div>
    );
};

export default Intro;