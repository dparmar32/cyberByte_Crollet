import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaFolder } from "react-icons/fa";

const AppFooter = () => {
    return (
        <>
            <Container fluid className="text-light page-footer fixed-bottom d-flex pt-1 bg-dark">
                <Container>
                    <h5 className='pt-5'>Contact Us</h5>
                    <div className="d-lg-flex pb-4 justify-content-between">
                        <ul className="list-unstyled">
                            <li><h6>Maria Cardona</h6></li>
                            <li>
                                <a className="footer-link" href="mailto:mechas8703@hotmail.com">
                                    <span className="pr-3">
                                        <FaEnvelope />
                                    </span>
                                    Email
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://github.com/mechas8703">
                                    <span className="pr-3">
                                        <FaGithub />
                                    </span>
                                    GitHub
                                </a>
                            </li>
                       </ul>
                        <ul className="list-unstyled">
                            <li><h6>Drashtee Parmar</h6></li>                            
                            <li>
                                <a className="footer-link" href="mailto:drashteeparmar@gmail.com">
                                    <span className="pr-3">
                                        <FaEnvelope />
                                    </span>
                                    Email
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://github.com/dparmar32">
                                    <span className="pr-3">
                                        <FaGithub />
                                    </span>
                                    GitHub
                                </a>
                            </li>
                        </ul>
                        <ul className="list-unstyled">
                            <li><h6>Shadae Brown</h6></li>                            
                            <li>
                                <a className="footer-link" href="mailto:shadaeamoy@gmail.com">
                                    <span className="pr-3">
                                        <FaEnvelope />
                                    </span>
                                    Email
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://github.com/Shadae96">
                                    <span className="pr-3">
                                        <FaGithub />
                                    </span>
                                    GitHub
                                </a>
                            </li>                            
                        </ul>
                        <ul className="list-unstyled">
                            <li><h6>Silvia Trejo</h6></li>                            
                            <li>
                                <a className="footer-link" href="mailto:s.y.trejo26@gmail.com">
                                    <span className="pr-3">
                                        <FaEnvelope />
                                    </span>
                                    Email
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://github.com/sytrejo">
                                    <span className="pr-3">
                                        <FaGithub />
                                    </span>
                                    GitHub
                                </a>
                            </li>                            
                        </ul>
                        <ul className="list-unstyled">
                            <li><h6>SJonathan Sewell</h6></li>                            
                            <li>
                                <a className="footer-link" href="mailto:jsewellro@gmail.com">
                                    <span className="pr-3">
                                        <FaEnvelope />
                                    </span>
                                    Email
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://github.com/jjsr17">
                                    <span className="pr-3">
                                        <FaGithub />
                                    </span>
                                    GitHub
                                </a>
                            </li>                            
                        </ul>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>&copy;{new Date().getFullYear()}</p>
                        <p>
                            <a className="footer-link" href="https://github.com/dparmar32/cyberByte_Crollet">
                                <span className="pr-3">
                                    <FaGithub />
                                </span>
                                Visit the GitHub Repo
                            </a>
                        </p>
                    </div>
                </Container>
            </Container>
        </>
    )
};
export default AppFooter;