function loadMenu() {
  document.getElementById("content").innerHTML = `
        <section class="menu">
            <h2>Appetizers</h2>
            <div class="menu-item">
                <h3>Samosa</h3>
                <p>Crispy pastry filled with spiced meat or vegetables - $5.00</p>
            </div>
            <h2>Main Courses</h2>
            <div class="menu-item">
                <h3>Jollof Rice</h3>
                <p>Spiced tomato rice with vegetables and your choice of chicken or beef - $12.00</p>
            </div>
            <h2>Desserts</h2>
            <div class="menu-item">
                <h3>Puff-Puff</h3>
                <p>Sweet fried dough balls - $4.00</p>
            </div>
        </section>
    `;
}
export default loadMenu