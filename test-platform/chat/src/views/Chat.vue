<template>
  
    <div class="home">
      <div class="display-chat">

        <div class="header">
        <svgicon icon="drawing" width="24" height="24"></svgicon>   
          <b-row class="my-1">
            <label for="input-small">Your username:</label>
            <b-col sm="8"><input type="text"
              value="username"
              v-model="username">
            </b-col>
          </b-row>
          <div></div>
          <label for="input-small">User online:</label>
        </div>

        <div class="dialog-form">
          <div class="dialog">

            <b-alert class="current-user-text" :key="key" v-for="(message, key) in oldMessages" show>
              <div class="cop"></div>
                {{ message.messages }}
              <div class="date-send ml-3">
                <div class="name-user mt-1">{{ message.name }}</div>
               {{ message.createdAt.replace( /(\d{4}\-\d{2}\-\d{2}\w+)(\d{2}\:\d{2}\:\d{2})\.0{3}z/gi, "$2") }}
              </div>                
            </b-alert>            

            <b-alert class="current-user-text" :key="key" v-for="(message, key) in messages" show>
              <div class="cop"></div>
                {{ message.messages }}
              <div class="date-send ml-3">
                <div class="name-user mt-1">{{ message.name }}</div>
               {{ message.createdAt.replace( /(\d{4}\-\d{2}\-\d{2}\w+)(\d{2}\:\d{2}\:\d{2})\.0{3}z/gi, "$2") }}
              </div>                
            </b-alert>

             <b-alert class="not-username-text" v-show="check == true" show>
               You have not entered a name or message
            </b-alert>

          </div>

          <div class="users">
            <div class="user"
            :key="key" v-for="(message, key) in messages" show>{{message.name}}</div>
          </div>
        </div>
        <div class="message">
          <textarea
            v-model="message"
            placeholder="Enter something"
            @keyup.enter="send()"
            name="test"
            id="test"
            cols="45"
            rows="3">
          </textarea>
        <div class="button ml-4">
          <b-button @click="send()">Send message</b-button>
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
    ...mapState(["messages", "oldMessages"])
  },
  mounted() {
    setInterval(() => {
      this.actionloadMessages();
    }, 5000);
    this.actionOpenAllMessages();
  },
  data() {
    return {
      message: "",
      username: "",
      check: false
    };
  },
  methods: {
    ...mapActions([
      "actionloadMessages",
      "actionPostMessages",
      "actionOpenAllMessages"
    ]),
    send() {
      if (this.message != "" && this.username != "") {
        const messageUser = {
          messages: this.message,
          name: this.username,
          user_online: new Date()
            .toISOString()
            .slice(0, 19)
            .replace("T", " ")
        };
        this.actionPostMessages(messageUser);
        this.message = "";
        return (this.check = false);
      }
      this.check = true;
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
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        margin-left: 25px;
        height: 100%;
        width: 60%;
        border: 1px solid $border-color;
        overflow-y: scroll;

        .current-user-text {
          display: flex;
          align-items: center;
          flex-direction: row;
          font-size: 15px;
          height: 40px;
          margin: 0px 10px 10px 10px;
          .name-user {
            font-weight: bold;
            font-size: 12px;
          }
          .date-send {
            height: 40px;
            font-size: 10px;
            font-family: Arial;
          }
          .cop {
            border: 5px solid transparent;
            border-right: 5px solid #d1ecf1;
            border-bottom: 5px solid #d1ecf1;
            margin-left: -30px;
            margin-right: 10px;
            margin-top: 25px;
          }
        }
        .not-username-text {
          color: red;
          background-color: white;
          display: flex;
          align-items: center;
          flex-direction: row;
          font-size: 15px;
          height: 40px;
          margin: 0px 10px 10px 50px;
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
