import "./globals.css";
import App from './App.svelte';
import { mount } from "svelte";
import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'
const app = mount(App, {
    target: document.getElementById("app"),
});
export default app