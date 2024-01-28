import React from 'react';
import './Jumbotron.css';
import jumbotronBack from '../../../assets/main/blue-back.svg';
import jumbotronImg from '../../../assets/main/jumbotron.svg';
import Clip from '../../../assets/main/clip.png';
import ClipLeft from '../../../assets/main/clip left.png';



const Jumbotron = () => {
    return (
        <div className={'Jumbotron'}>
            <div className="Jumbotron__back">
                <img src={jumbotronBack} alt=""/>
            </div>
            <div className="Jumbotron__container">
               
                <div className='Jumbotron__top'>
                <div className='Jumbotron__top--welcome'>
                    <h2 className='Jumbotron__top--text'>welcome </h2> 
                    <div className='jumbtron__icons'>
                    <i class="fa-solid fa-hand Jumbotron__top--icon1"></i>
                    <i class="fa-solid fa-satellite-dish Jumbotron__top--icon2"></i>
                    </div>
                    
                    
                </div>
                <h3 className='Jumbotron__top--msg'>Wish Have A Nice Day...</h3>
                    <div className='Jumbotron__top--left'>
                        <img className='Jumbotron__top--Imgleft' src={ClipLeft} alt="clip"/>
                    </div>
                    <div className='Jumbotron__top--right'>
                        
                    <img className='Jumbotron__top--Imgright' src={Clip} alt="clip"/>
                    </div>
                </div>
                <div className="Jumbotron__left">
                    <div className="Jumbotron__left--container">
                        <div className="Jumbotron__header">
                            <h1>WITH OUR COMMUNITY</h1>
                        </div>
                        <div className="Jumbotron__desc">
                            <p>We Have A Lot Of Compnies Seek To Enlarge <br />Our Scale By Adding More Companies</p>
                        </div>
                        <div className="Jumbotron__btn">
                            <span>Add New Company</span>
                        </div>
                    </div>
                </div>
                <div className="Jumbotron__right">
                    <img src={jumbotronImg} alt="" className="Jumbotron__right--image"/>
                </div>
            </div>
            
        </div>
    );
};

export default Jumbotron;