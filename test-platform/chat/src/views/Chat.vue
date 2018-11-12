<template>
  
    <div class="home">
      <div class="display-chat">

        <div class="header">
        <svgicon icon="drawing" width="24" height="24"></svgicon>   
          <b-row class="my-1">
            <label for="input-small">Your username:</label>
            <b-col sm="8">
              <b-form-input id="input-small" size="sm" type="text" placeholder="Enter your name"></b-form-input>
            </b-col>
          </b-row>
          <div></div>
          <label for="input-small">User online:</label>

        </div>

        <div class="dialog-form">
          <div class="dialog">
            <b-alert class="current-user-text" :key="key" v-for="(message, key) in messages" show>
              <div class="cop"></div> 
              {{ message.messages }}
            </b-alert>
          </div>
          <div class="users"></div>
        </div>
        <div class="message">
        <b-form-textarea id="textarea1"
          v-model="message"
          placeholder="Enter something"
          :rows="3"
          :max-rows="6">
        </b-form-textarea> 
        <div class="button ml-4">
          <b-button @click="send(message)">Send message</b-button>
        </div>
        </div>
 
      </div>



    </div>
</template>

<script>
import "../icons";

import { mapState, mapActions } from "vuex";

export default {
  name: "Chat",
  computed: {
    ...mapState(["messages"])
  },
  mounted() {
    this.actionloadMessages();
  },
  data() {
    return {
      message: '',
    };
  },
  methods: {
    ...mapActions(["actionloadMessages", "actionPostMessages"]),
    send(message) {
      console.log('message:', message);
      const testMessages = {
        messages: this.message,
        name: 'alex', 
      }
      console.log('testMessage', testMessages)
      this.actionPostMessages(testMessages);
    }
  }
};
</script>

<style lang="scss" scoped>
$shadow: rgba(rgb(153, 153, 153), 0.4);
$border-color: rgba(rgb(95, 163, 219), 0.5);

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(white, 0.4);

  .display-chat {
    width: 700px;
    height: 600px;
    border: 1px solid $border-color;
    border-radius: 4%;
    box-shadow: 0 0 20px darken($shadow, $amount: 50);
    background: rgba(white, 0.9);
    .dialog-form {
      display: flex;
      margin-top: 20px;
      width: 100%;
      height: 65%;

      .dialog {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;
        margin-left: 25px;
        height: 100%;
        width: 60%;
        border: 1px solid $border-color;

        .current-user-text {
          display: flex;
          align-items: center;
          font-size: 15px;
          height: 25px;
          margin: 0px 10px 5px 10px;
          .cop {
            border: 5px solid transparent;
            border-right: 5px solid #d1ecf1;
            border-bottom: 5px solid #d1ecf1;
            margin-left: -30px;
            margin-right: 10px;
            margin-top: 12px;
          }
        }
      }
      .users {
        height: 100%;
        width: 30%;
        border: 1px solid $border-color;
        margin-left: 20px;
      }
    }

    .message {
      display: flex;
      width: 82.5%;
      margin: 20px 0px 0px 25px;
      flex-direction: row;
    }
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    margin-top: 20px;

    .svg-icon {
      fill: rgb(95, 163, 219);
      margin-top: -10px;
    }
  }
}
</style>
