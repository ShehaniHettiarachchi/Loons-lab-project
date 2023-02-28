import React from 'react';
import Slider from '../includes/Slider';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <Slider />
            
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col md-12 text-center'>
                            <h3 className='main-heading p-4'>HERBALA</h3>
                            <div className='underline mx-auto'></div>
                            <p className='content'>The ageing of the population, technological advances, new public health threats, evolving patients expectations and shrinking budget are putting under pressure health care systems in Europe and beyond. Once the Family Out-of-Pocket Maximum has been met in a Year, You and Your Family Member(s) will no longer be responsible to pay Coinsurance or Copayments for medical or Pharmacy services for Covered Expenses incurred during the remainder of that Year from Participating Providers.
                            <br/>An increasing portion of health care expenditure is on pharmaceutical and chronic diseases.Covered Drugs, devices, or other Pharmacy services or supplies provided or available in connection with an occupational sickness or an injury sustained in the scope of and in the course of employment whether or not benefits are, or could upon proper claim be, provided under the Workers’ Compensation law.
                            <br/> All these factors are pushing for change.

                            <br/><Link to='/about' className='btn btn-link'>learn more.</Link>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;