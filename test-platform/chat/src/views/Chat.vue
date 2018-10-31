<template>
  
    <div class="home">
      <div class="display-chat">

        <div class="header">
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
          <div class="dialog"></div>
          <div class="users"></div>
        </div>
        <div class="message">
        <b-form-textarea id="textarea1"
          v-model="text"
          placeholder="Enter something"
          :rows="3"
          :max-rows="6">
        </b-form-textarea> 
        <div class="button ml-4">
          <b-button>Send message</b-button>
        </div>
        </div>
 
      </div>



    </div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      text: '',
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
        margin-left: 25px;
        height: 100%;
        width: 60%;
        border: 1px solid $border-color;
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
    margin: 20px;
  }
}

</style>
