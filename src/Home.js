import React from 'react'
import "./Home.css";
import "./css/bootstrap.min.css";
import image2 from './assets/dummyimage.jpg';

function Home() {
    return (
        <section>

            <div className="Certificates">
                <h1>This is Certificates section</h1>
            </div>
            <div class="container-fluid">
                <div class="row info">
                    <div class="col-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div class="col-sm">
                        <img class="dummyimg" src={image2} alt="Second slide" />
                    </div>
                </div>
            </div>
            <div className="Testimonials">
                <h1>This is Testimonials section</h1>
            </div>
        </section >
    )
}

export default Home
