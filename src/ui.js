export class UserInterface {
  constructor(keyBindings) {
    this.keyBindings = keyBindings
    this.screens = []
    window.addEventListener("keydown", this)
  }

  handleEvent(event) {
    if (this.screens.length > 0) {
      const currentScreen = this.getCurrentScreen()
      const input = this.keyBindings.get(event.keyCode)
      if (currentScreen && input) {
        currentScreen.handleInput(input)
      }
    }
  }

  getCurrentScreen() {
    return this.screens[this.screens.length - 1]
  }

  push(screen) {
    const previousScreen = this.getCurrentScreen()
    if (previousScreen) {
      previousScreen.unbind()
    }

    this.screens.push(screen)
    screen.bind(this)
  }

  pop() {
    const previousScreen = this.screens.pop()
    if (previousScreen) {
      previousScreen.unbind()
    }
    const currentScreen = this.getCurrentScreen()
    if (currentScreen) {
      currentScreen.bind(this)
    }
  }

  render(display) {
    const currentScreen = this.screens[this.screens.length - 1]
    currentScreen.render(display)
  }
}

export class Screen {
  unbind() {
    this.ui = null
  }

  bind(ui) {
    this.ui = ui
  }

  handleInput(input) {
    // Override this to handle keyboard inputs
  }

  render(display) {
    // Override this to render the screen
  }
}
