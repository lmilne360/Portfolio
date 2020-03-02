<h2>Contact</h2>
<form
  action="https://formspree.io/mknbqoke"
  method="POST"
  class="contact-section__form">
  <div class="form-group">
    <input
      type="text"
      name="name"
      class="form-control"
      id="nameInput"
      placeholder="Name" />
  </div>
  <div class="form-group">
    <input
      name="_replyto"
      type="email"
      class="form-control"
      id="inputEmail1"
      aria-describedby="emailAddress"
      placeholder="Email" />
  </div>
  <div class="form-group">
    <textarea
      class="form-control"
      id="formControlTextarea1"
      placeholder="Enter message here..."
      rows="3"
      name="message" />
  </div>
  <button type="submit" class="btn btn-secondary">Submit</button>
</form>

<style>
    h2{
      font-family: "Oswald", sans-serif;
      font-weight: 700;
      letter-spacing: 1px;
      font-size: 1.25rem;
      text-transform: uppercase;
      border-left: 6px solid #333;
      padding-left: 1rem;
      color: #333;
      margin-bottom: 60px;
    }

    input, textarea, .btn{
      width: 100%;
      padding: 20px;
      margin-top: 32px;

      font-family: "Roboto", sans-serif;
      letter-spacing: 2px;
    }

    .btn{
      background-color: white;
      transition: 200ms ease all;

      font-family: "Oswald", sans-serif;
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: 2px;
    }

    .btn:hover{
      cursor: pointer;
      background-color: #333;
      color: white;
    }

</style>