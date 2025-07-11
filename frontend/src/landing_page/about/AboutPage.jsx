import React from 'react';

function AboutPage() {
    return ( 
        <div className="container" style={{marginTop: '17vmin'}}>
            <div className="row">
                <div className="col-4">
                    <img style={{borderRadius:'50%',width: '100%'}} src="assets/images/Yadveer.jpg" alt="" />
                </div>
                <div className="col-8 ">
                    <p className='p-4'>
                        Hey! I'm Yadveer Singh Pawar, a Computer Engineering student with a strong passion for Web Development and Artificial Intelligence. I love turning ideas into real-world projects — like the Spotify clone and Wanderlust (my Airbnb-inspired web app). <br /> <br />
                        Right now, I'm sharpening my skills in Data Structures & Algorithms and diving deeper into full-stack web development. I'm always open to learning, building, and collaborating on meaningful tech projects. <br /> <br />
                        If you're looking for someone to join your team, internship, or just vibe over a cool side project — let’s connect! <br /> <br />
                        When I'm not coding, you’ll probably find me on a football field chasing the next goal ⚽ <br /> <br />
                    </p>
                </div>
            </div>
        </div>
     );
}

export default AboutPage;