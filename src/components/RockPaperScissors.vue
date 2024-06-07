<template>
  <div class=app-container>
    <button 
      class="closeBtn"
      @click="closeMiniGame">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <div class="game-container">
      <div class="game-title">
        <h1>Rock-Paper-Scissors</h1>
      </div>
      <div class="game-counter" v-if="result">
        You: {{ playerScore }} | Computer: {{ computerScore }}
        <p>{{ result }}</p>
      </div>
      <div class="game-content">
        <div class="results" v-if="!result">
          <h2>Choose your pick</h2>
        </div>
        <div class="results" v-else>
          <p>You chose:
            <i 
              v-if="playerChoice === 'rock'"
              class="fa-solid fa-hand-fist">
            </i>
            <i 
              v-else-if="playerChoice === 'paper'"
              class="fa-solid fa-hand">
            </i>
            <i 
              v-else-if="playerChoice === 'scissors'"
              class="fa-solid fa-hand-scissors">
            </i>
          </p>
          <p>Computer chose: 
            <i 
              v-if="computerChoice === 'rock'"
              class="fa-solid fa-hand-fist">
            </i>
            <i 
              v-else-if="computerChoice === 'paper'"
              class="fa-solid fa-hand">
            </i>
            <i 
              v-else-if="computerChoice === 'scissors'"
              class="fa-solid fa-hand-scissors">
            </i>
          </p>
        </div>
        <div class="choices">
          <button @click="makeChoice('rock')">
              <i class="fa-solid fa-hand-fist"></i>
          </button>
          <button @click="makeChoice('paper')">
              <i class="fa-solid fa-hand"></i>
          </button>
          <button @click="makeChoice('scissors')">
              <i class="fa-solid fa-hand-scissors"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

//routing logic
const router = useRouter();
const closeMiniGame = () => {
  router.push('/'); 
};


//game logic
const playerChoice = ref('');
const computerChoice = ref('');
const result = ref('');
const playerScore = ref(0);
const computerScore = ref(0);

const makeChoice = (choice) => {
  playerChoice.value = choice;
  computerChoice.value = getComputerChoice();
  determineWinner();
}

const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
  const computerChoiceVal = choices[Math.floor(Math.random() * 3)];
  return computerChoiceVal;
}

const determineWinner = () => {
  if (playerChoice.value === computerChoice.value) {
    result.value = 'Its a tie!'; 
  } else if (
    (playerChoice.value === 'rock' && computerChoice.value === 'scissors') ||
    (playerChoice.value === 'paper' && computerChoice.value === 'rock') ||
    (playerChoice.value === 'scissors' && computerChoice.value === 'paper')
  ) {
    result.value = 'You win!';
    playerScore.value++;
  } else {
    result.value = 'You lose!';
    computerScore.value++;
  }
};  
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
  font-size: 2rem;
}
.closeBtn {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1rem;
  padding: 0.4rem 0.6rem;
  outline: none;
  border: none;
  border-radius: 6px;
  background: lightgray;
}
.closeBtn:hover {
  background: grey;
  cursor: pointer;
}
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.game-counter {
 text-align: center;
}
.results {
  display: flex;
  justify-content: space-around;
  column-gap: 2rem;
  margin: 4rem 0
}
.results p {
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
}
.game-container i {
  font-size: 4rem;
}

.choices {
  display: flex;
  justify-content: center;
  column-gap: 3rem;
  margin: 4rem 0;
}

.choices button {
  padding: 1rem 2rem;
  border: none;
}
</style>