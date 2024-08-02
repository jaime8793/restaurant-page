function loadAbout() {
  document.getElementById("content").innerHTML = `
        <section class="about">
            <h2>Our Story</h2>
            <p>[Restaurant Name] is a celebration of African culinary heritage. Founded in [Year], we strive to bring the rich and diverse flavors of Africa to your table. Our chefs are passionate about using traditional recipes and the freshest ingredients to create dishes that honor our roots.</p>
            <img src="restaurant.jpg" alt="African Restaurant">
        </section>
        <section class="team">
            <h2>Meet Our Team</h2>
            <div class="team-member">
                <img src="chef.jpg" alt="Chef">
                <h3>Chef [Name]</h3>
                <p>With over 20 years of experience in African cuisine, Chef [Name] brings a wealth of knowledge and passion to our kitchen.</p>
            </div>
        </section>
    `;
}

export default loadAbout