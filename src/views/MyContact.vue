<template>
  <div class="mycontact">
    <div class="contact-me">
      <div>
        <h3>Please feel free to reach out to me via </h3>
      </div>
        <div class="icons">
          <a href="https://www.linkedin.com/in/yukselyonsel" class="link" target="_blank">
            <font-awesome-icon class="fa-3x" :icon="['fab', 'linkedin']" style="color: #0072b1;" />
          </a>
        </div>
      <div>
        <h3>or send me a message below</h3>
      </div>
      <div class="contact-me-form">
        <form class="contact-me-form" @submit.prevent="submit" v-show='formState == "idle"'> 
          <label for="userEmail">Please type in your email below:</label> <br>
          <input required name="Email" id ="userEmail" v-model='contactInfo.userEmail' placeholder="youremail@yourdomain.com" type="text" autocomplete="on"> <br>
          <label for="userEmail">Subject:</label><br>
          <input required name="subject" id ="subject" v-model='contactInfo.subject' type="text" placeholder="Subject...">  <br>
          <label for="userEmail">Message:</label> <br>
          <textarea required name="body" id ="body" v-model='contactInfo.body' style="height: 200px;" placeholder="Message..."> </textarea><br>
          <button class="mybutton" type="submit"> Click here to send </button> <br>
        </form>
        <div class="loader" v-show='formState == "message-sent"'></div>
        <span class="user-text" v-show='formState == "successful-post" || formState == "message-sent" || formState == "invalid-post" ' style="font-size: 16pt;"> {{ userMessage }}</span>
      </div>
      </div>
        <img src="/assets/IMG_20221231_100906.jpg">
  </div>
</template>

<script>
// @ is an alias to /src
import events from "../utils/api.js"

export default {
  name: "MyContact",
  data() {
    return {
      contactInfo: {
        userEmail: "",
        subject:"",
        body:"",
      },
      formState: "idle",
    }
  },
  methods: {
    async submit() {
      await this.sendContactMessage(this.contactInfo);
    },
    async sendContactMessage(body) {
      try {
        this.formState = "message-sent";
        events.post("/contact", body).then((response) => {
          if (response.status == 500) {
            this.formState = "invalid-post"
          } else if (response.status == 200) {
            this.formState = "successful-post"
          }
        });
      } catch(err) {
        console.log(err);
      }
    },
  },
  computed: {
    userMessage() {
      if (this.formState == "message-sent") {
        return "Processing your message...";
      } else if (this.formState == "invalid-post") {
        return "There is something wrong with your inquiry, Please try on linkedin or refresh screen to resend...";
      } else if (this.formState == "successful-post") {
        return "Thank you for your message, I will get back to you soon!";
      }
      return "Processing your message...";
    }
  },
  components: {},
};
</script>

<style lang="scss" scoped>

.mycontact {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  .icons {
    .git {
      padding-top: 5px;
      padding-left: 5px;
    }
  }
  .contact-me {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
    width: 50%;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    font-style: inherit;
    .contact-me-form {
      display: flex;
      flex-direction: column;
      width: 100%;
      
      input {
        font: inherit;
        margin: 5px;
        border: none;
        border-radius: 5px;
        font-style: italic;
      }
      input:focus {
        outline:none;
        border-bottom: solid #eeeeee 1px;
      }
      textarea {
        outline:none;
        font: inherit;
        border: none;
        border-radius: 5px;
        min-width: 50%;
        resize: none;
        font-style: italic;
      }
      .mybutton {
        width: fit-content;
        background-color: #cc9999;
        border-radius: 100px;
        color: rgba(0,0,0,0.8);
        cursor: pointer;
        display: inline-block;
        font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
        padding: 7px 20px;
        text-align: center;
        text-decoration: none;
        transition: all 250ms;
        border: 0;
        font-size: 16px;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
      }

      .mybutton:hover {
        transform: scale(1.05);
      }
      .loader {
        justify-content: start;
        margin: auto;
        border: 10px solid #EAF0F6;
        border-radius: 50%;
        border-top: 10px solid #cc9999;
        width: 100px;
        height: 100px;
        animation: spinner 4s linear infinite;
      }

      .user-text {
        font: inherit;
        color: rgba(0,0,0,0.8);
        text-align: center;
      }

      @keyframes spinner {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    }
  }
  img {
    margin: 20px;
    border-radius: 10px;
    max-width: 263px;
    max-height: 387px;
  }
}
</style>
