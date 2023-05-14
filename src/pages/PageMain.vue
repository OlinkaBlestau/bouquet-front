<template>
  <div class="container-page">
    <section id="section1" ref="section1">
      <img
        src="../assets/images/section1-backimage.jpg"
        alt="Logo"
        class="full-width"
      />
      <div class="d-flex justify-content-between">
        <img
          src="../assets/images/flowers.png"
          class="flowers-picture-click"
          alt="Logo"
        />
        <div class="section-info">
          <h1 class="section-title">Create your</h1>
          <h2 class="section-title">dream</h2>
          <button @click="$router.push('/login')" class="section-button">
            Enter to account
          </button>
        </div>
      </div>
    </section>
    <section
      id="section2"
      class="wrap m-auto d-flex justify-content-between"
      ref="section2"
    >
      <div class="info-section2">
        <p style="color: #e1225d; margin-left: 120px; margin-bottom: 0">
          Visualize
        </p>
        <p style="margin-left: 190px; margin-bottom: 0">your</p>
        <p style="margin-left: 40px">own bouquet</p>
      </div>
      <div class="info-section2-list">
        <ul>
          <li>✓ Save your time.</li>
          <li>✓ Design unique bouquets.</li>
          <li>✓ Decorate.</li>
          <li>✓ Create anytime, anywhere.</li>
          <li>✓ Make an order.</li>
        </ul>
      </div>
    </section>
    <section id="section3" class="wrap" ref="section3">
      <div style="width: 80%" class="m-auto d-flex justify-content-between">
        <div class="info-section3">
          <img
            src="../assets/images/online-registration.png"
            class="online-register"
            alt="Logo"
          />
        </div>
        <div class="info-section3-list">
          <h1>1. Register</h1>
          <ul>
            <li>✓ Register if you are here for the first time.</li>
            <li>✓ Log in if you already have an account.</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="section4" class="wrap" ref="section4">
      <div style="width: 80%" class="m-auto d-flex justify-content-between">
        <div class="info-section4-list">
          <h1>2. Create</h1>
          <ul>
            <li>✓ Choose the desired flowers and decor.</li>
            <li>✓ Use drag and drop to create a bouquet.</li>
          </ul>
        </div>
        <div class="info-section4">
          <img
            src="../assets/images/flower-bouquet.png"
            class="create-bouquet-info"
            alt="Logo"
          />
        </div>
      </div>
    </section>
    <section id="section5" class="wrap" ref="section5">
      <div style="width: 80%" class="m-auto d-flex justify-content-between">
        <div class="info-section5">
          <img
            src="../assets/images/choices.png"
            class="online-register"
            alt="Logo"
          />
        </div>
        <div class="info-section5-list">
          <h1>3. Order</h1>
          <ul>
            <li>✓ Use drag and drop to create a bouquet.</li>
            <li>✓ Create Payment.</li>
            <li>✓ Get a check in the email</li>
          </ul>
        </div>
      </div>
    </section>
    <footer class="m-auto">
      <h2 class="text-center mt-4" style="font-size: 1vw">
        Здесь должен быть текст футера
      </h2>
    </footer>
  </div>
</template>
<script>
export default {
  name: "PageMain",
};
</script>
<style scoped>
#section2 {
  background-color: #fff;
  width: 80%;
}

#section3 {
  background-color: #efeed2;
  width: 100%;
}

#section4 {
  background-color: #f4b4d7;
  width: 100%;
}

#section5 {
  background-color: #d6e4f8;
  width: 100%;
}
.info-section3-list,
.info-section4-list {
  margin-top: 60px;
  font-size: 30px;
  font-family: "Klee One", cursive;
}
.info-section3-list h1,
.info-section4-list h1 {
  color: #23a79e;
  font-weight: 700;
  font-size: 5vw;
  margin-bottom: 50px;
}
.info-section3-list ul li,
.info-section4-list ul li {
  list-style: none;
  margin-top: 30px;
}

.info-section5-list {
  margin-top: 30px;
  font-size: 30px;
  font-family: "Klee One", cursive;
}
.info-section5-list h1 {
  color: #23a79e;
  font-weight: 700;
  font-size: 5vw;
  margin-bottom: 50px;
}
.info-section5-list ul li {
  list-style: none;
  margin-top: 30px;
}
.full-width {
  display: block;
  width: 100%;
  max-height: 100vh;
  height: 100vh;
  min-height: 100vh;
  object-fit: cover;
}
.container-page {
  position: relative;
}
.flowers-picture-click {
  margin-top: -750px;
  margin-left: 100px;
  width: 37%;
}

.create-bouquet-info {
  margin-top: 50px;
  width: 70%;
  transform: rotate(-50deg);
}

.online-register {
  margin-top: 100px;
  width: 50%;
  margin-left: 120px;
}

.section-info {
  margin-top: -550px;
}

.wrap {
  width: 80%;
  height: 50vh;
}

.info-section2 h1 {
  color: #e1225d;
}

.info-section2 {
  font-size: 4vw;
  margin-top: 40px;
  font-family: "Marmelad", sans-serif;
}
.info-section2-list {
  margin-top: 90px;
  font-size: 30px;
  font-family: "Klee One", cursive;
}
.info-section2-list ul li {
  list-style: none;
  margin-bottom: 8px;
}

.section-title {
  color: #e1225d;
  font-weight: 700;
  font-family: "Marmelad", sans-serif;
  font-size: 50px;
  margin-right: 30px;
}
.section-info h1 {
  right: 250px;
  font-size: 5vw;
  bottom: 90px;
  position: relative;
}
.section-info h2 {
  right: 150px;
  bottom: 90px;
  font-size: 5vw;
  position: relative;
}
.section-button {
  background-color: #23a79e;
  color: #fff;
  bottom: 50px;
  border: none;
  position: relative;
  right: 90px;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 20px;
  font-family: "Marmelad", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}
.section-button:hover {
  background-color: #23a79e;
}
footer {
  background-color: #fff;
  height: 6vh;
}
</style>
