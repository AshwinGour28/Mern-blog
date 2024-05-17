import React from 'react'
import { Footer, FooterDivider } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500 p-5'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1 mb-5'>
                <div className='mt-5'>
                <Link
                    to='/'
                    className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
                >
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Simple
                </span>
                Blog
                </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-8'>
                    <div>
                    <Footer.Title title='About' className='mb-4'/>
                    <Footer.LinkGroup col>
                        <Footer.Link 
                        href='https://www.rknec.edu/'
                        target='_blank'
                        rel='noopener noreferrer'>
                            RCOEM
                        </Footer.Link>
                        <Footer.Link
                        href='/about'
                        target='_blank'
                        rel='noopener noreferrer'>
                            Ashwin's Blog
                        </Footer.Link>
                        
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Follow Us' className='mb-4'/>
                    <Footer.LinkGroup col>
                        <Footer.Link 
                        href='https://www.github.com/AshwinGour28/'
                        target='_blank'
                        rel='noopener noreferrer'>
                            Github
                        </Footer.Link>
                        <Footer.Link
                        href='#'>
                            Discord
                        </Footer.Link>
                        
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Legal' className='mb-4'/>
                    <Footer.LinkGroup col>
                        <Footer.Link 
                        href='#'>
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link
                        href='#'>
                            Terms &amp; Conditions
                        </Footer.Link>
                        
                    </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <FooterDivider />
            <div className='w-full sm:flex sm:items-center sm:justify-between mt-5'>
                <Footer.Copyright
                href='#' by=' Simple Blog' year={new Date().getFullYear() }
                />
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='#' icon={BsTwitter}/>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='http://github.com/AshwinGour28' icon={BsGithub}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}
