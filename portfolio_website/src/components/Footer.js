import React from 'react';
import {Button} from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                More Information
            </p>
            <br />

            <div className='input-areas'>
                <form>
                    <input type='LinkedIn' name='LinkedIn' placeholder='My LinkedIn' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>
                        My INFO
                    </Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Me</h2>
                    <Link to='/about_me'> My Life</Link>
                    <Link to='/education'> Education</Link>
                    <Link to='/my_work'> Work Experience</Link>
                    <Link to='/about_me'> Hobbies</Link>
                    <Link to='/about_me'> Personal Mission</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Me</h2>
                    <Link to='/'> Phone Number</Link>
                    <Link to='/'> Personal Email</Link>
                    <Link to='/'> School Email</Link>
                    <Link to='/'> Social Media</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Projects</h2>
                    <Link to='/my_work/dsa_library'> Data Structure Library</Link>
                    <Link to='/my_work/ds_paper'> Data Science Paper</Link>
                    <Link to='/my_work/unity_game_development'> Unity Game Development</Link>
                    <Link to='/my_work/ecocar'> EcoCAR Club</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <a
                        href='https://www.linkedin.com/in/a-m-stephenson/'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                        LinkedIn
                    </a>
                    <Link to='/'> Instagram</Link>
                    <Link to='/'> Facebook</Link>
                    <Link to='/'> X</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                    Andrew Stephenson <i className='test' />
                    </Link>
                </div>
                <small className='website-rights'>Senior Portfolio</small>
                <div className='social-icons'>
                    <a
                        className='social-icon-link LinkedIn'
                        href='https://www.linkedin.com/in/a-m-stephenson/'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='LinkedIn'
                        >
                        <i className='fab fa-linkedin' />
                    </a>

                    <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                    <i className='fab fa-instagram'/></Link>
                    <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                    <i className='fab fa-facebook-f'/></Link>
                    <Link className='social-icon-link X' to='/' target='_blank' aria-label='X'>
                    <i className='fab fa-x'/></Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer