import React from 'react';
import './Portfolio.css';

function Task6() {
    return (<>
        <a href="https://github.com/guptasajal411/react-tasks-mern/blob/master/src/Task6.js" style={{ position: "absolute", right: "5px", top: "5px", color: "white" }} className="sourceCodeLink">Source Code</a>
        <div className="portfolio px-3 py-3">
            <table cellspacing="35">
                <tr>
                    <td><img className="profilePicture" src="https://raw.githubusercontent.com/guptasajal411/cv/main/images/sajalGupta.png" alt="Sajal Profile Picture" height="250" /></td>
                    <td>
                        <h1 className="name">Sajal Gupta</h1>
                        <p><em>CS Senior at VIT Bhopal. </em></p>
                        <p></p>
                    </td>
                </tr>
            </table>
            <br />
            <hr size="2" noshade />
            <br />
            <h3>Education</h3>
            <ul>
                <li><a href="https://vitbhopal.ac.in/">Vellore Institute of Technology, Bhopal</a></li>
                <ul>
                </ul>
                <li><a href="https://www.shivjyoti.org/">Shiv Jyoti Senior Secondary School, Rathkankara, Kota</a></li>
                <ul>
                </ul>
                <li>
                    <a href="http://www.aecs4rbt.nic.in">Atomic Energy Central School #4, Rawatbhata</a>
                </li>
                <ul>
                </ul>
            </ul>
            <br />
            <hr size="2" noshade />
            <br />
            <h3>Work Experience</h3>
            <table cellspacing="15">
                <thead>
                    <tr>
                        <th>
                            <p>Organisation</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>Full Stack DevOps Intern, Plypicker Private Limited</p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Full Stack Developer, Beta Testers Pvt Ltd</p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <hr size="2" noshade />
            <br />
            <h3>Skills</h3>
            <table cellspacing="15">
                <tr>
                    <td>
                        <table>
                            <tr>
                                <td>
                                    <p>Web Development</p>
                                </td>
                                <td>
                                    <p>⭐⭐⭐⭐</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>DevOps</p>
                                </td>
                                <td>
                                    <p>⭐⭐⭐⭐</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>NodeJS</p>
                                </td>
                                <td>⭐⭐⭐</td>
                            </tr>
                        </table>
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td>
                                    <p>Video Editing</p>
                                </td>
                                <td>⭐⭐⭐</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <br />
            <hr size="2" noshade />
            <br />
        </div>
    </>
    );
}

export default Task6;
