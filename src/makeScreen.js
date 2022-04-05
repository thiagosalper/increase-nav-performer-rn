import { Navigation } from "react-native-navigation"

export default function makeScreen(name, component) {
  component.options = {
    topBar: {
      title: { text: name, color: 'white' },
      background: { color: '#4d089a' },
    },
  }
  Navigation.registerComponent(name, () => component);
  return {
    name,
    ...component,
    component,
  }
}
