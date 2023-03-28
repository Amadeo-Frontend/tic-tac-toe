var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

var currentPlayer = "X";

function handleCellClick(event) {
  var row = event.target.id[0];
  var col = event.target.id[1];

  if (board[row][col] === null) {
    board[row][col] = currentPlayer;
    event.target.textContent = currentPlayer;

    if (checkForWin() || checkForTie()) {
      setTimeout(resetBoard, 3000);
    } else {
      switchPlayers();
    }
  }
}

function checkForWin() {
  for (var i = 0; i < 3; i++) {
    if (
      board[i][0] !== null &&
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2]
    ) {
      displayMessage(currentPlayer + " ganhou!");
      return true;
    }
  }

  for (var j = 0; j < 3; j++) {
    if (
      board[0][j] !== null &&
      board[0][j] === board[1][j] &&
      board[0][j] === board[2][j]
    ) {
      displayMessage(currentPlayer + " ganhou!");
      return true;
    }
  }

  if (
    board[0][0] !== null &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    displayMessage(currentPlayer + " ganhou!");
    return true;
  }

  if (
    board[0][2] !== null &&
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0]
  ) {
    displayMessage(currentPlayer + " ganhou!");
    return true;
  }

  return false;
}

function checkForTie() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] === null) {
        return false;
      }
    }
  }

  displayMessage("Empate!");
  return true;
}

function switchPlayers() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function resetBoard() {
  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  currentPlayer = "X";

  var cells = document.querySelectorAll("td");
  cells.forEach(function (cell) {
    cell.textContent = "";
  });

  displayMessage("");
}

function displayMessage(message) {
  var messageElement = document.getElementById("message");
  messageElement.textContent = message;
}

var cells = document.querySelectorAll("td");
cells.forEach(function (cell) {
  cell.addEventListener("click", handleCellClick);
});

resetBoard();
