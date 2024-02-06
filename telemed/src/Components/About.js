import React from 'react'

const About = () => {
  return (
    <div>
        <section id="about">
          <div class="container h-100">
               <div class="row">

                    <div class="col-md-6 col-sm-6" >
                         <div class="about-info" data-aos="fade-left">
                              <h2 class="wow fadeInUp" data-wow-delay="0.6s" style={{textShadow:"#FC0 1px 0 15px"}}>Welcome to Your TeleMed</h2>
                              <div class="wow fadeInUp" data-wow-delay="0.8s">
                                   <p>Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia nisi vitae velit volutpat venenatis.</p>
                                   <p>Sed a dignissim lacus. Quisque fermentum est non orci commodo, a luctus urna mattis. Ut placerat, diam a tempus vehicula.</p>
                              </div>
                              <figure class="profile wow fadeInUp" data-wow-delay="1s" data-aos="fade-up">
                                   <img src="images/author-image.jpg" class="img-responsive" alt=""/>
                                   <figcaption>
                                        <h3>Dr. Neil Jackson</h3>
                                        <p>General Principal</p>
                                   </figcaption>
                              </figure>
                         </div>
                    </div>
                    
               </div>
          </div>
     </section>
    </div>
  )
}

export default About