var index;
const connected = document.getElementById("connected");
const debug = document.getElementById("debug");
const info = document.getElementById("info");

const deadzone = 0.15;
const modifier = 0.10;

var interval;

window.addEventListener('gamepadconnected', (e) => {
    index = e.gamepad.index;
    connected.classList = "green";
    debug.textContent = `Index: ${e.gamepad.index}\nId: ${e.gamepad.id}\nButtons: ${e.gamepad.buttons.length}\nAxes: ${e.gamepad.axes.length}`;
    interval = setInterval(() => {
        info.textContent = `Left Stick: (${round(navigator.getGamepads()[index].axes[0])}, ${round(navigator.getGamepads()[index].axes[1])})
        Right Stick: (${round(navigator.getGamepads()[index].axes[2])}, ${round(navigator.getGamepads()[index].axes[3])})
        Left Stick Pressed: ${navigator.getGamepads()[index].buttons[10].pressed}
        Right Stick Pressed: ${navigator.getGamepads()[index].buttons[11].pressed}
        Back Button: ${navigator.getGamepads()[index].buttons[8].pressed}
        Start Button: ${navigator.getGamepads()[index].buttons[9].pressed}

        A Button: ${navigator.getGamepads()[index].buttons[0].pressed}
        B Button: ${navigator.getGamepads()[index].buttons[1].pressed}
        X Button: ${navigator.getGamepads()[index].buttons[2].pressed}
        Y Button: ${navigator.getGamepads()[index].buttons[3].pressed}
        
        Up D-Pad ${navigator.getGamepads()[index].buttons[12].pressed}
        Down D-Pad ${navigator.getGamepads()[index].buttons[13].pressed}
        Left D-Pad ${navigator.getGamepads()[index].buttons[14].pressed}
        Right D-Pad ${navigator.getGamepads()[index].buttons[15].pressed}

        Left Bumper: ${navigator.getGamepads()[index].buttons[4].pressed}
        Right Bumper: ${navigator.getGamepads()[index].buttons[5].pressed}
        Right Trigger: ${navigator.getGamepads()[index].buttons[6].pressed}
        Right Trigger: ${navigator.getGamepads()[index].buttons[7].pressed}`;
        
    }, 100);
});

window.addEventListener('gamepaddisconnected', (e) => {
    controller = null;
    connected.classList = "red";
    debug.textContent = "";
    clearInterval(interval);
    info.textContent = "";
});

function round(int) {
    if (deadzone > int && -deadzone < int) return 0;
    else return Math.round(int*100)/100;
}