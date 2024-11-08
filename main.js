function start() {
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("buttonContainer").style.visibility = "visible"; // نمایش دکمه‌های بازی

  // تصاویر به حالت سنگ
  document.getElementById("img1").src = "image/rock.png"; // نمایش پیش‌فرض برای img1
  document.getElementById("img2").src = "image/rock.png"; // نمایش پیش‌فرض برای img2
}

const clickedHand = [
  "<img src='image/rock.png' id='img1'>",
  "<img src='image/paper.png' id='img1'>",
  "<img src='image/scissors.png' id='img1'>"
];

const clickedRightHand = [
  "<img src='image/rock.png' id='img2'>",
  "<img src='image/paper.png' id='img2'>",
  "<img src='image/scissors.png' id='img2'>"
];

function game(position) {
  // Animate images
  document.getElementById("img1").style.animation = 'shakeLeft 1s 5 ease-in-out';
  document.getElementById("img2").style.animation = 'shakeRight 1s 5 ease-in-out';

  // Generate random choice for computer
  const random = Math.floor(Math.random() * 3);
  
  // Show user choice after a delay
  setTimeout(() => {
      document.getElementById("hand2").innerHTML = clickedRightHand[random];
      document.getElementById("hand1").innerHTML = clickedHand[position];
  }, 1000); // 1 second delay for showing choices

  // Determine the winner after another delay
  setTimeout(() => {
      if (random === position) {
          alert("MATCH DRAW !!");
      } else if ((position === 0 && random === 2) || // Rock beats Scissors
                 (position === 1 && random === 0) || // Paper beats Rock
                 (position === 2 && random === 1)) { // Scissors beats Paper
          alert("YOU ARE WINNER, GOOD JOB!!");
      } else {
          alert("COMPUTER IS WINNER, TRY NEXT TIME!!");
      }
      window.location.reload(); // Reload the page to start a new game
  }, 2000); // 2 seconds delay for determining winner
}