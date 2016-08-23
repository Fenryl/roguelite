import {VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_W, VK_A, VK_S, VK_D, VK_Z, VK_Q} from "rot"
import {Display} from "rot"
import {UserInterface} from "./ui"
import {GameScreen} from "./screens/game"

const ui = new UserInterface(
  new Map([
    [VK_LEFT, "left"],
    [VK_RIGHT, "right"],
    [VK_UP, "up"],
    [VK_DOWN, "down"],
    [VK_A, "left"],
    [VK_Q, "left"],
    [VK_D, "right"],
    [VK_W, "up"],
    [VK_Z, "up"],
    [VK_S, "down"],
  ])
)

ui.push(new GameScreen())

const display = new Display({
  width: 10,
  height: 10,
  fontSize: 20,
  forceSquareRatio: true,
})

document.body.appendChild(display.getContainer())
