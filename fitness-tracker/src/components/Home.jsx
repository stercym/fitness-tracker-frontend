import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="p-6 text-center">
            <div className="home-container">
                <h1>
                    Welcome to Your Fitness Journey
                </h1>
                <p>
                    Fitness Tracker will help you transform your lifestyle step by step!
                </p>
            </div>

            {/* First Section */}
            <div className="transformation-section">
                <img
                    src="https://thumbs.dreamstime.com/b/man-big-belly-11551683.jpg"
                    alt="Unfit person"
                />
                <span className="transformation-text">From this ➡️ To this</span>
                <img
                    src="https://images.generated.photos/SatTeir5KAlzTTcY1iZKvZ40vy6FytYlE71dMoG2NHY/g:no/rs:fill:256:384/czM6Ly9ncGhvdG9z/LXByb2QtaHVtYW4t/Z2FsbGVyeS8yNTE4/L2UwMGQ1MDQ5LThj/NTQtNDQ4NS05NzMx/LTJiMWQwMDRkYjVl/NS0xLmpwZw.jpg"
                    alt="Fit person 1"
                />
            </div>

            {/* Second Section*/}
            <div className="transformation-section">
                <img
                    src="https://www.shutterstock.com/image-photo/overweight-man-wearing-red-swimming-260nw-840940.jpg"
                    alt="Unfit person 2"
                />
                <span className="transformation-text">From this ➡️ To this</span>
                <img
                    src="https://img.freepik.com/premium-photo/fitness-woman-standing-tall-strong-workout-gear-generated-by-ai_991410-9153.jpg"
                    alt="Fit person 2"
                />
            </div>
            <div className="exercise-section">
                <img
                    src="https://www.puregym.com/media/3runwjka/the-best-gym-machines-for-weight-loss-toning_blogheader.jpg?quality=80"
                    alt="equipment1"
                />
                <p className="exercise-description">
                    This exercise is perfect for toning the upper body and comes with numerous
                    advantages that go beyond appearance. By strengthening the arms, shoulders,
                    chest, and back, you build muscle strength and endurance, which makes
                    everyday activities like lifting, carrying, pushing, and pulling much
                    easier. A toned upper body also contributes to better posture, especially in
                    today’s world where many people spend long hours sitting and slouching. In
                    addition, developing muscle mass in the upper body boosts metabolism,
                    helping the body burn calories more efficiently even at rest. It also
                    protects joints and bones, reducing the risk of injuries and improving bone
                    density.
                </p>
            </div>

            {/* Third Section */}
            <div className="exercise-section reverse">
                <p className="exercise-description">
                    This exercise helps in arms toning as well as building chest and arm
                    muscles. Building the chest and toning the arms come with a wide range of
                    benefits that strengthen the body, improve functionality, and enhance
                    appearance. A well-developed chest provides power for pushing movements,
                    making everyday tasks such as lifting objects, opening heavy doors, or
                    carrying loads much easier. It also plays a key role in maintaining good
                    posture, especially when balanced with back exercises, helping to
                    counteract slouching and promoting upright alignment.
                </p>
                <img
                    src="https://www.mensjournal.com/.image/t_share/MTk2MTM3MzcxNDQyOTQ3MjE3/6-rowing-machine.jpg"
                    alt="equipment2"
                />
            </div>
            
            {/* Fourth Section */}
            <div className="third section">
                <img
                    src="https://bfasset.costco-static.com/U447IH35/as/tr9pjr7z38rtzjg89f768tf/4000352839-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
                    alt="Treadmill"
                />
                <p className="third-exercise-description">
                    Running on a treadmill offers a variety of benefits that combine
                    convenience, safety, and health improvement. One of the main
                    advantages is accessibility—treadmills allow you to exercise
                    regardless of the weather, time of day, or location, making it
                    easier to maintain consistency in your workout routine.
                </p>
            </div>


            {/* Last Section */}
            <div className="section section-right">

                {/* Text on Left */}
                <div className="last-section-text">
                    <p>
                        Weight lifting is important because it goes far beyond building
                        muscle—it supports overall health, functionality, and well-being.
                        One of the key benefits is that it increases muscle strength, making
                        everyday tasks like carrying groceries, lifting children, or moving
                        heavy objects much easier. Stronger muscles also support joints, reducing the risk of injuries
                        and improving stability and balance. In addition, weight lifting
                        stimulates bone growth and increases bone density, which helps
                        prevent osteoporosis and fractures as we age.
                    </p>
                </div>

                {/* Image on Right */}
                <img
                    src="https://www.si.com/.image/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/MjAwNzY5NzU2MjAwOTY5NjAy/titan-hero.png"
                    alt="Kettlebell"
                />
            </div>
        </div>
    );
}

export default Home;
