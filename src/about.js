function loadAbout() {
  document.getElementById("content").innerHTML = `
        <section class="about">
            <h2>Our Story</h2>
            <p>Odiso Restaurant is a celebration of African culinary heritage. Founded in 2024, we strive to bring the rich and diverse flavors of Africa to your table. Our chefs are passionate about using traditional recipes and the freshest ingredients to create dishes that honor our roots.</p>
        </section>
        <section class="team">
            <h2>Meet Our Team</h2>
            <div class="team-member">
                <img src="https://utfs.io/f/7faca7a0-754f-41a4-9f50-5a7b1a30f2d2-n92lk7.png" alt="Chef">
                <h3>Chef Odiso</h3>
                <p>With over 20 years of experience in African cuisine, Chef [Name] brings a wealth of knowledge and passion to our kitchen.</p>
            </div>
        </section>
    `;
}

export default loadAbout;
